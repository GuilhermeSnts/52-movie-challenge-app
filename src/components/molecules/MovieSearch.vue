<template lang="pug">
  div(class="movie-search")
    MDatalist(
      expanse
      roundLeft
      placeholder="Add a movie"
      :data="movieList"
      )
    MButton(
      label="Add"
      roundRight
      )
</template>

<script>
import MButton from "../atoms/MButton";
import MDatalist from "../atoms/MDatalist";
export default {
  components: {
    MButton,
    MDatalist
  },
  props: {
    movieList: Array
  }
};
</script>

<style lang="sass" scoped>
.movie-search
  display: flex
  flex-direction: row
</style>
