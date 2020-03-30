<template lang="pug">
  div(class="movies-template")
    div(class="search-bar")
      SearchBar
    div(class="content")
      MovieList
</template>

<script>
import SearchBar from "../organisms/SearchBar";
import MovieList from "../organisms/MovieList";
export default {
  name: "MoviesTemplate",
  components: {
    SearchBar,
    MovieList
  }
};
</script>

<style lang="sass" scoped>
.content .movies-template
  width: 100%
  height: 100%
  display: flex
  flex-direction: column
  vertical-align: middle
  justify-content: center
</style>
