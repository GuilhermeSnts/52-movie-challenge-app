<template lang="pug">
  div(class="user-movies")
    SearchBar
</template>

<script>
import SearchBar from "../templates/UserMovies";
export default {
  name: "UserMoviesPage",
  components: {
    SearchBar
  }
};
</script>
