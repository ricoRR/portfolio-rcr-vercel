<template>
  <section id="about" class="bg-[#111] px-6 py-16 text-gray-100">
    <div class="mx-auto max-w-5xl space-y-12">
      <div class="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-start">
        <div class="space-y-6">
          <h2 class="text-2xl font-semibold text-[#ffdd00]">À propos</h2>
          <p class="leading-relaxed text-gray-200">
            Je suis passionné par la création de solutions web robustes et
            intuitives. Après plusieurs expériences centrées sur la rigueur et
            le service, j’ai choisi de mettre cette exigence au cœur de mes
            projets numériques. J’aime particulièrement travailler sur des
            architectures complètes comprenant API, base de données et interfaces
            réactives.
          </p>
          <p class="leading-relaxed text-gray-200">
            Depuis 2025, je poursuis mon alternance chez Propulse by CA comme développeur
            fullstack, où je conçois des API, automatise des migrations de données et
            accompagne la mise en production d’un forum Discourse. Mon objectif est de
            rejoindre une équipe où je peux contribuer à la conception, au développement
            et au déploiement d’applications web modernes, tout en continuant d’apprendre
            auprès de développeurs expérimentés.
          </p>
          <div class="grid gap-6 md:grid-cols-2">
            <div>
              <h3 class="mb-3 text-lg font-semibold text-white">Expériences</h3>
              <ul class="space-y-4 text-sm text-gray-300">
                <li>
                  <p class="font-semibold text-white">Développeur Fullstack · Propulse by CA · 2025</p>
                  <ul class="mt-2 space-y-1 text-gray-300">
                    <li>Conception d’une API REST de gestion de forum intégrée à l’API Discourse.</li>
                    <li>Migrations de contenus MongoDB & DatoCMS vers AWS (Amplify, S3, Lambda).</li>
                    <li>Mise en production d’un forum Discourse avec pipelines de tests (Jest, Mocha, Chai).</li>
                    <li>Rédaction de tests unitaires, documentation et suivi des releases.</li>
                    <li class="text-[#ffdd00]">Tech : Vue 3, Nuxt, TypeScript, SCSS, MongoDB, DatoCMS, AWS.</li>
                  </ul>
                </li>
                <li>
                  <p class="font-semibold text-white">Gardiennage · 2022-2023</p>
                  <p>Accueil des résidents, gestion des colis, communication terrain.</p>
                </li>
                <li>
                  <p class="font-semibold text-white">Technicien du froid · 2019-2021</p>
                  <p>Maintenance, diagnostic précis et sens du détail en environnement exigeant.</p>
                </li>
              </ul>
            </div>
            <div>
              <h3 class="mb-3 text-lg font-semibold text-white">Formation & Diplômes</h3>
              <ul class="space-y-4 text-sm text-gray-300">
                <li>
                  <p class="font-semibold text-white">Web@cademie by Epitech</p>
                  <p>Promotion 2023-2025 · Alternance 3 semaines / 1 semaine</p>
                </li>
                <li>
                  <p class="font-semibold text-white">Titre RNCP 5 Développeur Web</p>
                  <p>Certification en cours d’obtention</p>
                </li>
                <li>
                  <p class="font-semibold text-white">Permis B</p>
                  <p>Délivré en 2020</p>
                </li>
                <li>
                  <p class="font-semibold text-white">Baccalauréat Professionnel TFCA</p>
                  <p>Obtenu en 2018</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="space-y-8">
          <div class="rounded-2xl border border-[#ffdd00]/20 bg-[#161616] p-6">
            <h3 class="mb-4 text-lg font-semibold text-white">Compétences techniques</h3>
            <ul class="flex flex-wrap gap-2 text-xs uppercase tracking-wide text-[#ffdd00]">
              <li class="rounded-full bg-[#ffdd00]/10 px-3 py-1">PHP 8 (Laravel, Symfony)</li>
              <li class="rounded-full bg-[#ffdd00]/10 px-3 py-1">JavaScript ES6 (Express)</li>
              <li class="rounded-full bg-[#ffdd00]/10 px-3 py-1">TypeScript</li>
              <li class="rounded-full bg-[#ffdd00]/10 px-3 py-1">Node.js</li>
              <li class="rounded-full bg-[#ffdd00]/10 px-3 py-1">Vue 3 · Nuxt</li>
              <li class="rounded-full bg-[#ffdd00]/10 px-3 py-1">Angular</li>
              <li class="rounded-full bg-[#ffdd00]/10 px-3 py-1">React Native (Expo)</li>
              <li class="rounded-full bg-[#ffdd00]/10 px-3 py-1">HTML5 · CSS3 · SCSS</li>
              <li class="rounded-full bg-[#ffdd00]/10 px-3 py-1">MySQL · MongoDB</li>
              <li class="rounded-full bg-[#ffdd00]/10 px-3 py-1">Ajax</li>
              <li class="rounded-full bg-[#ffdd00]/10 px-3 py-1">Bash · Git</li>
            </ul>
          </div>

          <div class="rounded-2xl border border-[#ffdd00]/20 bg-[#161616] p-6">
            <h3 class="mb-4 text-lg font-semibold text-white">Langues</h3>
            <ul class="space-y-3 text-sm text-gray-200">
              <li class="flex items-center justify-between">
                <span>Français</span>
                <span class="font-semibold text-[#ffdd00]">C2</span>
              </li>
              <li class="flex items-center justify-between">
                <span>Portugais</span>
                <span class="font-semibold text-[#ffdd00]">C2</span>
              </li>
              <li class="flex items-center justify-between">
                <span>Anglais</span>
                <span class="font-semibold text-[#ffdd00]">C1</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="rounded-3xl border border-[#ffdd00]/10 bg-[#151515] p-6 md:p-10">
        <h3 class="mb-4 text-lg font-semibold text-[#ffdd00]">Ma valeur ajoutée</h3>
        <p class="text-sm leading-relaxed text-gray-200">
          Je travaille avec des méthodes agiles pour livrer des fonctionnalités
          testées et documentées. Mon expérience terrain me permet de garder un
          contact direct avec les utilisateurs finaux et d’intégrer leurs retours
          dans l’évolution du produit. Je suis à l’aise avec les outils de
          versionnage (Git/GitHub), la collaboration asynchrone et la
          communication d’équipe.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>
