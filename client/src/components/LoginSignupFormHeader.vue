<template>
  <div id="signupLoginContainer">
    <router-link :to="{name: 'SignupPage'}"><div ref="signupHeader" class="signupActive">signup</div></router-link>
    <router-link :to="{name: 'LoginPage'}"><div ref="loginHeader" class="loginActive">login</div></router-link>
  </div>
</template>

<script>

export default {
  props: ['selected'],
  methods: {},
  mounted() {
    if (this.$props.selected === 'signup') {
      this.$refs.loginHeader.classList.add('deactive')
    } else {
      this.$refs.signupHeader.classList.add('deactive')
    }
  }
}

</script>

<style>

#signupLoginContainer {
  text-align: center;
}

#signupLoginContainer > * {
  display: block;
  text-decoration: none;
  color: none;
}

.signupActive {
  color: red;
  font-size: 2em;
}

.loginActive {
  color: blue;
  font-size: 2em;
}

.deactive {
  color: grey;
  font-size: 1em;
}

</style>
