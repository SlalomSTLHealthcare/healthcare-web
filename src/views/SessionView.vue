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
h1 {
  font-size: 40px;
  font-weight: lighter;
  margin-left: 5.3%;
  margin-bottom: 16px;
}
.decoration {
  background-color: #005aed;;
  height: 5px;
  width: 75px;
  margin-left: 5.3%;
}
.sessionView{
  padding: 30px 50px;
  background-color: #f7f7f7;
}
@media (max-width: 800px) {
  .sessionView{
  padding: 30px 0px;
}
}

</style>
