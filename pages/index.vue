<template>
  <div class="min-h-screen bg-gray-30 text-white-0.9 flex justify-center font-custom px-5 py-10">
    <div class="max-w-2xl w-full prose-invert flex flex-col gap-3">
      <div class="font-bold text-xl text-center">
        一覧
      </div>
      <ul>
        <li v-for="post in posts" :key="post.path" class="mb-4">
          <div class="px-3 py-3 bg-gray-42 shadow-lg rounded-2xl h-40 ">
            <NuxtLink :to="post.path" class="text-2xl font-bold">{{ post.title }}</NuxtLink>
            <p class="pt-2 font-thin line-clamp-4">{{ post.description }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const { data: posts } = await useAsyncData('posts', () => queryCollection("content").all())
</script>