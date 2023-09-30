<template>
  <div id="app">
    <Navbar />
    <div id="nav" class="main-content">
      <router-link to="/MenuPage.vue">Menu Page</router-link>
    </div>
    <!-- Render the content of the current page view -->
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  components: {
    Navbar
  }
}
</script>

<style>
#app {
  font-family: 'Graduate', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.main-content {
  box-shadow: 10px 10px 10px rgba(12, 167, 137, 1);
  border: 2px solid black;
  margin: 0px auto;
  padding: 20px;
  max-width: 1800px;
  height: 400px;
}
/* Media query for smaller screens */
@media (max-width: 1700px) {
  .main-content {
    margin: 20px 20px 20px 20px;
  }
}
</style>
