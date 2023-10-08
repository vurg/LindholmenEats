<template>
    <font-awesome-icon :class="['nextButton', nextButtonContinue ? 'nextButtonContinue' : null, margin ? margin : null]"  @mouseover="dragOverEmit" @click="clickEmit" icon="fa-solid fa-right-long" size="xl" style="font-size: 4em;" />
</template>

<script>
export default {
  props: ['nextButtonContinue', 'margin'],
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

.nextButton {
  border-style: solid;
  border-color: black;
  padding: 0.2em;
  border-radius: 10%;
}

.nextButton:hover {
  transition-duration: 200ms;
  border-style: solid;
  border-color: rgb(255, 97, 97);
  padding: 0.2em;
  border-radius: 10%;
}

.nextButtonContinue {
  transition-duration: 1000ms;
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
