<template>
  <div class="home">
    <HomePage/>
  </div>
</template>

<script>
import HomePage from "@/components/HomePage.vue";
export default {
  name: "home",
  components: {
    HomePage
  }
};
</script>

<style scoped lang="less">
div {
  margin: 0px;
}
.above-fold {
  margin-top: -70px;
}
</style>
