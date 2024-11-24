// stores/useAuth.ts
import { defineStore } from "pinia";
import type { User, AuthResponse, ApiResponse } from "~/types/auth";

export const useAuthStore = defineStore("auth", () => {
  const user = ref<User | null>(null);
  const token = ref<string | null>(null);
  const isAuthenticated = computed(() => !!token.value);

  const setAuth = (authData: AuthResponse) => {
    user.value = authData.user;
    token.value = authData.token;
    // Check if we're on client side
    if (process.client) {
      localStorage.setItem("token", authData.token);
    }
  };

  const clearAuth = () => {
    user.value = null;
    token.value = null;
    // Check if we're on client side
    if (process.client) {
      localStorage.removeItem("token");
    }
  };

  // Initialize auth state from localStorage
  const initializeAuth = () => {
    // Check if we're on client side
    if (process.client) {
      const storedToken = localStorage.getItem("token");
      if (storedToken) {
        token.value = storedToken;
        fetchUser();
      }
    }
  };

  const register = async (email: string, password: string, name: string) => {
    try {
      const response = await $fetch<ApiResponse<AuthResponse>>(
        "/api/auth/register",
        {
          method: "POST",
          body: { email, password, name },
        }
      );

      if (response.data) {
        setAuth(response.data);
        return { success: true };
      }
      return {
        success: false,
        error: response.message || "Registration failed",
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.data?.message || error.message || "Registration failed",
      };
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const response = await $fetch<ApiResponse<AuthResponse>>(
        "/api/auth/login",
        {
          method: "POST",
          body: { email, password },
        }
      );

      if (response.data) {
        setAuth(response.data);
        return { success: true };
      }
      return { success: false, error: response.message || "Login failed" };
    } catch (error: any) {
      return {
        success: false,
        error: error.data?.message || error.message || "Login failed",
      };
    }
  };

  const logout = async () => {
    try {
      await $fetch<ApiResponse>("/api/auth/logout", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      });
      clearAuth();
      return { success: true };
    } catch (error: any) {
      return {
        success: false,
        error: error.data?.message || error.message || "Logout failed",
      };
    }
  };

  const changePassword = async (
    currentPassword: string,
    newPassword: string
  ) => {
    try {
      const response = await $fetch<ApiResponse>("/api/auth/change-password", {
        method: "PUT",
        body: { currentPassword, newPassword },
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      });

      return { success: true, message: response.message };
    } catch (error: any) {
      return {
        success: false,
        error: error.data?.message || error.message || "Password change failed",
      };
    }
  };

  const forgotPassword = async (email: string) => {
    try {
      const response = await $fetch<ApiResponse>("/api/auth/forgot-password", {
        method: "POST",
        body: { email },
      });

      return { success: true, message: response.message };
    } catch (error: any) {
      return {
        success: false,
        error:
          error.data?.message ||
          error.message ||
          "Password reset request failed",
      };
    }
  };

  const resetPassword = async (token: string, newPassword: string) => {
    try {
      const response = await $fetch<ApiResponse>("/api/auth/reset-password", {
        method: "PUT",
        body: { token, newPassword },
      });

      return { success: true, message: response.message };
    } catch (error: any) {
      return {
        success: false,
        error: error.data?.message || error.message || "Password reset failed",
      };
    }
  };

  const fetchUser = async () => {
    if (!token.value) return;

    try {
      const response = await $fetch<ApiResponse<User>>("/api/user", {
        headers: {
          Authorization: `Bearer ${token.value}`,
        },
      });

      if (response.data) {
        user.value = response.data;
      } else {
        clearAuth();
      }
    } catch {
      clearAuth();
    }
  };

  return {
    user,
    token,
    isAuthenticated,
    register,
    login,
    logout,
    changePassword,
    forgotPassword,
    resetPassword,
    initializeAuth,
  };
});
