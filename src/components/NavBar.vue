<template>
  <div>
    <div class="menu">
      <div class="logo">
        <router-link v-if="$route.name !== 'home'" class="link-inner" to="/"><img class="banner-logo" src="../assets/final-logo.png"/><span style="font-weight: 100; font-size: 1.8rem;" class="banner-text">health</span><span style="font-weight: 700; font-size: 1.8rem;" class="banner-text">STLX</span></router-link>
      </div>
      <div class="menuR">
        <el-col v-if="isSignedIn">
          <el-button class="logBtn" round plain v-on:click="logout">Logout</el-button>
        </el-col>
        <el-col v-else class="optiontwo">
          <el-button v-if="$route.name !== 'registration'" class="logBtn" plain round v-on:click="registerPush">Register</el-button>
          <Login class="logIn" loginType='button'/>
        </el-col>
        <el-col class="menuLogo"><i :class="['fas', show ? 'fa-times' : 'fa-bars']" v-on:click="show = !show"></i></el-col>
      </div>
    </div>
    <div class="banner-container">
        <div id="banner" :class="[$route.name !== 'home' ? 'banner-bar' : '']"></div>
    </div>
    <transition name="fade">
        <div class="overlay" v-if="show" v-on:click="showBox" >
	         <div class="wrap">
              <router-link class="nav-links" to="/">Home</router-link>
              <router-link class="nav-links" :to="computedRegister">{{computedRegisterDescription}}</router-link>
              <span v-if="isSignedIn" class="nav-links logs" v-on:click="logout">Logout</span>
              <Login v-else class="nav-links logs" v-on:close="closeBox" loginType='nav'/>
              <router-link class="nav-links" to="people">Speakers</router-link>
			        <router-link class="nav-links" to="sessions">Sessions</router-link>
              <router-link class="nav-links" to="schedule">Schedule</router-link>
              <!-- <router-link class="nav-links" to="sponsors">Sponsors</router-link> -->
              <router-link class="nav-links" to="about">Venue Information</router-link>
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

@import '../global-variables';

.banner-bar {
    background: rgba(0,0,0,.6);
    filter: blur(10px);
    height: 90px;
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    width: calc(~"100% + 20px");
}

.banner-container {
    position: fixed;
    width: 100%;
    height: 70px;
    overflow: hidden;
    z-index: 14;
}

.menu {
  display: flex;
  align-items: center;
  position: fixed;
  // background-color: #fff;
  top: 0;
  z-index: 15;
  width: 100%;
  justify-content: space-between;
}

.banner-logo {
    width: 40px;
    height: 40px;
    margin: 0 10px 0 20px;
    filter: drop-shadow(0 0 2rem #fff);
}

.banner-text {
    text-shadow: .3rem .3rem .3rem fade(@secondary-dark, 20%);
}

.link-inner {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.menu a {
    color: #fff;
    text-decoration: none;
}

.menuR {
  display: flex;
}
.menu .menuLogo {
    color: #fff;
  padding: 21px 20px 21px 10px;

  i {
      width: 26px;
      font-size: 1.8rem;
  }
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
ul {
  list-style: none;
}
.logBtn {
  margin: 15px 10px;
  height: 40px;
  background-color: transparent;
  border: 1px solid #fff;
  color: #fff;

  &:hover {
      border-color: #fff;
      background-color: #fff;
      color: @primary;
  }
  &:focus {
      border-color: #fff;
      background-color: transparent;
      color: #fff;
  }
  // color: black;
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
  padding: 10px 0;
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

.logs {
  display: none;
}

@media (max-width: 600px){
  .logs {
    display: block;
  }
    .logBtn {
      display: none;
    }

    .menu {
      justify-content: center;
    }
}
// @media (max-width: 398px){
//   .logo img {
//     // width: 100px;
//     // margin-left: 15px;
//     // height: 25px;
//   }
//   .logIn, .optiontwo {
//     // display: none;
//   }
//   .logBtn {
//     // margin: 15px 1px;
//   }
//   .optiontwo {
//     // font-size: 25px;
//   }
//   .el-button.is-round{
//     // padding: 12px 12px;
//   }
// }
// @media (min-width: 400px) and (max-width: 500px){
//   .logo img {
//     width: 160px;
//     margin-left: 15px;
//     height: 40px;
//   }
//   .logBtn {
//     margin: 15px 6px;
//   }
//   .logIn{
//     margin: 13px 6px;
//   }
//   .logBtn {
//     margin: 15px 1px;
//   }
//   .optiontwo {
//     font-size: 25px;
//   }
//   .el-button.is-round{
//     padding: 12px 12px;
//   }
// }
</style>
