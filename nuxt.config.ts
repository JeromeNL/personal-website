// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
  '@nuxtjs/i18n'
],
    i18n: {
    locales: ['en', 'de', 'nl'],  // used in URL path prefix
     defaultLocale: 'en',    // default locale of your project for Nuxt pages and routings
}
})
