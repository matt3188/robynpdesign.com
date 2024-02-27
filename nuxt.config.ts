// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    baseURL: '/robynpdesign.com/',
    buildAssetsDir: 'assets',
  },
  googleFonts: {
    families: {
      'Open Sans': [300, 500]
    }
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts"]
})