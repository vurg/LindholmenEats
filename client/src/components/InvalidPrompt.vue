<template>
  <div :class="haveInvalidPromptWrapper ? 'invalidPromptWrapper' : null">
    <div :class="['invalidText', padding ? padding : null]" v-show="showError">
      {{ invalidText }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showError: false
    }
  },
  props: ['invalidText', 'padding', 'haveInvalidPromptWrapper']
}
</script>

<style>

.invalidPromptWrapper {
  text-align: center;
  height: 5vh;
  width: 15vw;
}

.invalidText {
  font-size: 0.9em;
  color: rgb(255, 96, 64);
  animation: fadeIn 1s;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.smallPaddingLeft {
  padding-left: 1.1em
}
</style>
