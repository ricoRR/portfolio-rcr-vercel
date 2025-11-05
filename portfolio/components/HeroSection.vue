<template>
  <section
    id="hero"
    class="relative overflow-hidden bg-gradient-to-b from-black via-[#121212] to-[#1a1a1a] px-6 py-16 text-white"
  >
    <div class="mx-auto flex max-w-5xl flex-col gap-10 md:flex-row md:items-center">
      <div class="flex-1 space-y-4">
        <p class="text-sm uppercase tracking-[0.3em] text-[#ffdd00]/80">
          Ricardo Chaves Rodrigues
        </p>
        <h1 class="text-3xl font-semibold text-[#ffdd00] md:text-5xl">
          Développeur Web Fullstack en Alternance
        </h1>
        <p class="max-w-xl text-base leading-relaxed text-gray-200">
          Étudiant à la Web@cademie by Epitech, je conçois des solutions web
          modernes en combinant front-end réactif et back-end robuste. J’aime
          transformer des besoins métiers en expériences numériques accessibles
          et performantes.
        </p>
        <ul class="flex flex-wrap gap-4 text-sm text-gray-300">
          <li class="flex items-center gap-2">
            <span class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#ffdd00]/10 text-[#ffdd00]">
              <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.94 6.34a7 7 0 1114.12 0 7 7 0 01-14.12 0zm7.06 5.16a5.16 5.16 0 005.16-5.16 5.16 5.16 0 10-10.32 0 5.16 5.16 0 005.16 5.16z"/><path d="M10 5a.75.75 0 01.75.75v2.5a.75.75 0 01-1.5 0v-2.5A.75.75 0 0110 5zm0 4.5a.75.75 0 110 1.5.75.75 0 010-1.5z"/></svg>
            </span>
            Paris 6ᵉ · Mobilité Île-de-France
          </li>
          <li class="flex items-center gap-2">
            <span class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#ffdd00]/10 text-[#ffdd00]">
              <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.94 5.5a2 2 0 012-2h10.12a2 2 0 012 2v.23l-7.03 4.22a1 1 0 01-1.02 0L2.94 5.73V5.5zm0 2.62v6.38a2 2 0 002 2h10.12a2 2 0 002-2V8.12l-5.44 3.26a3 3 0 01-3.06 0L2.94 8.12z"/></svg>
            </span>
            <a href="mailto:ricardo.chaves-rodrigues@epitech.eu" class="hover:text-[#ffdd00]">
              ricardo.chaves-rodrigues@epitech.eu
            </a>
          </li>
          <li class="flex items-center gap-2">
            <span class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#ffdd00]/10 text-[#ffdd00]">
              <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884l.518-1.932A2 2 0 014.462 2h.246a2 2 0 011.91 1.374l.325 1.015a2 2 0 01-.45 1.991l-.772.772a14.493 14.493 0 006.364 6.364l.772-.772a2 2 0 011.99-.45l1.016.325A2 2 0 0118 14.708v.246a2 2 0 01-1.952 1.941l-1.932.06c-7.23 0-13.113-5.883-13.113-13.071z"/></svg>
            </span>
            06 03 32 18 39
          </li>
        </ul>
        <div class="flex flex-wrap gap-3 pt-2 text-sm">
          <NuxtLink
            class="rounded-full bg-[#ffdd00] px-5 py-2 font-semibold text-black transition hover:bg-[#ffea4d]"
            to="#projects"
          >
            Découvrir mes projets
          </NuxtLink>
          <a
            class="rounded-full border border-[#ffdd00] px-5 py-2 font-semibold text-[#ffdd00] transition hover:bg-[#ffdd00]/10"
            href="/CDI_CV_Ricardo_Chaves_Rodrigues.pdf"
            download
          >
            Télécharger mon CV
          </a>
          <NuxtLink
            class="rounded-full border border-[#ffdd00] px-5 py-2 font-semibold text-[#ffdd00] transition hover:bg-[#ffdd00]/10"
            to="#contact"
          >
            Me contacter
          </NuxtLink>
        </div>
      </div>

      <div class="relative flex-1">
        <div class="relative mx-auto max-w-sm">
          <img
            :src="heroImage"
            alt="Portrait de Ricardo"
            class="h-full w-full rounded-3xl object-cover shadow-[0_0_60px_rgba(255,221,0,0.25)]"
          />
          <div class="absolute -left-6 -top-6 hidden h-24 w-24 rotate-6 items-center justify-center rounded-2xl border border-[#ffdd00]/30 bg-[#ffdd00]/10 text-xs font-semibold uppercase tracking-[0.2em] text-[#ffdd00] md:flex">
          </div>
          <div class="absolute -bottom-6 -right-6 hidden h-24 w-40 -rotate-6 rounded-2xl border border-[#ffdd00]/30 bg-[#ffdd00]/10 p-4 text-xs text-gray-200 md:block">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const heroImage = 'images/hero-portrait.jpg';
</script>
