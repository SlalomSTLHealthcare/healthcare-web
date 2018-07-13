<template>
  <div class="registration">
<<<<<<< HEAD
      <h1>Welcome to HealthSTLx!</h1>
=======
    <NavBar></NavBar>
      <h1>Welcome to HealthSTLx</h1>
>>>>>>> staging
      <h2>Fill out this form to register</h2>
      <Registration class="registration-form"/>
      <Login class="login" login_type='registration'/>
  </div>
</template>

<script>
// @ is an alias to /src
import Registration from "@/components/Registration.vue";
import NavBar from "@/components/NavBar.vue";
import Login from "@/components/Login.vue";
import SelectBreakout from "@/components/SelectBreakout.vue";

export default {
  name: "registration",
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
