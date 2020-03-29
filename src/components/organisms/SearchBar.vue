<template lang="pug">
  div(class="search-bar")
    WSearch( :movieList="getMoviesList" @search="searchMovies")
</template>

<script>
import WSearch from "../molecules/WSearch";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "search-bar",
  components: {
    WSearch
  },
  computed: {
    ...mapGetters("movies", ["getMoviesList"])
  },
  methods: {
    ...mapActions("movies", ["searchMovies"])
  }
};
</script>

<style lang="sass" scoped>
.search-bar
  box-sizing: border-box
  padding: 10px 15px
  background-color: lightblue
  box-shadow: 0px 0px 5px grey
  display: flex
  flex-flow: row
  justify-content: center
  vertical-align: middle
</style>
