<template>
  <div>
    <h1>General Event Overview</h1>
      <Sessions sessionType="Breakout"/>
      <Sessions sessionType="Panel"/>
  </div>
</template>


<script>
// @ is an alias to /src
import Sessions from "@/components/Sessions.vue";

export default {
  name: "about",
  components: {
    Sessions
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
