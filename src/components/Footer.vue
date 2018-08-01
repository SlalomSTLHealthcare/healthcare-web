<template>
  <el-container class="footer">
    <el-row class="top">
    <div class="panelOne">
      <el-row>
          <a href="https://www.slalom.com/" target="_blank">
              <img src="../assets/slalomwhite.png" alt="pic" class="slalomLogo">
          </a>
      </el-row>
      <el-row>
          <a href="https://www.linkedin.com/company/slalom-consulting/" target="_blank">
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a href="https://www.instagram.com/slalomconsulting" target="_blank">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="https://twitter.com/Slalom" target="_blank">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="https://www.facebook.com/slalomconsulting/" target="_blank">
            <i class="fab fa-facebook-f"></i>
          </a>
      </el-row>
      <el-row class="directions">
        <p>320 S. Euclid Ave</p>
        <p>St. Louis,MO 63110</p>
      </el-row>
    </div>
    <div class="panelTwo">
        <el-row class="home">
          <h4>Home</h4>
          <router-link to="/" class="link">Home</router-link>
          <router-link to="about" class="link">About</router-link>
          <router-link to="people" class="link">Speakers</router-link>
          <router-link to="session" class="link">Sessions</router-link>
          <router-link to="schedule" class="link">Schedule</router-link>
          <router-link to="sponsor" class="link">Sponsors</router-link>
      </el-row>
      <el-row class="account">
        <h4>Account</h4>
          <router-link :to="computedRegister" class="link">{{computedRegisterDescription}}</router-link>
      </el-row>
      <el-row class="contact">
        <h4>Help</h4>
        <router-link to="about" class="link">Contact</router-link>
      </el-row>
    </div>
    <!--This was in the design but not sure if it was needed-->
    <!-- <div class="panelThree">
      <span class="input-label">Sign up for Newsletter</span>
      <input class="el-input-style" 
        type="email" 
        placeholder="Enter your email address">
        <el-button round class="signUp">Sign Up</el-button>
    </div> -->
    </el-row>
    <el-row class="bot">
        <p>2018 Slalom</p>
    </el-row>
  </el-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "footer",
  computed: mapState({
    computedRegister(state) {
      return state.jwt === null ? 'registration' : 'profile';
    },
    computedRegisterDescription(state) {
      return state.jwt === null ? 'Register' : 'Profile Page';
    }
  })
};
</script>

<style scoped lang="less">
.footer {
  padding: 12px 12px;
  background: black ;
  bottom: 0;
  z-index: 10;
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 1px 4px grey;
  justify-content: space-between
}
.top{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.bot{
  align-self:center;
  color:white;
  font-size: 12x;
}
.el-input-style{
 background-color: black;
 color: white;
 font-size: 15px;
 border-radius: 4px;
 height: 25px;
 width: 200px;
 margin-bottom: 20px;
 margin-top: 10px;
}
.input-label{
  color:white;
}
.directions{
  color:white;
  padding-top: 15px;
}
h4{
  color: #fff;
}
.home{
  display: flex;
  flex-direction: column;
}
.account{
  padding: 0px 150px;
}
.slalomLogo {
  width: 100px;
}
.signUp{
  text-decoration: none;
  color: black;
  background-color: #fff;
  width: 130px;
}
.panelOne{
  display: flex;
  flex-direction: column;
  padding-left: 20px;
}
.panelTwo{
  display: flex;
  justify-content: space-between;
}
//Not using panelThree
// .panelThree{
//   display: flex;
//   flex-direction: column;
//   padding-top: 12px;
//   justify-content: flex-end;
// }
.routes {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.link {
  text-decoration: none;
  padding-bottom: 10px;
  letter-spacing: 1.5px;
  color: grey;
}
.link:hover {
  color: #15a6ff;
}
.fa-linkedin-in,
.fa-facebook-f,
.fa-twitter,
.fa-instagram {
  color: white;
  padding-right: 10px;
  padding-top: 10px;
  margin-left: 5px;
  font-size: 20px;
}
.fa-linkedin-in:hover,
.fa-facebook-f:hover,
.fa-twitter:hover,
.fa-instagram:hover {
  color: #c100d4;
}
</style>
