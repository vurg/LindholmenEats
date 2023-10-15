<template>
  <div id="appContainer">
    <Navbar :isLoggedIn="isLoggedIn"/>
    <MainContentBox />
    <FooterBox />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import MainContentBox from './components/MainContentBox.vue'
import FooterBox from './components/FooterBox.vue'
import { eventBus } from '@/main'

export default {
  data() {
    return {
      isLoggedIn: false
    }
  },
  components: {
    Navbar,
    MainContentBox,
    FooterBox
  },
  created() {
    // Listen for the event and update the data
    eventBus.$on('custom-event', () => {
      console.log('custom event on $on hit')
      this.isLoggedIn = true
    })
  }
}
</script>

<style>
#appContainer {
  font-family: 'Graduate', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
}
</style>
