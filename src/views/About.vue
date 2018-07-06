<template>
  <div>
    <h1>General Event Overview</h1>
      <Breakouts/>
      <Panels/>
      <Speakers/>
  </div>
</template>


<script>
// @ is an alias to /src
import Panels from "@/components/Panels.vue";
import Breakouts from "@/components/Breakouts.vue";
import Speakers from "@/components/Speakers.vue";

export default {
  name: "about",
  components: {
    Panels,
    Breakouts,
    Speakers
  }
};
</script>


<style scoped lang="less">
h1 {
  text-align: center;
  font-weight: bold;
}

</style>
