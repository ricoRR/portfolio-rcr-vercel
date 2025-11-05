<template>
  <section id="gallery" class="bg-[#0d0d0d] px-6 py-16 text-white">
    <div class="mx-auto max-w-5xl">
      <div class="flex flex-col gap-4 md:flex-row md:items-baseline md:justify-between">
        <div>
          <h2 class="text-2xl font-semibold text-[#ffdd00]">Captures de projets</h2>
          <p class="mt-2 max-w-xl text-sm text-gray-300">
            Quelques visuels illustrant l’interface des projets les plus récents.
            Cliquez pour agrandir.
          </p>
        </div>
        <span class="text-xs uppercase tracking-[0.3em] text-[#ffdd00]/60">Front-end • UX • API</span>
      </div>

      <div class="mt-8 grid gap-6 md:grid-cols-3">
        <button
          v-for="item in images"
          :key="item.alt"
          type="button"
          class="group relative overflow-hidden rounded-2xl border border-[#ffdd00]/20 bg-[#151515]"
          @click="openModal(item)"
        >
          <img
            :src="item.src"
            :alt="item.alt"
            class="h-40 w-full object-cover transition duration-300 group-hover:scale-105"
          />
          <div class="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 text-left">
            <p class="text-sm font-semibold text-white">{{ item.title }}</p>
            <p class="text-xs text-gray-300">{{ item.caption }}</p>
          </div>
        </button>
      </div>
    </div>

    <Teleport to="body">
      <div
        v-if="showModal"
        class="fixed inset-0 z-[999] grid place-items-center bg-black/70 backdrop-blur-sm"
        @keydown.esc="closeModal"
        @click.self="closeModal"
      >
        <div class="relative mx-4 flex max-w-3xl flex-col overflow-hidden rounded-3xl border border-[#ffdd00]/20 bg-[#111] shadow-2xl">
          <header class="flex items-center justify-between border-b border-white/5 px-6 py-4">
            <div>
              <p class="text-sm font-semibold text-[#ffdd00]">{{ activeItem?.title }}</p>
              <p class="text-xs text-gray-300">{{ activeItem?.caption }}</p>
            </div>
            <button
              type="button"
              class="rounded-full border border-white/20 p-2 text-gray-300 transition hover:text-white"
              @click="closeModal"
            >
              <span class="sr-only">Fermer</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </button>
          </header>
          <img
            :src="activeItem?.src"
            :alt="activeItem?.alt"
            class="h-96 w-full object-cover"
          />
        </div>
      </div>
    </Teleport>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const images = [
  {
    src: 'images/gallery-top-hardware.png',
    alt: 'Interface du projet TopHardware',
    title: 'TopHardware',
    caption: 'E-commerce · Catalogue produit et tunnel de paiement Stripe',
  },
  {
    src: 'images/gallery-myquizz.png',
    alt: 'Interface du jeu MyQuizz',
    title: 'MyQuizz',
    caption: 'Back office admin et quiz multi-joueurs',
  },
  {
    src: 'images/gallery-puissance4.jpg',
    alt: 'Prototype Puissance 4',
    title: 'Puissance 4',
    caption: 'Jeu modulaire orienté objet · Interface responsive',
  },
];

const showModal = ref(false);
const activeItem = ref<typeof images[number] | null>(null);

function openModal(item: typeof images[number]) {
  activeItem.value = item;
  showModal.value = true;
}

function closeModal() {
  showModal.value = false;
  activeItem.value = null;
}
</script>
