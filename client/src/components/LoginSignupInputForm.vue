<template>

  <form @submit.prevent="">
    <div class="loginSignupInputForm">
      <div id="goBackMinimizeContainer">
        <font-awesome-icon :class="(selected !== 'signup') || (currentScene === 'isSignupResultScene') || (currentScene === 'isInputSignupEmailPassDetailsScene') ? 'hideBack' : 'visableBack'" icon="fa-solid fa-chevron-right" size="lg" rotation="180" @click="changeSceneBackwardEmit"/>
        <router-link id="minmizeSignupLogin" :to="{name: 'home'}">
          <font-awesome-icon icon="fa-solid fa-minus" size="lg"/>
        </router-link>
      </div>
      <slot></slot>
    </div>
  </form>
</template>

<script>
export default {
  props: ['selected', 'currentScene'],
  methods: {
    changeSceneBackwardEmit() {
      this.$emit('changeSceneBackwardEmit')
    }
  }
}
</script>

<style>

.loginSignupInputForm {
  background: rgb(255, 255, 245);
  display: flex;
  flex-direction: column;
  border-radius: 5%;
  align-items: center;
  padding: 2em;
}

#goBackMinimizeContainer {
  position: absolute;
  top: 3%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 91%;
}

#minmizeSignupLogin {
  text-decoration: none;
  color: rgba(255, 0, 0, 0.644);
}

.hideBack {
  visibility: hidden;
}

.visableBack {
  cursor: pointer;
}
</style>
