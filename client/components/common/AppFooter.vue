<template>
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h3>About Us</h3>
            <p>Your company description here</p>
          </div>
          <div class="footer-section">
            <h3>Quick Links</h3>
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/about">About</NuxtLink>
            <NuxtLink to="/contact">Contact</NuxtLink>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; {{ new Date().getFullYear() }} Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </template>
  
  <style scoped>
  .footer {
    background-color: var(--secondary-color);
    color: white;
    padding: 2rem 0;
    margin-top: auto;
  }
  
  .footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }
  
  .footer-bottom {
    margin-top: 2rem;
    text-align: center;
    padding-top: 1rem;
    border-top: 1px solid rgba(255,255,255,0.1);
  }
  </style>