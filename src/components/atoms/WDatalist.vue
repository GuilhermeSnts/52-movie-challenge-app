<template lang="pug">
  div
    input(type="text" @input="$emit('input', $event.target.value)" list="list" :placeholder="placeholder" :class="[expanse ? 'expanse' : '', roundLeft ? 'round-left' : '', roundRight ? 'round-right' : '']")
    datalist#list
      option(v-for="(option, index) in data" :key="index" :data-value="option.id") {{option.title}}
</template>

<script>
export default {

  props: {
    value: String,
    placeholder: String,
    data: Array,
    label: String,
    expanse: Boolean,
    roundRight: Boolean,
    roundLeft: Boolean
  },
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
