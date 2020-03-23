<template lang="pug">
  div(class="search-bar")
    MovieSearch( :movieList="['A','B']")
</template>

<script>
import MovieSearch from "../molecules/MovieSearch";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "search-bar",
  components: {
    MovieSearch
  },
  computed: {
    ...mapGetters("movies", [])
  },
  methods: {
    ...mapActions("movies", [])
  }
};
</script>

<style lang="sass" scoped>
.search-bar
  box-sizing: border-box
  padding: 10px 15px
  background-color: lightblue
  box-shadow: 0px 0px 5px grey
</style>
