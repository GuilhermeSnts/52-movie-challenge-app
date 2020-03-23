<template lang="pug">
  div (class=".home")
    Home
</template>

<script>
// @ is an alias to /src
import Home from "../templates/Home.vue";
export default {
  name: "HomePage",
  components: {
    Home
  }
};
</script>
