<template>
    <button
      v-if="showButton"
      @click="scrollToTop"
      class="fixed bottom-6 right-6 bg-gray-42 text-gray-50 p-3 rounded-full shadow-lg hover:brightness-200 transition"
    >
      <ArrowUpIcon class="h-5 w-5" />
    </button>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  import { ArrowUpIcon } from '@heroicons/vue/24/solid'
  
  const showButton = ref(false)
  
  const handleScroll = () => {
    const scrollPosition = window.scrollY
    const halfHeight = document.documentElement.scrollHeight / 2
    showButton.value = scrollPosition > halfHeight
  }
  
  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  </script>