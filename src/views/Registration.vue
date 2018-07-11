<template>
  <div class="registration">
    <NavBar activeIndex="2"></NavBar>
      <h1>Welcome to HealthSTLx</h1>
      <h2>Fill out this form to register</h2>
      <Registration class="registration-form"/>
      <Login login_type='registration'/>
  </div>
</template>

<script>
// @ is an alias to /src
import Registration from "@/components/Registration.vue";
import NavBar from "@/components/NavBar.vue";
import Login from "@/components/Login.vue";

export default {
  name: "registration",
  components: {
    Registration,
    NavBar,
    Login
  },
  data() {
    return {
      login: false
    }
  }
};
</script>

<style>
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
.logo{
  width: 200px;
  float: left;
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
</style>
