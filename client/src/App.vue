<template>
  <div id="app">
    <nav class="navbar">
      <div class="logo-container">
        <p class="logo-text">{{ logoText }}</p>
      </div>
      <div class="logo-text-container">
        <p class="additional-text">{{ tagText }}</p>
      </div>
      <ul class="utility-icons">
        <li><a :href="socialLinks[0]" class="social-link"><i class="fab fa-facebook"></i></a></li>
        <li><a :href="socialLinks[1]" class="social-link"><i class="fab fa-instagram"></i></a></li>
        <li><a :href="socialLinks[2]" class="social-link"><i class="fab fa-twitter"></i></a></li>
        <li><a :href="socialLinks[3]" class="social-link"><i class="fab fa-youtube"></i></a></li>
        <li><a href="#" class="app-function"><i class="fas fa-shopping-cart"></i></a></li>
        <li><a href="#" class="app-function"><i class="fas fa-user"></i></a></li>
      </ul>
    </nav>
    <div id="nav" class="main-content">
      <router-link to="/MenuPage.vue">Menu Page</router-link>
    </div>
    <!-- Render the content of the current page view -->
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      logoText: 'Lindholmen Eats',
      tagText: 'ALL RIGHTS RESERVED 2023©',
      socialLinks: [
        'https://www.facebook.com',
        'https://www.instagram.com',
        'https://www.twitter.com',
        'https://www.youtube.com'
      ]
    }
  }
}
</script>

<style>
@import 'assets/css/style.css';
#app {
  font-family: 'Graduate', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
