<template>
  <div class="container">
    <h1>Welcome to Your Nuxt App</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script setup lang="ts">
const message = ref('Start building your app!')

// Example of using composables
const { data: someData } = await useFetch('/')
</script>

<style scoped>
h1 {
  color: var(--primary-color);
}
</style>