<template>
  <section id="competencies" class="bg-[#0f0f0f] px-6 py-16 text-white">
    <div class="mx-auto max-w-5xl space-y-8">
      <div class="space-y-3">
        <p class="text-xs uppercase tracking-[0.4em] text-[#ffdd00]/60">RNCP 5</p>
        <h2 class="text-2xl font-semibold text-[#ffdd00]">
          Compétences & preuves
        </h2>
        <p class="text-sm text-gray-300">
          Chaque bloc de compétences RNCP est relié à des projets livrés ou à des missions en
          alternance. Les preuves citées sont disponibles sur demande dans l’espace partenaire.
        </p>
      </div>

      <div class="space-y-6">
        <article
          v-for="bloc in competencyMatrix"
          :key="bloc.code"
          class="rounded-3xl border border-[#ffdd00]/15 bg-[#161616] p-6 shadow-[0_0_25px_rgba(255,221,0,0.05)]"
        >
          <header class="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
            <div>
              <p class="text-xs uppercase tracking-[0.3em] text-[#ffdd00]/70">{{ bloc.code }}</p>
              <h3 class="text-lg font-semibold text-white">{{ bloc.title }}</h3>
            </div>
            <p class="text-xs text-gray-400">{{ bloc.validation }}</p>
          </header>

          <div class="mt-5 grid gap-6 md:grid-cols-2">
            <div>
              <h4 class="text-xs font-semibold uppercase tracking-[0.3em] text-[#ffdd00]/70">
                Compétences visées
              </h4>
              <ul class="mt-3 space-y-2 text-sm leading-relaxed text-gray-200">
                <li v-for="competence in bloc.competencies" :key="competence">
                  {{ competence }}
                </li>
              </ul>
            </div>
            <div>
              <h4 class="text-xs font-semibold uppercase tracking-[0.3em] text-[#ffdd00]/70">
                Réalisations associées
              </h4>
              <ul class="mt-3 space-y-3 text-sm leading-relaxed text-gray-200">
                <li v-for="proof in bloc.evidences" :key="proof.title">
                  <p class="font-semibold text-white">{{ proof.title }}</p>
                  <p class="text-xs uppercase tracking-[0.25em] text-[#ffdd00]/70">
                    {{ proof.context }}
                  </p>
                  <p class="mt-1 text-gray-300">{{ proof.details }}</p>
                </li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
type CompetencyProof = {
  title: string;
  context: string;
  details: string;
};

type CompetencyBloc = {
  code: string;
  title: string;
  validation: string;
  competencies: string[];
  evidences: CompetencyProof[];
};

const competencyMatrix: CompetencyBloc[] = [
  {
    code: 'Bloc 1',
    title: 'Développer des interfaces utilisateur modernes',
    validation: 'Validé via TopHardware & Propulse by CA',
    competencies: [
      'Concevoir des maquettes fonctionnelles et UI responsive.',
      'Implémenter des interfaces web accessibles en Vue/Nuxt et React.',
      'Intégrer des parcours utilisateurs avec gestion d’état et tests UI.',
    ],
    evidences: [
      {
        title: 'TopHardware – Front e-commerce',
        context: 'Projet d’équipe · 2024',
        details:
          'Création des écrans catalogue et tunnel de paiement Stripe en Next.js, animation des composants et audit Lighthouse (score ≥ 90).',
      },
      {
        title: 'Propulse by CA – Dashboard Discourse',
        context: 'Alternance · 2025',
        details:
          'Développement des écrans admin Vue 3 / Nuxt avec design system interne, dark mode et scénarios Jest/Mocha.',
      },
    ],
  },
  {
    code: 'Bloc 2',
    title: 'Développer des API et des services back-end',
    validation: 'Validé via Propulse by CA & TopHardware',
    competencies: [
      'Modéliser des données relationnelles / NoSQL et sécuriser les accès.',
      'Développer des API REST documentées (Swagger, Postman).',
      'Automatiser les tests unitaires et d’intégration (Jest, Mocha, Chai).',
    ],
    evidences: [
      {
        title: 'Propulse by CA – API Forum',
        context: 'Alternance · 2025',
        details:
          'Spécification et développement d’une API REST orchestrant Discourse, avec scripts de migration MongoDB ↔ DatoCMS et déploiement AWS Lambda.',
      },
      {
        title: 'TopHardware – API Symfony',
        context: 'Projet d’équipe · 2024',
        details:
          'Création d’une API Symfony sécurisée (JWT + OAuth 2.0) pour gérer catalogue, commandes et notifications Stripe.',
      },
    ],
  },
  {
    code: 'Bloc 3',
    title: 'Déployer, maintenir et améliorer une application',
    validation: 'Validé via Propulse by CA & projets académiques',
    competencies: [
      'Automatiser le déploiement et surveiller la qualité de service.',
      'Rédiger la documentation et capitaliser les retours utilisateurs.',
      'Planifier et exécuter des tests QA (unitaires, e2e, accessibilité).',
    ],
    evidences: [
      {
        title: 'Propulse by CA – Mise en production',
        context: 'Alternance · 2025',
        details:
          'Participation à la mise en production d’un forum Discourse (Amplify, S3), gestion des releases et rédaction des runbooks.',
      },
      {
        title: 'Portfolio – Plan de tests & monitoring',
        context: 'Projet individuel · 2025',
        details:
          'Plan QA documenté (docs/test-plan), mise en place des métriques Lighthouse, sauvegarde des messages via API Node + SQLite.',
      },
    ],
  },
  {
    code: 'Bloc 4',
    title: 'Piloter son apprentissage et collaborer',
    validation: 'Validé via alternance & travaux académiques',
    competencies: [
      'Analyser sa progression et formaliser un plan d’amélioration.',
      'Collaborer en équipe agile (Trello, code reviews, communication).',
      'Partager les connaissances via documentation et présentations.',
    ],
    evidences: [
      {
        title: 'Portfolio – Analyse réflexive',
        context: 'Projet individuel · 2025',
        details:
          'Production des documents d’analyse (docs/improvements, docs/qa-monitoring) et suivi des objectifs ICE.',
      },
      {
        title: 'Propulse by CA – Collaboration',
        context: 'Alternance · 2025',
        details:
          'Participation aux rituels Scrum, rédaction de CR Trello, animation de démonstrations produit hebdomadaires.',
      },
    ],
  },
];
</script>
