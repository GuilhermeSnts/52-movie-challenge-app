<template lang="pug">
  div(class="search-bar")
    MovieSearch
</template>

<script>
import MovieSearch from "../molecules/MovieSearch";
export default {
  components: {
    MovieSearch
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
