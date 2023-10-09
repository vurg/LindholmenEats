<template>
    <font-awesome-icon :class="['nextButton', margin ? margin : null]"  @mouseover="dragOverEmit" @click="clickEmit" icon="fa-solid fa-right-long"/>
</template>

<script>
export default {
  props: ['margin'],
  methods: {
    dragOverEmit() {
      this.$emit('dragOverEmit')
    },
    clickEmit() {
      this.$emit('clickEmit')
    }
  }
}
</script>

<style>

.nextButton, .nextButtonError, .nextButtonContinue {
  font-size: 3em;
  border: 0.1em black solid;
  padding: 0.2em;
  border-radius: 20%;
}

.nextButtonError:hover {
  transition-duration: 200ms;
  border-style: solid;
  border-color: rgb(255, 97, 97);
}

.nextButtonContinue:hover {
  transition-duration: 200ms;
  background: rgb(187, 255, 205);
  border-style: solid;
  border-color: rgb(187, 255, 205);
}

.extraExtraSmallAllAroundMargin {
  margin: 0.5em;
}

.extraSmallAllAroundMargin {
  margin: 1em;
}

.smallAllAroundMargin {
  margin: 1.5em;
}

.mediumAllAroundMargin {
  margin: 2em;
}

.largeAllAroundMargin {
  margin: 2.5em;
}

.extraLargeAllAroundMargin {
  margin: 3em;
}

.extraExtraLargeAllAroundMargin {
  margin: 3.5em;
}

</style>
