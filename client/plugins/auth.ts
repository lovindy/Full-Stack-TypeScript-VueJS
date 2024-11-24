// plugins/auth.ts
export default defineNuxtPlugin(async (nuxtApp) => {
  // Wait for the app to be mounted before initializing auth
  if (process.client) {
    const authStore = useAuthStore();
    nuxtApp.hook("app:mounted", () => {
      authStore.initializeAuth();
    });
  }
});
