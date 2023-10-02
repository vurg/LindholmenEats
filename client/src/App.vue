<template>
  <div id="app">
    <Navbar />
    <MainContentBox />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import MainContentBox from './components/MainContentBox.vue'
export default {
  components: {
    Navbar,
    MainContentBox
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
</style>
