<template lang="pug">
  div(class="search-bar")
    SearchBar
</template>

<script>
import SearchBar from "../organisms/SearchBar";
export default {
  name: "MoviesTemplate",
  components: {
    SearchBar
  }
};
</script>
