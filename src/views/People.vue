
<template>
  <div class="people">
    <NavBar activeIndex="2"></NavBar>
    <People msg="People"/>
  </div>
</template>

<script>
// @ is an alias to /src
import People from "@/components/People.vue";
import NavBar from "@/components/NavBar.vue";
export default {
  name: "people",
  components: {
    People,
    NavBar
  }
};
</script>
