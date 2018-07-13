<template>
  <div>
    <NavBar></NavBar>
    <h1>General Event Overview</h1>
      <Sessions sessionType="Breakout"/>
      <Sessions sessionType="Panel"/>
  </div>
</template>


<script>
// @ is an alias to /src
import Sessions from "@/components/Sessions.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  name: "sessionView",
  components: {
    Sessions,
    NavBar
  }
};
</script>


<style scoped lang="less">
h1 {
  text-align: left;
  padding-left: 1%;
  font-weight: bold;
}

</style>
