
<template>
  <div class="people">
    <div id="nav"></div>
    <NavBar></NavBar>
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

<style>
#nav {
  padding: 40px;
}
</style>
