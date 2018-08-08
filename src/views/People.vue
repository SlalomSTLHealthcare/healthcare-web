
<template>
  <div class="people">
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
.people {
  padding: 30px 50px;
  background-color: #f7f7f7;
}
</style>
