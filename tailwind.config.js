/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './app.vue',
    './content/**/*.{md}'
  ],
  theme: {
    extend: {
      colors: {
        background: '#303030',
        text: 'ffffff',
      },
    },
  },
  plugins: [],
}
