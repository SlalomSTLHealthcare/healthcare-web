<template>
  <div class="home">
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


export default {
  name: "home",
  components: {
    HomeOverlay,
    HomeSponsor
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
  background-color: #444444;
  color: white;
  line-height: 60px;
  z-index: 10;
  width: 100%;
  bottom: 0;
  text-align: left;
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
