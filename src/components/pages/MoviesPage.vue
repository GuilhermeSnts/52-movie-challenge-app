<template lang="pug">
  div(class="user-movies")
    MoviesTemplate
</template>

<script>
import MoviesTemplate from "../templates/MoviesTemplate";
import { mapActions } from "vuex";
export default {
  name: "UserMoviesPage",
  components: {
    MoviesTemplate
  },
  methods: {
    ...mapActions("movies", ["createTMDBSession"])
  },

  mounted() {
    this.createTMDBSession();
  }
};
</script>
