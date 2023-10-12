<template>

  <form @submit.prevent="">
    <div class="loginSignupInputForm">
      <div id="goBackMinimizeContainer">
        <font-awesome-icon :class="selected !== 'signup' ? 'hide' : null" icon="fa-solid fa-chevron-right" size="lg" rotation="180"/>
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
  props: ['selected']
}
</script>

<style>

.loginSignupInputForm {
  background: rgb(255, 255, 245);
  padding: 1em 2em 1em 2em;
  display: flex;
  flex-direction: column;
  border-radius: 5%;
  align-items: center;
  padding: 2em 2em 2em 2em;
}

#goBackMinimizeContainer {
  position: absolute;
  top: 2%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 95%;
}

#minmizeSignupLogin {
  text-decoration: none;
  color: rgba(255, 0, 0, 0.644);
}

.hide {
  visibility: hidden;
}

</style>
