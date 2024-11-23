export const useMainStore = defineStore("main", {
  state: () => ({
    counter: 0,
    user: null as any,
    isAuthenticated: false,
  }),

  getters: {
    doubleCounter: (state) => state.counter * 2,
  },

  actions: {
    increment() {
      this.counter++;
    },

    async fetchUser() {
      // Example API call
      const { data } = await useFetch("/api/v1/user");
      this.user = data.value;
    },
  },
});
