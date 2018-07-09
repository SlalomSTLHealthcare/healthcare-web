<template>
  <div>
    <h1>General Event Overview</h1>
      <Sessions sessionType="Breakout"/>
      <Sessions sessionType="Panel"/>
      <Sessions sessionType="Speaker"/>
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
  text-align: center;
  font-weight: bold;
}

</style>
