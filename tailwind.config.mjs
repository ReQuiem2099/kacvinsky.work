/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'cyber-blue': '#7ecbff',
        'cyber-dark': '#0a2342',
        'cyber-light': '#eaf6ff',
        'cyber-accent': '#1e3a5c'
      }
    },
  },
  plugins: [],
}