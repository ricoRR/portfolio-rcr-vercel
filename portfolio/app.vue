<template>
  <div class="portfolio-app">
    <app-header />
    <main>
      <NuxtLayout>
        <NuxtPage/>
      </NuxtLayout>
    </main>
    <app-footer />
  </div>
</template>

<script setup>
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>