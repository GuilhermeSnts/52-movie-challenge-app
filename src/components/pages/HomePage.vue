<template lang="pug">
  div (class=".home")
    HomeTemplate
</template>

<script>
// @ is an alias to /src
import HomeTemplate from "../templates/HomeTemplate.vue";
export default {
  name: "HomePage",
  components: {
    HomeTemplate
  }
};
</script>
