<script setup>
const route = useRoute()
const { data: post } = await useAsyncData(`content-${route.params.slug}`, () => {
  return queryCollection('content').path(`/${route.params.slug}`).first()
})
</script>

<template>
  <div class="min-h-screen bg-gray-30 font-custom flex justify-center">
    <article class="prose dark:prose-invert prose-a-text-blue-500 min-w-3xl mt-7">
      <div class="px-3 py-3 bg-gray-42 shadow-xl rounded-2xl">
        <h2 class="mt-3">{{ post.title }}</h2>
        <p>{{ post.description }}</p>
      </div>
      <div class="min-h-screen bg-gray-42 shadow-xl rounded-2xl px-5 py-1 mt-5">
        <ContentRenderer :value="post" />
      </div>
    </article>
  </div>
</template>
