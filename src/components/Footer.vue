<template>
    <el-container class="footer">
        <el-row>
            <el-button class="btn" v-on:click="about">About</el-button>
        </el-row>
        <el-row>
            <a href="https://www.slalom.com/" target="_blank">
                <img src="../assets/slalom-logo-blue-RGB.jpg" alt="pic" class="slalomLogo">
            </a>
        </el-row>
        <el-row class="routes">
            <router-link to="/" class="link">Home</router-link>
            <router-link to="people" class="link">Speakers</router-link>
			<router-link to="session" class="link">Breakout Sessions</router-link>
            <router-link to="schedule" class="link">Schedule</router-link>
            <router-link to="registration" class="link">Register</router-link>
            <router-link to="sponsor" class="link">Sponsors</router-link>
            <router-link to="about" class="link">About</router-link>
        </el-row>
        <el-row>
            <a href="https://www.linkedin.com/company/slalom-consulting/" target="_blank">
                <img src="../assets/linkedin.png" alt="pic" class="logo">
            </a>
            <a href="https://twitter.com/Slalom" target="_blank">
                <img src="../assets/twitter.png" alt="pic" class="logo">
            </a>
            <a href="https://www.facebook.com/slalomconsulting/" target="_blank">
                <img src="../assets/facebook.png" alt="pic" class="logo">
            </a>
        </el-row>
    </el-container>
</template>

<script>
export default {
  name: "footer",
  methods: {
    about: function() {
      this.$router.push("/about");
    }
  }
};
</script>

<style scoped lang="less">
.footer {
  padding-left: 12px;
  padding-bottom: 0px; 
  margin: 0;
  display: flex;
  align-items: center;
  background-color: #fff;
  bottom: 0;
  z-index: 10;
  width: 100%;
  height: 110px;
  box-shadow: 0px 1px 4px grey;
  justify-content: space-between;
}
.el-button {
  background: #3336ff;
  color: white;
  border: black;
  width: 12em;
  height: 4em;
}
.logo {
  width: 75px;
}
.slalomLogo {
  width: 150px;
}
.routes {
  display: flex;
  justify-content: space-around;
}
.link {
  text-decoration: none;
  padding: 0px 20px;
  color: #3336ff;
}
</style>

