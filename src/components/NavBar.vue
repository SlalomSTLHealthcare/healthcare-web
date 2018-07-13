<template>
  <div>
    <div class="menu">
      <!-- <img class="logo" src="../assets/slalom-logo-blue-RGB.jpg"/> -->
      <!-- <span class="logo">HealthSTLx <span><i class="fas fa-medkit"></i></span></span> -->
        <span class="logo"><img src="../assets/capture1.png"/></span></span>
      <span class="menuLogo"><i class="fas fa-bars fa-2x" v-on:click="show = !show"></i></span>
    </div>

    <transition name="fade">
        <div class="overlay" v-if="show" v-on:click="show = !show">
        <i class="fas fa-times fa-2x"></i>
	         <div class="wrap">
              <router-link to="/">Home</router-link>
              <router-link to="people">Speakers</router-link>
			        <router-link to="session">Breakout Sessions</router-link>
              <router-link to="schedule">Schedule</router-link>
              <router-link to="registration">Register</router-link>
              <router-link to="sponsor">Sponsors</router-link>
              <router-link to="about">About</router-link>
		       </div>
	      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "navBar",
  data() {
      return {
        show: false
      };
    },
  methods: {
    handleSelect(key, keyPath) {}
  }
};
</script>

<style scoped lang="less">
.logo img {
  height: 80px;
  width: 320px;
}
.menu {
  display:flex;
  align-items: center;
  position: fixed;
  background-color: #fff;
  top: 0;
  z-index: 10;
  width: 100%;
  box-shadow: 0px 1px 4px grey;
  justify-content: space-between;
}
.menu .menuLogo {
  padding: 20px;
}
.menu .menuLogo:hover {
  color: #e5e5e5;
  cursor: pointer;
}
.overlay i{
  color: #e5e5e5;
  position: absolute;
  right: 0;
  margin-right: 50px;
  margin-top: 40px;
  cursor: pointer;
}
.overlay i:hover{
  color:#FFE72C;
}
.logo {
  display: flex;
  width: 300px;
  font-weight: bold;
  font-size: 35px;
  color: #0040a8;
}
ul {
	list-style:none;
}
/*overlay*/
.overlay {
	position:fixed;
	top:0;
	height:100vh;
	width:100vw;
	background:#333;
	overflow:auto;
	z-index:99;
  opacity: 0.96;
}
.wrap {
	color:#e9e9e9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.wrap a {
  list-style:none;
	color:#34B484;
	padding:8px 0;
	text-decoration:none;
  font-size:30px;
  color:#f0f0f0;
}
 a:hover {
	color:#FFE72C;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
