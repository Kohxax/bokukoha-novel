<template>
    <header class="bg-gray-42 shadow-xl h-12">
        <div class="flex flex-row justify-left ml-7 gap-6 items-center h-full">
            <NuxtLink to="/">
                <BookOpenIcon class="h-6 w-6 text-white-0.9 hover:opacity-70" />
            </NuxtLink>
            <NuxtLink to="/about" class="text-white-0.9 hover:opacity-70">About</NuxtLink>
        </div>
    </header>
</template>

<script setup lang="ts">
import { NuxtLink } from '#components';
import { BookOpenIcon } from '@heroicons/vue/24/outline';
</script>