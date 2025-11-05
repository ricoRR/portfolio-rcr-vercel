<template>
  <div class="min-h-screen bg-[#0b0b0b] px-6 py-16 text-gray-200">
    <div class="mx-auto max-w-4xl space-y-10">
      <header class="space-y-2">
        <p class="text-xs uppercase tracking-[0.4em] text-[#ffdd00]/60">Qualité</p>
        <h1 class="text-3xl font-semibold text-[#ffdd00]">Plan de tests</h1>
        <p class="text-sm text-gray-300">Stratégie de validation et scénarios principaux pour garantir la qualité du portfolio.</p>
      </header>

      <section class="space-y-3">
        <h2 class="text-xl font-semibold text-white">1. Objectifs QA</h2>
        <ul class="list-disc space-y-2 pl-6 text-sm">
          <li>Assurer le fonctionnement des fonctionnalités clés (contact, authentification, navigation).</li>
          <li>Vérifier la compatibilité sur les principaux navigateurs desktop et mobile.</li>
          <li>Contrôler les exigences d’accessibilité de base (contrastes, navigation clavier, alternatives).</li>
        </ul>
      </section>

      <section class="space-y-4">
        <h2 class="text-xl font-semibold text-white">2. Scénarios prioritaires</h2>
        <div class="space-y-3 rounded-2xl border border-[#ffdd00]/20 bg-[#151515] p-6 text-sm">
          <div>
            <h3 class="font-semibold text-[#ffdd00]">Formulaire de contact</h3>
            <ul class="list-disc space-y-1 pl-5 text-gray-300">
              <li>TC01 — Soumission valide affiche un message de succès et vide les champs.</li>
              <li>TC02 — Email invalide bloque l’envoi (validation HTML).</li>
              <li>TC03 — Simulation d’erreur serveur renvoie un message d’échec.</li>
            </ul>
          </div>
          <div>
            <h3 class="font-semibold text-[#ffdd00]">Authentification</h3>
            <ul class="list-disc space-y-1 pl-5 text-gray-300">
              <li>TC10 — Identifiants valides donnent accès aux docs.</li>
              <li>TC11 — Identifiants invalides renvoient un message d’erreur.</li>
              <li>TC12 — Bouton “Se déconnecter” purge la session locale.</li>
            </ul>
          </div>
          <div>
            <h3 class="font-semibold text-[#ffdd00]">Navigation & UI</h3>
            <ul class="list-disc space-y-1 pl-5 text-gray-300">
              <li>TC20 — Les ancres du header scrollent vers les sections.</li>
              <li>TC21 — Le carousel passe correctement d’un item à l’autre.</li>
              <li>TC22 — Le modal galerie s’ouvre/ferme au clic et à la touche ESC.</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="space-y-3">
        <h2 class="text-xl font-semibold text-white">3. Stratégie</h2>
        <p class="text-sm text-gray-300">
          Les tests manuels sont priorisés pour cette version. Un socle de tests
          automatisés (Vitest + Testing Library) est planifié pour les composants
          interactifs (carousel, modal, authentification). Les exécutions seront
          documentées dans un journal de tests (<code>docs/test-report.md</code>).
        </p>
      </section>

      <section class="space-y-3">
        <h2 class="text-xl font-semibold text-white">4. Outils</h2>
        <ul class="list-disc space-y-2 pl-6 text-sm">
          <li>Check-list accessibilité avec l’extension Lighthouse (Chrome).</li>
          <li>Tests manuels sur Chrome, Firefox, Edge et Safari mobile.</li>
          <li>Suivi des anomalies via un tableau Trello “QA”.</li>
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
