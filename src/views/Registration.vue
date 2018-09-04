<template>
  <div class="registration">
      <h1>Registration</h1>
      <div class="decoration"></div>
      <h3>HealthSTLX is about our community and creating a space for healthcare professionals to communicate, connect and create actionable solutions for key challenges in St. Louis. We look forward to connecting with you in November at this inaugural summit. Make sure to register below and consider an in-kind donation to United Way in lieu of a registration fee.</h3>
      <h3>Your registration constitutes permission to use photos, audio, and video recording taken of you at the conference for promotional and educational purposes in connection with HealthSTLX by Slalom LLC.</h3>
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
@import '../global-variables';

.registration{
  // background-color: #f7f7f7;
  padding: 80px 80px 30px;
}
h1 {
  font-size: 40px;
  font-weight: lighter;
  color: #fff;
}
h3 {
  font-size: 16px;
  font-weight: lighter;
  color: #fff;
}
.decoration {
  background-color: @secondary;
  height: 5px;
  width: 75px;
  // margin-left: 6%;
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
@media (max-width: 768px) {
  .registration{
    padding: 80px 4% 4%;
  }
}
</style>
