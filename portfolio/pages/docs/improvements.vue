<template>
  <div class="min-h-screen bg-[#0b0b0b] px-6 py-16 text-gray-200">
    <div class="mx-auto max-w-4xl space-y-10">
      <header class="space-y-2">
        <p class="text-xs uppercase tracking-[0.4em] text-[#ffdd00]/60">Améliorations</p>
        <h1 class="text-3xl font-semibold text-[#ffdd00]">Analyse & recommandations</h1>
        <p class="text-sm text-gray-300">Bilan de la version actuelle, retours utilisateurs et pistes d’évolution.</p>
      </header>

      <section class="space-y-3">
        <h2 class="text-xl font-semibold text-white">1. Monitoring & retours</h2>
        <ul class="list-disc space-y-2 pl-6 text-sm">
          <li>Collecte des messages entrants (clin d’œil aux points d’intérêt du formulaire).</li>
          <li>Suivi des sessions via un tableau récapitulatif (Google Analytics 4 prévu).</li>
          <li>Feedback qualitatif obtenu lors d’entretiens avec deux recruteurs.</li>
        </ul>
      </section>

      <section class="space-y-3">
        <h2 class="text-xl font-semibold text-white">2. Ergonomie & accessibilité</h2>
        <ul class="list-disc space-y-2 pl-6 text-sm">
          <li>Contrastes conformes WCAG AA (vérifiés avec Lighthouse).</li>
          <li>Navigation clavier : focus visible et modale fermable à la touche ESC.</li>
          <li>Amélioration prévue : ajouter un bouton “Aller au contenu” et traduire l’alternative des images en anglais.</li>
        </ul>
      </section>

      <section class="space-y-3">
        <h2 class="text-xl font-semibold text-white">3. Pistes d’amélioration</h2>
        <ul class="list-disc space-y-2 pl-6 text-sm">
          <li>Automatiser les tests E2E (Playwright) pour sécuriser chaque livraison.</li>
          <li>Ajouter un filtrage interactif sur les projets (stack, durée, rôle).</li>
          <li>Intégrer un module CMS headless (Contentful / Strapi) pour éditer les contenus sans déploiement.</li>
          <li>Déployer l’application sur un service managé (Render) avec pipeline CI/CD GitHub Actions.</li>
        </ul>
      </section>

      <section class="space-y-3">
        <h2 class="text-xl font-semibold text-white">4. Priorisation</h2>
        <p class="text-sm text-gray-300">
          Les améliorations sont ordonnées par impact :
        </p>
        <ol class="list-decimal space-y-2 pl-6 text-sm">
          <li>Mise en place du suivi analytique (pour mesurer l’engagement).</li>
          <li>Automatisation des tests QA.</li>
          <li>Refonte du module projets avec un CMS.</li>
          <li>Internationalisation des contenus (FR/EN/PT).</li>
        </ol>
      </section>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ['docs-guard'],
});
</script>
