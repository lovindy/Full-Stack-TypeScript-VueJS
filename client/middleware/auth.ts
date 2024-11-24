// middleware/auth.ts
export default defineNuxtRouteMiddleware((to) => {
  const auth = useAuthStore();

  // Check if the route requires auth
  if (to.meta.requiresAuth && !auth.isAuthenticated) {
    return navigateTo("/login");
  }
});
