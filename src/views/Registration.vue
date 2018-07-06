<template>
  <div class="registration">
    <el-container>
      <el-header class="header">
        <img class="logo" src="../assets/slalom-logo-blue-RGB.jpg"/>
      </el-header>
      <el-main class="main">
        <el-row>
          <el-col :span="12"><div class="grid-content bg-purple"><h1 class="title">Welcome to HealthSTLX</h1></div></el-col>
          <el-col :span="12"><div class="grid-content bg-purple-light"><Registration class="registration-form"/></div></el-col>
        </el-row>
      </el-main>
  </el-container>
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

<style>
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
 float: right;
 margin-right: 5%;
 margin-top: 5%;
}
</style>
