<template>
    <nav class="navbar">
      <div class="logo-container">
        <span class="logo-text">Lindholmen Eats</span>
      </div>
      <div class="logo-text-container">
        <p class="additional-text">ALL RIGHTS RESERVED 2023©</p>
      </div>
      <ul class="utility-icons">
        <li><a href="#" class="social-link"><i class="fab fa-facebook"></i></a></li>
        <li><a href="#" class="social-link"><i class="fab fa-twitter"></i></a></li>
        <li><a href="#" class="social-link"><i class="fab fa-instagram"></i></a></li>
        <li><a href="#" class="social-link"><i class="fab fa-youtube"></i></a></li>
        <li><a href="#" class="app-function"><i class="fas fa-shopping-cart"></i></a></li>
        <li><a href="#" class="app-function"><i class="fas fa-user"></i></a></li>
      </ul>
    </nav>
</template>

<script>
// Import the global stylesheet and font-awesome CSS
import '@/src/assets/css/style.css'
import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css'

export default {
  name: 'Navbar'
}
</script>

<style scoped>
/* Scoped styles for the Navbar component */
/* Add any specific styles for the Navbar component here */
.navbar {
  /* Add navbar styles */
}

.logo-container {
  /* Add logo container styles */
}

/* Add more styles as needed */
</style>
