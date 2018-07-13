<template>
  <div class="home">
    <NavBar></NavBar>
    <HomeOverlay/>
    <HomeSponsor/>
    <el-footer>
    <el-button class="btn" v-on:click="about">About</el-button>
    </el-footer>
  </div>
</template>

<script>

import HomeOverlay from "@/components/HomeOverlay.vue";
import HomeSponsor from "@/components/HomeSponsor.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  name: "home",
  components: {
    HomeOverlay,
    HomeSponsor,
    NavBar
  },
  methods: {
    about: function(){
      this.$router.push("/about");
    }
  }
};
</script>

<style scoped lang="less">
div{
  margin: 0px;
}

.el-footer {
  padding-left: 12px;
  padding-bottom: 0px;
  margin: 0;
  display:flex;
  align-items: center;
  background-color: #fff;
  bottom: 0;
  z-index: 10;
  width: 100%;
  box-shadow: 0px 1px 4px grey;
  justify-content: space-between;

  }
.btn {

  background: #3336ff;
  color: white;
  border: black;
  width: 12em;
  height: 4em;
        // opacity: 0.7;
 }
</style>
