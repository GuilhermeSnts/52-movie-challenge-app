<template lang="pug">
  div(class="movie-list")
    WList
      WListItem(v-for="(item, index) in getWatchedMovies" :key="index")
        p {{item}}
</template>

<script>
import WList from "../molecules/WList";
import WListItem from "../molecules/WListItem";
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("movies", ["getWatchedMovies"])
  },
  methods: {},
  components: {
    WList,
    WListItem
  }
};
</script>

<style lang="sass" scoped>
.movie-list
  width: 100%
  height: 100%
  border: 1px solid grey
  box-sizing: border-box
</style>
