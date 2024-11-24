// composables/useApi.ts
import type { FetchOptions } from "ofetch";
import type { ApiResponse } from "~/types/auth";

type HttpMethod =
  | "GET"
  | "POST"
  | "PUT"
  | "DELETE"
  | "PATCH"
  | "HEAD"
  | "OPTIONS"
  | "CONNECT"
  | "TRACE"
  | "get"
  | "post"
  | "put"
  | "delete"
  | "patch"
  | "head"
  | "options"
  | "connect"
  | "trace";

interface CustomFetchOptions extends Omit<FetchOptions, "method"> {
  method?: HttpMethod;
}

export const useApi = () => {
  const config = useRuntimeConfig();

  async function fetchApi<T>(
    endpoint: string,
    options: CustomFetchOptions = {}
  ): Promise<ApiResponse<T>> {
    const apiEndpoint = `/api/v1${endpoint}`;

    try {
      const response = await $fetch<ApiResponse<T>>(apiEndpoint, {
        method: options.method as HttpMethod,
        headers: {
          "Content-Type": "application/json",
          ...(options.headers || {}),
        },
        body: options.body,
        params: options.params,
        query: options.query,
      });

      return response;
    } catch (error: any) {
      return {
        data: null,
        message: error.message || "An error occurred",
        status: error.status?.toString() || "500",
        error: error.message,
      };
    }
  }

  return {
    fetchApi,
  };
};
