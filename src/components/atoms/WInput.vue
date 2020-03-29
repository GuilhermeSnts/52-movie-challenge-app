<template lang="pug">
    input(
        type="text"
        :class="[expanse ? 'expanse' : '', roundLeft ? 'round-left' : '', roundRight ? 'round-right' : '']"
        )
</template>

<script>
export default {
  props: {
    label: String,
    expanse: Boolean,
    roundRight: Boolean,
    roundLeft: Boolean
  }
};
</script>

<style lang="sass" scoped>
input
    border: 1px solid grey
    font-size: 1em
    box-sizing: border-box
    padding: 0.5em 1em
input:focus
  border: 1px solid #414141

.round-left
  border-radius: 5px 0px 0px 5px
.round-right
  border-radius: 0px 5px 5px 0px
.expanse
    width: 100%
</style>
