<template>
  <div>
    <div class="menu">
      <span class="logo"><img src="../assets/capture1.png"/></span>
      <div class="menuR">
        <el-col v-if="this.$session.exists()">
          <el-button class="logBtn" type="primary" round plain v-on:click="logout">Logout</el-button>
        </el-col>
        <el-col v-else class="optiontwo">
          <el-button class="logBtn" type="primary" plain round v-on:click="registerPush">Register</el-button>
          <Login class="logBtn" login_type='button'/>
        </el-col>
        <el-col class="menuLogo"><i class="fas fa-bars fa-2x" v-on:click="show = !show"></i></el-col>
      </div>
    </div>
    <transition name="fade">
        <div class="overlay" v-if="show" v-on:click="show = !show">
        <i class="fas fa-times fa-2x"></i>
	         <div class="wrap">
              <router-link to="/">Home</router-link>
              <router-link to="people">Speakers</router-link>
			        <router-link to="session">Breakout Sessions</router-link>
              <router-link to="schedule">Schedule</router-link>
              <router-link :to="register">{{profileRegister}}</router-link>
              <router-link to="sponsor">Sponsors</router-link>
              <router-link to="about">About</router-link>
		       </div>
	      </div>
    </transition>
  </div>
</template>

<script>
import Login from "./Login.vue";

export default {
  name: "navBar",
  data() {
    return {
      show: false,
      register: "registration",
      profileRegister: "Register"
    };
  },
  methods: {
    handleSelect(key, keyPath) {},
    logout: function() {
      this.profileRegister = "Register";
      this.$session.destroy();
      this.emitLogin();
      this.$forceUpdate();
    },
    registerPush: function() {
      console.log("register");
      this.$router.push("/registration");
    },
    emitLogin() {
      this.$root.$emit("login");
    },
    emitLogout() {
      this.$root.$emit("logout");
    }
  },
  mounted: function() {
    this.$root.$on("login", () => {
      this.register = "profile";
      this.profileRegister = "Profile Page";
      this.$forceUpdate();
    }),
      this.$root.$on("logout", () => {
        this.register = "profile";
        this.profileRegister = "Profile Page";
        this.$forceUpdate();
      });
  },
  components: {
    Login
  }
};
</script>

<style scoped lang="less">
.logo img {
  height: 80px;
  width: 320px;
}
.menu {
  display: flex;
  align-items: center;
  position: fixed;
  background-color: #fff;
  top: 0;
  z-index: 2;
  width: 100%;
  box-shadow: 0px 1px 1px #ccc;
  justify-content: space-between;
}
.menuR {
  display: flex;
}
.menu .menuLogo {
  padding: 20px;
}
.menu .menuLogo:hover {
  color: #e5e5e5;
  cursor: pointer;
}
.optiontwo {
  display: flex;
  justify-content: space-around;
}
.overlay i {
  color: #e5e5e5;
  position: absolute;
  right: 0;
  margin-right: 50px;
  margin-top: 40px;
  cursor: pointer;
}
.overlay i:hover {
  color: #ffe72c;
}
.logo {
  display: flex;
  width: 300px;
  font-weight: bold;
  font-size: 35px;
  color: #0040a8;
}
ul {
  list-style: none;
}
.logBtn {
  margin: 15px 1px;
}
/*overlay*/
.overlay {
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100vw;
  background: #333;
  overflow: auto;
  z-index: 3;
  opacity: 0.96;
}
.wrap {
  color: #e9e9e9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.wrap a {
  list-style: none;
  color: #34b484;
  padding: 8px 0;
  text-decoration: none;
  font-size: 30px;
  color: #f0f0f0;
}
a:hover {
  color: #ffe72c;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
