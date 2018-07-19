<template>
  <el-row class="container">
  <div class="image">
    <img src="../assets/background-1.jpg">
   </div>
   <div class="overlay">
    <h1 class="main-header">HealthSTLx Summit</h1>
    <h2 class="sub-header">Working to understand the challenges facing St. Louis healthcare.</h2>
    <h3 class="date">October 24th, 2018 at the Eric P. Newman Education Center</h3>
    <div class="action">
      <el-button class="btn" type="primary" plain round v-on:click="register">Register</el-button>
      <Login class="login" login_type='button'/>
    </div>
  </div>

</el-row>
</template>

<script>
import Login from "./Login.vue";
export default {
  name: "HomeOverlay",
  methods: {
    register: function(){
      console.log("registered!");
      this.$router.push("/registration");
    }
  },
  components: {
    Login
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.main-header {
  font-family: Arial;
  font-weight: lighter;
  letter-spacing: 4px;
  font-size: 70px;
}
.sub-header {
  font-family: Arial;
  font-weight: lighter;
  letter-spacing: 3px;
  font-size: 30px;
}
.date {
  font-family: Arial;
  font-weight: lighter;
  letter-spacing: 3px;
  font-size: 18px;
}
img{
  width: 100vw;
  height: 100vh;
  margin: 0;
}

.btn {
  // background: #3336ff;
  // color: white;
  // border: black;
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
  margin-left: auto;
  margin-right: auto;
  padding-left: 24%;
  top: 20%;
  text-align: center;
  transition: .5s ease;
  color: white
}
h1, h2{
  text-align: center;
  padding: 0;
}
.login {
  display: inline;
  padding: 20px;
}
.action {
  padding-top: 100px;
}
</style>
