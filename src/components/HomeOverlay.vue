<template>
  <el-row class="container">
  <div class="image">
    <!-- <img src="../assets/background-1.jpg"> -->
      <span class="logo"><img src="../assets/healthstlx-mockbg.jpg"/></span>
   </div>
   <div class="overlay">
    <h1 class="main-header">HealthSTLX Summit</h1>
    <h2 class="sub-header">Working to understand the challenges facing St. Louis healthcare.</h2>
    <h3 class="date">October 24th, 2018 at the Eric P. Newman Education Center</h3>
    <div class="action" v-if="!this.$session.exists()">
      <el-button class="btn" plain round v-on:click="register">Register</el-button>
      <Login class="login" login_type='button'/>
    </div>
    <div class="action" v-else>
      <h2 class="sub-header"> Welcome Back! </h2>
    </div>
  </div>

</el-row>
</template>

<script>
import Login from "./Login.vue";
export default {
  name: "HomeOverlay",
  mounted: function() {
    this.$root.$on("login", () => {
      this.$forceUpdate();
    });
  },
  methods: {
    register: function() {
      console.log("registered!");
      this.$router.push("/registration");
    },
    logout: function() {
      console.log("logoout");
      this.$session.destroy();
      this.$forceUpdate();
    }
  },
  components: {
    Login
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@secondary-dark: #040024;
.main-header {
  font-family: 'Roboto', sans-serif;
  font-size: 5rem;
  margin-bottom: 12px;
  text-shadow: .3rem .5rem .5rem fade(@secondary-dark, 20%);
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
img {
  width: 100vw;
  height: 100vh;
  margin: 0;
}

.btn {
  width: 12em;
  height: 4em;
  color: black;
  height: 40px;
}

.container {
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
  transition: 0.5s ease;
  color: white;
}
h1,
h2 {
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
