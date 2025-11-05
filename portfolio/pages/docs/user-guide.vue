<template>
  <div class="min-h-screen bg-[#0b0b0b] px-6 py-16 text-gray-200">
    <div class="mx-auto max-w-4xl space-y-10">
      <header class="space-y-2">
        <p class="text-xs uppercase tracking-[0.4em] text-[#ffdd00]/60">Support utilisateur</p>
        <h1 class="text-3xl font-semibold text-[#ffdd00]">Guide d’utilisation</h1>
        <p class="text-sm text-gray-300">Instructions pas-à-pas pour naviguer dans le portfolio et contacter Ricardo.</p>
      </header>

      <section class="space-y-3">
        <h2 class="text-xl font-semibold text-white">1. Navigation rapide</h2>
        <ol class="list-decimal space-y-2 pl-6 text-sm">
          <li>Utilisez le menu fixe pour accéder directement aux sections clés.</li>
          <li>Le bouton “Découvrir mes projets” descend vers la liste des projets.</li>
          <li>La galerie d’images s’ouvre en plein écran pour examiner les visuels.</li>
        </ol>
      </section>

      <section class="space-y-3">
        <h2 class="text-xl font-semibold text-white">2. Contacter Ricardo</h2>
        <ol class="list-decimal space-y-2 pl-6 text-sm">
          <li>Rendez-vous dans la section “Me contacter”.</li>
          <li>Renseignez votre nom, votre email professionnel et votre message.</li>
          <li>Cliquez sur “Envoyer”. Un message de confirmation s’affiche en cas de succès.</li>
        </ol>
        <p class="text-sm text-gray-300">
          Les réponses sont gérées manuellement sous 48h maximum. Pour un contact direct,
          utilisez le bouton “Email” présent dans l’en-tête du site.
        </p>
      </section>

      <section class="space-y-3">
        <h2 class="text-xl font-semibold text-white">3. Accès documentations</h2>
        <p class="text-sm text-gray-300">
          Les documents détaillés (présentation, plan de tests, analyses) sont protégés par un accès.
          Après connexion, les liens apparaissent dans l’espace partenaire.
        </p>
        <ol class="list-decimal space-y-2 pl-6 text-sm">
          <li>Cliquez sur “Se connecter” dans la section “Espace partenaire”.</li>
          <li>Saisissez les identifiants fournis par Ricardo.</li>
          <li>Accédez aux ressources et déconnectez-vous après consultation.</li>
        </ol>
      </section>

      <section class="space-y-3">
        <h2 class="text-xl font-semibold text-white">4. Support & feedback</h2>
        <p class="text-sm text-gray-300">
          Pour signaler un problème ou suggérer une amélioration, envoyez un email à
          <a class="text-[#ffdd00] underline" href="mailto:ricardo.chaves-rodrigues@epitech.eu">ricardo.chaves-rodrigues@epitech.eu</a>
          en précisant :
        </p>
        <ul class="list-disc space-y-2 pl-6 text-sm">
          <li>Le contexte (navigateur, appareil, date).</li>
          <li>Les étapes réalisées avant le problème.</li>
          <li>Des captures d’écran si possible.</li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ['docs-guard'],
});
</script>
