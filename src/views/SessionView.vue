<template>
  <div class="sessionView">
    <h1>Sessions</h1>
    <div class="decoration"></div>
      <Sessions sessionType="Panel"/>
      <Sessions sessionType="Breakout"/>
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
  // margin-left: 6%;
  // margin-bottom: 16px;
  color: #fff;
}
.decoration {
  background-color: @secondary;
  height: 5px;
  width: 75px;
  // margin-left: 6%;
}
.sessionView{
  padding: 80px 80px 30px;
}
@media (max-width: 768px) {
  .sessionView{
    padding: 80px 4% 4%;
  }
}

</style>
