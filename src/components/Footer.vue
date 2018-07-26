<template>
    <el-container class="footer">
        <el-row class="logo">
            <a href="https://www.slalom.com/" target="_blank">
                <img src="../assets/slalomwhite.png" alt="pic" class="slalomLogo">
            </a>
        </el-row>
        <el-row class="routes">
          <div class="underline"></div>
            <router-link to="/" class="link">Home</router-link>
            <router-link to="people" class="link">Speakers</router-link>
			      <router-link to="session" class="link">Breakout Sessions</router-link>
            <router-link to="schedule" class="link">Schedule</router-link>
            <router-link :to="computedRegister" class="link">{{computedRegisterDescription}}</router-link>
            <router-link to="sponsor" class="link">Sponsors</router-link>
            <router-link to="about" class="link">About</router-link>
        </el-row>
        <el-row class="contact">
          <div class="underline"></div>
          <p>Information<i class="far fa-question-circle"></i></p>
          <p>emailslalom@slalom.com</p>
          <p>320 S Euclid Ave, St. Louis, MO 63110</p>
        </el-row>
        <el-row class="logo">
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
    </el-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "footer",
  computed: mapState({
    computedRegister(state) {
      return state.username === '' ? 'registration' : 'profile';
    },
    computedRegisterDescription(state) {
      return state.username === '' ? 'Register' : 'Profile Page';
    }
  })
};
</script>

<style scoped lang="less">
.footer {
  padding: 12px 12px;
  display: flex;
  background: linear-gradient(#1224ff,#c100d4) ;
  bottom: 0;
  z-index: 10;
  width: 100%;
  height: 300px;
  box-shadow: 0px 1px 4px grey;
  justify-content: space-between;
}
.slalomLogo {
  width: 150px;
}
.logo {
  align-self: flex-end;
}
.contact {
  display: flex;
  flex-direction: column;
  color: white;
  letter-spacing: 3px;
  align-items: center;
  margin-top: 15px;
}
.routes {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.link {
  text-decoration: none;
  padding: 0px 20px;
  letter-spacing: 1.5px;
  color: #fff;
}
.link:hover {
  color: #040024;
}
.aboutBut {
  text-decoration: none;
  font-size: 30px;
}
.underline {
  width: 100px;
  height: 0.25em;
  background-color: #ff00cc;
}
.fa-linkedin-in,
.fa-facebook-f,
.fa-twitter,
.fa-instagram {
  color: white;
  padding: 0px 15px;
  font-size: 35px;
}
.fa-question-circle {
  color: white;
  padding-left: 10px;
}
</style>
