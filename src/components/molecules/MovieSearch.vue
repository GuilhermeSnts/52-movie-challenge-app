<template lang="pug">
  div(class="movie-search")
    MInput(
      expanse
      roundLeft
      placeholder="Add a movie"
      )
    MButton(
      label="Add"
      roundRight
      )
</template>

<script>
import MButton from "../atoms/MButton";
import MInput from "../atoms/MInput";
export default {
  components: {
    MButton,
    MInput
  }
};
</script>

<style lang="sass" scoped>
.movie-search
  display: flex
  flex-direction: row
</style>
