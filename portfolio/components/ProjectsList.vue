<template>
  <section id="projects" class="bg-[#0d0d0d] px-6 py-16 text-white">
    <div class="mx-auto max-w-5xl">
      <h2 class="text-2xl font-semibold text-[#ffdd00]">Projets sélectionnés</h2>
      <p class="mt-2 max-w-2xl text-sm text-gray-300">
        Chaque projet met en avant un pan différent de mon travail : e-commerce
        complet avec API sécurisée, jeu modulaire orienté objet et application
        collaborative avec back office.
      </p>

      <div class="mt-10 grid gap-6 md:grid-cols-2">
        <article
          v-for="project in projects"
          :key="project.title"
          class="flex flex-col justify-between rounded-2xl border border-[#ffdd00]/20 bg-[#161616] p-6 shadow-[0_0_25px_rgba(255,221,0,0.05)] transition hover:-translate-y-1"
        >
          <div class="space-y-4">
            <header class="space-y-2">
              <p class="text-xs uppercase tracking-[0.3em] text-[#ffdd00]/70">
                {{ project.context }}
              </p>
              <h3 class="text-xl font-semibold text-white">{{ project.title }}</h3>
            </header>
            <p class="text-sm leading-relaxed text-gray-200">
              {{ project.description }}
            </p>
            <ul class="flex flex-wrap gap-2 text-xs uppercase tracking-wide text-[#ffdd00]">
              <li
                v-for="tech in project.stack"
                :key="tech"
                class="rounded-full bg-[#ffdd00]/10 px-3 py-1"
              >
                {{ tech }}
              </li>
            </ul>
          </div>
          <footer class="mt-6 flex items-center justify-between text-xs text-gray-400">
            <span>{{ project.duration }}</span>
            <span>{{ project.team }}</span>
          </footer>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const projects = [
  {
    title: 'TopHardware',
    context: 'Projet d’e-commerce & API',
    description:
      "Site e-commerce complet avec paiement Stripe, API REST sécurisée et authentification Oauth 2.0. Suivi Agile sur Trello pour synchroniser les livraisons.",
    stack: ['TypeScript', 'React', 'Next.js', 'PHP', 'Symfony', 'MySQL'],
    duration: '2 mois',
    team: 'Équipe de 4 personnes',
  },
  {
    title: 'Puissance 4',
    context: 'Prototype solo',
    description:
      "Implémentation modulaire du jeu Puissance 4 sous forme de script JavaScript orienté objet avec séparation claire des responsabilités.",
    stack: ['HTML', 'CSS', 'JavaScript'],
    duration: '1 semaine',
    team: 'Projet individuel',
  },
  {
    title: 'MyQuizz',
    context: 'Application web & API',
    description:
      "Jeu de culture générale avec API REST, gestion du leaderboard et back office pour administrer les utilisateurs et les questions.",
    stack: ['PHP', 'Symfony', 'Tailwind', 'MySQL'],
    duration: '2 semaines',
    team: 'Binôme',
  },
];
</script>
