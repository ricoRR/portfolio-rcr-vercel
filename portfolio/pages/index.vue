<template>
  <div class="min-h-screen bg-[#0a0a0a] text-white">
    <HeroSection />
    <AboutSection />
    <Carousel />
    <CompetenciesSection />
    <ProjectsList />
    <AuthSection />
    <ContactForm />
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Ricardo Chaves Rodrigues · Développeur Web Fullstack',
  description:
    'Portfolio hybride de Ricardo Chaves Rodrigues : projets web fullstack, alternance Propulse by CA, compétences RNCP et documentation partenaire.',
  ogTitle: 'Portfolio · Ricardo Chaves Rodrigues',
  ogDescription:
    'Découvrez les projets, compétences et analyses RNCP de Ricardo Chaves Rodrigues, développeur web fullstack en alternance.',
  ogType: 'website',
  ogUrl: 'https://ricorr.github.io/portfolio-rcr/',
  ogImage: 'https://ricorr.github.io/portfolio-rcr/images/hero-portrait.jpg',
  twitterCard: 'summary_large_image',
});
</script>
