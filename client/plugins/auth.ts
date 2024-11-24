// plugins/auth.ts
export default defineNuxtPlugin(async (nuxtApp) => {
  const auth = useAuthStore();
  auth.initializeAuth();
});
