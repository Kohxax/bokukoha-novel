<template>
  <div class="min-h-screen bg-gray-30 text-white-0.9 flex justify-center font-custom px-5 py-10">
    <div class="max-w-2xl w-full prose-invert flex flex-col gap-3">
      <div class="font-bold text-xl text-center">
        一覧
      </div>
      <ul>
        <li v-for="post in posts" :key="post.path" class="mb-4">
          <div class="px-3 py-3 bg-gray-42 shadow-lg rounded-2xl min-h-41 flex flex-col justify-between">
            <NuxtLink :to="post.path" class="text-2xl font-bold hover:opacity-80">{{ post.title }}</NuxtLink>
            <p class="pt-2 px-2 font-thin line-clamp-3">{{ post.description }}</p>
            <div class="flex items-center justify-left mt-2 ml-2">
              <CalendarIcon class="h-5 w-5 text-gray-50 inline-block" />
              <p class="not-prose ml-2 font-light">{{ post.date }} </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { CalendarIcon } from '@heroicons/vue/24/outline'

const { data: posts } = await useAsyncData('posts', () => queryCollection("content").all())
</script>