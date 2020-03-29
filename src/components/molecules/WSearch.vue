<template lang="pug">
  div(class="wsearch")
    WDatalist(
      expanse
      roundLeft
      placeholder="Add a movie"
      :data="movieList"
      @filter="toSearch"
      )
    WButton(
      label="Add"
      roundRight
      )
</template>

<script>
import WButton from "../atoms/WButton";
import WDatalist from "../atoms/WDatalist";
export default {
  components: {
    WButton,
    WDatalist
  },

  props: {
    movieList: Array
  },
  methods: {
    toSearch(term) {
      this.$emit("search", term);
    }
  }
};
</script>

<style lang="sass" scoped>
.wsearch
  display: flex
  flex-direction: row
</style>
