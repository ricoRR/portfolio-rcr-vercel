<template>
  <section id="auth" class="bg-[#111] px-6 py-16 text-white">
    <div class="mx-auto max-w-4xl rounded-3xl border border-[#ffdd00]/20 bg-[#161616] p-8 shadow-[0_0_35px_rgba(255,221,0,0.05)]">
      <div class="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div class="md:w-1/2">
          <h2 class="text-2xl font-semibold text-[#ffdd00]">Espace partenaire</h2>
          <p class="mt-2 text-sm text-gray-300">
            Cet espace privé donne accès à la documentation complète du projet :
            cahier des charges, plan de tests, présentation et analyses. Un
            identifiant vous est communiqué lors de notre prise de contact.
          </p>
        </div>

        <div class="md:w-1/2">
          <div
            v-if="redirectMessage"
            class="mb-4 rounded-2xl border border-[#ffdd00]/30 bg-[#201f10] p-4 text-sm text-[#ffdd00]"
          >
            {{ redirectMessage }}
          </div>
          <form v-if="!authState.isAuthenticated" class="space-y-4" @submit.prevent="login">
            <div class="flex flex-col">
              <label class="mb-2 text-xs uppercase tracking-[0.3em] text-[#ffdd00]/70" for="auth-email">Email</label>
              <input
                id="auth-email"
                v-model="credentials.email"
                type="email"
                required
                class="rounded-xl border border-[#333] bg-[#1a1a1a] p-3 text-sm text-white focus:border-[#ffdd00] focus:outline-none"
                placeholder="partenaire@entreprise.com"
              />
            </div>
            <div class="flex flex-col">
              <label class="mb-2 text-xs uppercase tracking-[0.3em] text-[#ffdd00]/70" for="auth-password">Mot de passe</label>
              <input
                id="auth-password"
                v-model="credentials.password"
                type="password"
                required
                class="rounded-xl border border-[#333] bg-[#1a1a1a] p-3 text-sm text-white focus:border-[#ffdd00] focus:outline-none"
                placeholder="••••••••"
              />
            </div>
            <button
              type="submit"
              class="w-full rounded-full bg-[#ffdd00] py-3 text-sm font-semibold text-black transition hover:bg-[#ffe44d]"
              :disabled="loading"
            >
              <span v-if="loading">Connexion...</span>
              <span v-else>Se connecter</span>
            </button>
            <p v-if="errorMessage" class="text-sm text-[#ff9999]">{{ errorMessage }}</p>
          </form>

          <div v-else class="space-y-4">
            <div class="rounded-2xl border border-[#ffdd00]/30 bg-[#1f1f1f] p-4 text-sm text-gray-200">
              <p class="font-semibold text-[#ffdd00]">Accès accordé</p>
              <p>Bienvenue {{ authState.email }}. Consultez les ressources ci-dessous.</p>
            </div>
            <ul class="space-y-3 text-sm text-gray-200">
              <li>
                <NuxtLink class="text-[#ffdd00] underline hover:text-[#ffe44d]" to="/docs/project-presentation">
                  Présentation technique et maquette
                </NuxtLink>
              </li>
              <li>
                <NuxtLink class="text-[#ffdd00] underline hover:text-[#ffe44d]" to="/docs/test-plan">
                  Plan de tests & stratégie QA
                </NuxtLink>
              </li>
              <li>
                <NuxtLink class="text-[#ffdd00] underline hover:text-[#ffe44d]" to="/docs/user-guide">
                  Guide utilisateur
                </NuxtLink>
              </li>
              <li>
                <NuxtLink class="text-[#ffdd00] underline hover:text-[#ffe44d]" to="/docs/improvements">
                  Propositions d’amélioration
                </NuxtLink>
              </li>
            </ul>
            <button
              type="button"
              class="rounded-full border border-[#ffdd00] px-6 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#ffdd00] transition hover:bg-[#ffdd00]/10"
              @click="logout"
            >
              Se déconnecter
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue';
import { useRoute, useRouter } from '#imports';
import { useAuthState } from '~/composables/useAuthState';

const authState = useAuthState();
const route = useRoute();
const router = useRouter();
const credentials = reactive({
  email: '',
  password: '',
});
const loading = ref(false);
const errorMessage = ref('');
const redirectMessage = computed(() =>
  route.query.auth === 'required'
    ? 'Connexion requise pour consulter la documentation privée. Merci de saisir vos identifiants.'
    : ''
);

async function login() {
  loading.value = true;
  errorMessage.value = '';
  try {
    const response = await $fetch('/api/auth/login', {
      method: 'POST',
      body: {
        email: credentials.email,
        password: credentials.password,
      },
    });

    if (response?.success) {
      authState.value.isAuthenticated = true;
      authState.value.email = credentials.email;
      credentials.email = '';
      credentials.password = '';

      const redirectTarget =
        typeof route.query.redirectedFrom === 'string' ? route.query.redirectedFrom : null;

      const cleanedQuery = { ...route.query };
      cleanedQuery.auth = undefined;
      cleanedQuery.redirectedFrom = undefined;

      if (redirectTarget) {
        await router.push(redirectTarget);
      } else if (route.query.auth || route.query.redirectedFrom) {
        await router.replace({ query: cleanedQuery });
      }
    }
  } catch (error: any) {
    const message =
      error?.data?.message ?? error?.data?.statusMessage ?? 'Identifiants invalides.';
    errorMessage.value = message;
  } finally {
    loading.value = false;
  }
}

function logout() {
  authState.value.isAuthenticated = false;
  authState.value.email = null;
}
</script>
