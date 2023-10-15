<template>
    <font-awesome-icon :class="['nextButton', 'nextButtonError', canContinue ? 'nextButtonContinue' : null, margin ? margin : null]"  @mouseover="dragOverEmit" @click="clickEmit" icon="fa-solid fa-right-long"/>
</template>

<script>
export default {
  props: ['canContinue', 'margin'],
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
  font-size: 3.2em;
  padding: 0.2em 1.6em 0.2em 1.6em;
  background: rgba(60, 210, 255, 0.101);
  border-radius: 10%;
  box-sizing: border-box;
}

.nextButtonError:hover {
  transition-duration: 620ms;
  background: rgba(255, 244, 231, 0.604);
}

.nextButtonContinue:hover {
  transition-duration: 320ms;
  background: rgb(187, 255, 205);
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
