<template>
  <div class="profile">
    <div id="nav"></div>
    <NavBar></NavBar>
      <h1>Welcome!</h1>
      <Registration type="profile"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Registration from "@/components/Registration.vue";
import NavBar from "@/components/NavBar.vue";
import Login from "@/components/Login.vue";
import SelectBreakout from "@/components/SelectBreakout.vue";

export default {
  name: "Profile",
  components: {
    Registration,
    NavBar,
    Login,
    SelectBreakout
  },
  data() {
    return {
      login: false
    }
  }
};
</script>

<style scoped lang="less">
#nav {
  padding: 40px;
}
h1, h2{
  text-align: left;
  padding-left: 5%;
}
.title{
  font-family: Arial;
  font-size: 75px;
  vertical-align: middle;
  margin-top: 30%;
  color:#818283;
}
.registration-form{
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}
p a {
  color: #42b983;
}
p a:hover{
  text-decoration: underline;
}
.login-link{
  padding: 20px;
}
.login {
  text-align: center;
}
</style>
