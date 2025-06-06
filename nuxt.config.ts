// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxt/image'],
  css:['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  content: {
    renderer: {
      anchorLinks: false,
    },  
  },
  ssr: true,
  nitro: {
    preset: 'cloudflare-pages'
  },
  app: {
    head: {
      title: 'こはノート',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ]
    }
  }   
})