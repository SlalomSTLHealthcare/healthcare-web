<template>
  <div>
    <div class="menu">
      <img class="logo" src="../assets/slalom-logo-blue-RGB.jpg"/>
      <i class="fas fa-bars fa-2x" v-on:click="show = !show"></i>
    </div>

    <transition name="fade">
        <div class="overlay" v-if="show" v-on:click="show = !show">
        <i class="fas fa-times fa-2x"></i>
	         <div class="wrap">
		          <ul class="wrap-nav">

                         <li><router-link to="people">Speakers</router-link></li>
				                 <li><router-link to="about">Breakout Sessions</router-link></li>
                         <li><router-link to="schedule">Schedule</router-link></li>
                         <li><router-link to="registration">Register</router-link></li>
                         <li><router-link to="sponsor">Sponsors</router-link></li>
                         <li><router-link to="/">About</router-link></li>

		              </ul>
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
  props: {
    activeIndex: String
  },
  methods: {
    handleSelect(key, keyPath) {}
  }
};
</script>

<style>
.menu i {
  position: absolute;
  right: 0;
  padding-right: 50px;
  padding-top: 40px;
}
.menu i:hover {
  color: #e5e5e5;
  cursor: pointer;
}
.overlay i{
  color: #e5e5e5;
  position: absolute;
  right: 0;
  padding-right: 50px;
  padding-top: 40px;
  cursor: pointer;
}
.menu {
  position: fixed;
  background-color: #fff;
  top: 0;
  z-index: 10;
  width: 100%;
}
.logo {
  float: left;
  width: 30px;
  padding: 10px;

}
ul {
	list-style:none;
}

nav {
	text-align:center;
	width:100%;
	position:relative;
	height:auto;
	overflow:hidden;
	background:none;
}
nav ul {
	text-align:center;
}
nav ul li {
	display:inline-block;
}

nav ul li a:hover {
	color: #34B484;
}
/*overlay*/
.overlay {
	position:fixed;
	top:0;
	height:100%;
	width:100%;
	background:#333;
	overflow:auto;
	z-index:99;
}
.wrap {
	color:#e9e9e9;
	text-align:center;
	max-width:90%;
	margin:0 auto;
}
.wrap ul.wrap-nav {
	padding:15%;
}
.wrap ul.wrap-nav li a {
	color:#34B484;
	padding:8px 0;
	text-decoration:none;
	transition-property:all .2s linear 0s;
	-moz-transition:all .2s linear 0s;
	-webkit-transition:all .2s linear 0s;
	-o-transition:all .2s linear 0s;
  font-size:30px;
  display:inline-block;
  vertical-align:top;
  position:relative;
  color:#f0f0f0;
}

.wrap ul.wrap-nav li a:hover {
	color:#FFE72C;
}
@media screen and (max-width:48em) {
	.wrap ul.wrap-nav>li {
		width:100%;
		padding:20px 0;
		border-bottom:1px solid #575757;
	}
	.wrap ul.wrap-nav {
		padding:30px 0px 0px;
	}
	nav ul {
		opacity:0;
		visibility:hidden;
	}
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
