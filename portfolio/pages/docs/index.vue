<template>
  <div class="min-h-screen bg-[#0b0b0b] px-6 py-16 text-gray-200">
    <div class="mx-auto max-w-3xl space-y-8">
      <header class="space-y-3">
        <p class="text-xs uppercase tracking-[0.4em] text-[#ffdd00]/60">Documentation</p>
        <h1 class="text-3xl font-semibold text-[#ffdd00]">Centre de documentation</h1>
        <p class="text-sm text-gray-300">
          Retrouvez ici l’ensemble des documents produits autour du projet :
          cadrage, plan de tests, guide utilisateur et pistes d’amélioration.
        </p>
      </header>
      <ul class="space-y-3 text-sm">
        <li>
          <NuxtLink class="text-[#ffdd00] underline hover:text-[#ffe44d]" to="/docs/project-presentation">
            Présentation technique & maquette
          </NuxtLink>
        </li>
        <li>
          <NuxtLink class="text-[#ffdd00] underline hover:text-[#ffe44d]" to="/docs/test-plan">
            Plan de tests
          </NuxtLink>
        </li>
        <li>
          <NuxtLink class="text-[#ffdd00] underline hover:text-[#ffe44d]" to="/docs/user-guide">
            Guide utilisateur
          </NuxtLink>
        </li>
        <li>
          <NuxtLink class="text-[#ffdd00] underline hover:text-[#ffe44d]" to="/docs/improvements">
            Analyse & recommandations
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ['docs-guard'],
});
</script>
