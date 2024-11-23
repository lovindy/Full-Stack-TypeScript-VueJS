<template>
    <header class="header">
      <nav class="container">
        <div class="logo">
          <NuxtLink to="/">Your Logo</NuxtLink>
        </div>
        <div class="nav-links">
          <NuxtLink to="/" class="nav-link">Home</NuxtLink>
          <NuxtLink to="/about" class="nav-link">About</NuxtLink>
          <NuxtLink to="/contact" class="nav-link">Contact</NuxtLink>
        </div>
      </nav>
    </header>
  </template>
  
  <script setup lang="ts">
  // Add any header logic here
  </script>
  
  <style scoped>
  .header {
    background-color: white;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    padding: 1rem 0;
  }
  
  .header nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .nav-links {
    display: flex;
    gap: 2rem;
  }
  
  .nav-link {
    text-decoration: none;
    color: var(--secondary-color);
  }
  
  .nav-link:hover {
    color: var(--primary-color);
  }
  </style>