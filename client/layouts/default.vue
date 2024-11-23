<template>
    <div class="app-wrapper">
      <AppHeader />
      <main class="main-content">
        <slot />
      </main>
      <AppFooter />
    </div>
  </template>
  
  <script setup lang="ts">
  // Layout logic here
  </script>
  
  <style scoped>
  .app-wrapper {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  
  .main-content {
    flex: 1;
    padding: 2rem 0;
  }
  </style>