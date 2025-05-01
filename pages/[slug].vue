<script setup>
import { CalendarIcon } from '@heroicons/vue/24/outline'

const slug = useRoute().params.slug
const { data: post } = await useAsyncData(`content-${slug}`, () => {
  return queryCollection('content').path(`/${slug}`).first()
})
</script>

<template>
  <div class="min-h-screen bg-gray-30 font-custom flex justify-center">
    <article class="px-3 py-3 prose prose-invert prose-a-text-blue-500 w-full max-w-3xl mt-7 [&_hr]:border-gray-50">
      <div class="px-3 py-3 bg-gray-42 shadow-xl rounded-2xl">
        <h2 class="mt-3">{{ post.title }}</h2>
        <p class="ml-2">{{ post.description }}</p>
        <div class="flex items-center justify-left ml-2">
          <CalendarIcon class="h-5 w-5 text-gray-50 inline-block" /> 
          <p class="not-prose ml-2">{{ post.date}} </p>
        </div>
      </div>
      <div class="min-h-screen bg-gray-42 shadow-xl rounded-2xl px-5 py-1 mt-5">
        <ContentRenderer :value="post" />
      </div>
    </article>
  </div>
</template>
