// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: { strict: true },
  modules: ['@nuxtjs/tailwindcss'],
  devtools: { enabled: true },
  css: ['~/assets/css/global.css'],
});
