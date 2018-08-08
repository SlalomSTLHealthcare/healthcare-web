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
        <div class="overlay" v-if="show" v-on:click="showBox" >
        <i class="fas fa-times fa-2x"></i>
	         <div class="wrap">
              <router-link class="nav-links" to="/">Home</router-link>
              <router-link class="nav-links" to="about">About</router-link>
              <router-link class="nav-links" :to="computedRegister">{{computedRegisterDescription}}</router-link>
              <span v-if="isSignedIn" class="nav-links" v-on:click="logout">Logout</span>
              <Login v-else class="nav-links" v-on:close="closeBox" loginType='nav'/>
              <router-link class="nav-links" to="people">Speakers</router-link>
			        <router-link class="nav-links" to="session">Breakout Sessions</router-link>
              <router-link class="nav-links" to="schedule">Schedule</router-link>
              <router-link class="nav-links" to="sponsor">Sponsors</router-link>
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
    showBox: function(event) {
      if(event.target.id!="login"){
        this.show=!this.show
      }
    },
    closeBox: function() {
      this.show=false;
    },
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
      return state.jwt === null ? 'registration' : 'profile';
    },
    computedRegisterDescription (state){
      return state.jwt === null ? 'Register' : 'Profile Page';
    },
    isSignedIn (state){
      return !(state.jwt === null);
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
.wrap .nav-links {
  list-style: none;
  color: #fff;
  padding: 20px 0;
  text-decoration: none;
  font-size: 25px;
}
.menu .menuLogo:hover {
  color: #e5e5e5;
  cursor: pointer;
}
.optiontwo {
  display: flex;
  justify-content: space-around;
  text-decoration: none;
  font-size: 20px;
  color: #f0f0f0;
}
.nav-links:hover {
  color:#15a6ff;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
@media (max-width: 398px){
  .logo img {
    width: 100px;
    margin-left: 15px;
    height: 25px;
  }
  .menu .menuLogo {
    padding-top: 17px;
    padding-bottom: 17px;
    padding-right: 10px;
    padding-left: 0px;
  }
  .logIn, .optiontwo {
    display: none;
  }
  .logBtn {
    margin: 15px 1px;
  }
  .optiontwo {
    font-size: 25px;
  }
  .el-button.is-round{
    padding: 12px 12px;
  }
}
.wrap .nav-links {
  padding: 10px 0;
}
@media (min-width: 400px) and (max-width: 500px){
  .logo img {
    width: 160px;
    margin-left: 15px;
    height: 40px;
  }
  .menu .menuLogo {
    padding-top: 17px;
    padding-bottom: 17px;
    padding-right: 10px;
    padding-left: 0px;
  }
  .logIn, .logBtn {
    margin: 15px 6px;
  }
  .logBtn {
    margin: 15px 1px;
  }
  .optiontwo {
    font-size: 25px;
  }
  .el-button.is-round{
    padding: 12px 12px;
  }
}
</style>
