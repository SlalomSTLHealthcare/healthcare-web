<template>
  <div class="registration">
      <h1>Registration</h1>
      <div class="decoration"></div>
      <Registration class="registration-form"/>
      <Login class="login" loginType='registration'/>
  </div>
</template>

<script>
// @ is an alias to /src
import Registration from "@/components/Registration.vue";
import NavBar from "@/components/NavBar.vue";
import Login from "@/components/Login.vue";
import SelectBreakout from "@/components/SelectBreakout.vue";
import Profile from "@/components/Profile.vue";

export default {
  name: "registration",
  components: {
    Registration,
    NavBar,
    Login,
    SelectBreakout,
    Profile
  },
  data() {
    return {
      login: false
    }
  }
};
</script>

<style scoped lang="less">
.registration{
  background-color: #f7f7f7;
  padding: 30px 50px;
}
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
.title{
  font-family: Arial;
  font-size: 75px;
  vertical-align: middle;
  margin-top: 30%;
  color:#818283;
}
.registration-form{
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
