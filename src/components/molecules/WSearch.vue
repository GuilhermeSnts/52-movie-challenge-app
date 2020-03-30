<template lang="pug">
  div(class="wsearch")
    WDatalist(
      expanse
      roundLeft
      v-model="value"
      placeholder="Add a movie"
      :data="movieList"
      @filter="toSearch"
      )
    WButton(
      label="Add"
      roundRight
      @clicked="action()"
      )
</template>

<script>
import WButton from "../atoms/WButton";
import WDatalist from "../atoms/WDatalist";
export default {
  data: () => ({
    value: ""
  }),
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
    },

    action() {
      this.$emit("action", this.value);
    }
  }
};
</script>

<style lang="sass" scoped>
.wsearch
  display: flex
  flex-direction: row
</style>
