<template>
  <div class="profile">
      <Profile type="profile" class="registration-form"/>
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
  name: "profile",
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
.profile{
  // background-color: #f7f7f7;
  padding: 80px 80px 50px;
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
  .profile{
    padding: 80px 4% 4%;
  }
}
</style>
