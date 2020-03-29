<template lang="pug">
  div(class="user-movies")
    SearchBar
</template>

<script>
import SearchBar from "../templates/UserMovies";
import { mapActions } from "vuex";
export default {
  name: "UserMoviesPage",
  components: {
    SearchBar
  },
  methods: {
    ...mapActions("movies", ["createTMDBSession"])
  },

  mounted() {
    this.createTMDBSession();
  }
};
</script>
