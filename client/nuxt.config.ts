export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  plugins: ["~/plugins/auth.ts"],
  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss"],

  app: {
    head: {
      title: "Your App Name",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap",
        },
      ],
    },
  },

  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE || "http://localhost:3000",
    },
  },

  compatibilityDate: "2024-11-24",
});
