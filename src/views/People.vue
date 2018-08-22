<template>
    <People msg="People"/>
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
  padding: 80px 80px 30px;
}
</style>
