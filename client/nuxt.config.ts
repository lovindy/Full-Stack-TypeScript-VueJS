export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  plugins: ["~/plugins/auth.ts"],
  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss"],

  app: {
    head: {
      title: "SeangDev App",
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
      apiBase:
        process.env.NUXT_PUBLIC_API_BASE || "http://localhost:8080/api/v1",
    },
  },

  nitro: {
    devProxy: {
      "/api/v1": {
        target: "http://localhost:8080/api/v1",
        changeOrigin: true,
        prependPath: true,
      },
    },
  },

  compatibilityDate: "2024-11-24",
});
