// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    supabase: {
      url: process.env.SUPABASE_URL,
      key: process.env.SUPABASE_KEY,
    },
  },
  modules: ["@nuxtjs/supabase", "@nuxtjs/tailwindcss"],
});
