<template>
  <div id="app">
    <div id="nav">
    </div>
    <!-- Render the content of the current page view -->
    <router-link to="/">Home</router-link>
    <router-view/>
    <router-link to="/menu">Menu</router-link>
  </div>
</template>

<style>
#app {
  font-family: 'Graduate','Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
