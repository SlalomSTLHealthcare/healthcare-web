<template>
  <div class="sessionView">
    <h1>General Event Overview</h1>
    <div class="decoration"></div>
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
@import '../global-variables';
h1 {
  font-size: 40px;
  font-weight: lighter;
  margin-left: 6%;
  margin-bottom: 16px;
  color: #fff;
}
.decoration {
  background-color: @secondary;
  height: 5px;
  width: 75px;
  margin-left: 6%;
}
.sessionView{
  padding: 30px 50px;
}
@media (max-width: 800px) {
  .sessionView{
  padding: 30px 0px;
}
}

</style>
