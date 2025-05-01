<template>
  <NuxtLayout>
    <AppHeader />
    <NuxtPage />
    <BackToTop />
    <AppFooter />
  </NuxtLayout>
</template>

<script setup>
import BackToTop from './components/BackToTop.vue';

useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap'
    }
  ]
})
</script>