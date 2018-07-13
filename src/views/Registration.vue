<template>
  <div class="registration">
      <h1>Welcome to HealthSTLx</h1>
      <h2>Fill out this form to register</h2>
      <Registration class="registration-form"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Registration from "@/components/Registration.vue";

export default {
  name: "registration",
  components: {
    Registration
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
.logo{
  width: 200px;
  float: left;
}
.registration-form{
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}
</style>
