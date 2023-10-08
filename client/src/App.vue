<template>
  <div id="appContainer">
    <div style="background: green; border-style: dashed; border-color: yellow;">
      <router-link :to="{name: 'LoginPage'}">Login</router-link>
      <router-link :to="{name: 'SignupPage'}">Signup</router-link>
    </div>

    <router-view/>
  </div>
</template>

<style>
#appContainer {
  font-family: 'Graduate','Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
}
</style>
