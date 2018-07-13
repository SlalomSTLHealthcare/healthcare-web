<template>
  <el-row class="container">
  <div class="image">
    <img src="../assets/background.jpg">
   </div>
   <div class="overlay">
    <h1>HealthSTLx Summit</h1>
    <h2>October 24th, 2018 at the Eric P. Newman Education Center</h2>
    <el-button class="btn" v-on:click="register">Register</el-button>
    <el-button class="btn">Login</el-button>
  </div>

</el-row>
</template>

<script>
export default {
  name: "HomeOverlay",
  methods: {
    register: function(){
      console.log("registered!");
      this.$router.push("/registration");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

img{
  width: 100vw;
  height: 300px;
  margin: 0;
}

.btn {
  background: #3336ff;
  color: white;
  border: black;
  width: 12em;
  height: 4em;
}

.container{
  padding-bottom: 0px;
  margin-bottom: 0px;
  text-align: center;
}

.overlay {
  //overlay text onto background image
  position: absolute;
  top: 20%;
  left: 32.5%;
  transition: .5s ease;
  color: white;
}
h1, h2{
  text-align: center;
  padding: 0;
}

</style>
