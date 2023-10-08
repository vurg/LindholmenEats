<template>

  <form @submit.prevent="">
    <div class="loginSignupInputForm">
      <div id="goBackMinimizeContainer">
        <font-awesome-icon icon="fa-solid fa-chevron-right" size="lg" rotation="180"/>
        <font-awesome-icon icon="fa-solid fa-minus" size="xl"/>
      </div>
      <slot></slot>
    </div>
  </form>
</template>

<script>

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
  width: 92%;
}

</style>
