<template>
  <div>
    <div class="menu">
      <el-row class="logo">
        <router-link to="/"><img src="../assets/healthstlx-horiz.png"/></router-link>
      </el-row>
      <div class="menuR">
        <el-col v-if="isSignedIn">
          <el-button class="logBtn" round plain v-on:click="logout">Logout</el-button>
        </el-col>
        <el-col v-else class="optiontwo">
          <el-button class="logBtn" plain round v-on:click="registerPush">Register</el-button>
          <Login class="logIn" loginType='button'/>
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
              <router-link :to="computedRegister">{{computedRegisterDescription}}</router-link>
              <router-link to="sponsor">Sponsors</router-link>
              <router-link to="about">About</router-link>
		       </div>
	      </div>
    </transition>
  </div>
</template>

<script>
import Login from "./Login.vue";
import { mapState } from 'vuex';

export default {
  name: "navBar",
  data() {
    return {
      show: false,
    };
  },
  methods: {
    handleSelect(key, keyPath) {},
    logout: function() {
      this.$store.dispatch('logout');
      this.$router.push("/");
    },
    registerPush: function() {
      this.$router.push("/registration");
    }
  },
  computed: mapState({
    computedRegister (state){
      return state.username === '' ? 'registration' : 'profile';
    },
    computedRegisterDescription (state){
      return state.username === '' ? 'Register' : 'Profile Page';
    },
    isSignedIn (state){
      return !(state.username === '');
    }
  }),
  components: {
    Login
  }
};
</script>

<style scoped lang="less">
.menu {
  display: flex;
  align-items: center;
  position: fixed;
  background-color: #fff;
  top: 0;
  z-index: 15;
  width: 100%;
  justify-content: space-between;
}
.menuR {
  display: flex;
}
.menu .menuLogo {
  padding: 17px 10px;
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
  color:#15a6ff;
}
.logo {
  display: flex;
}
.logo img {
  width: 200px;
  margin-left: 15px;
  height: 50px;
}
ul {
  list-style: none;
}
.logBtn {
  margin: 15px 10px;
  height: 40px;
  color: black;
}
.logIn {
  margin: 12px 10px;
  height: 40px;
  color: black;
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
  padding: 20px;
}
.menu .menuLogo:hover {
  color: #e5e5e5;
  cursor: pointer;
}
.optiontwo {
  display: flex;
  justify-content: space-around;
  text-decoration: none;
  font-size: 30px;
  color: #f0f0f0;
}
a:hover {
  color:#15a6ff;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
