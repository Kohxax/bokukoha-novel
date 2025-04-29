<template>
    <header class="bg-gray-42 shadow-xl h-12">
        <div class="flex flex-row items-center h-full">
            <NuxtLink to="/">
                <BookOpenIcon class="h-6 w-6 text-white-0.9 ml-7 hover:opacity-70" />
            </NuxtLink>
            <NuxtLink to="/about" class="text-white-0.9 hover:opacity-70 ml-7">About</NuxtLink>
            <NuxtLink to="/tag" class="text-white-0.9 hover:opacity-70 ml-7">Tag</NuxtLink>
        </div>
    </header>
</template>

<script setup lang="ts">
import { NuxtLink } from '#components';
import { BookOpenIcon } from '@heroicons/vue/24/outline';
</script>