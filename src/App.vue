<template>
  <div id="app">
    <div id="nav"></div>
    <NavBar></NavBar>
    <div class="page">
    <transition
      name="fade"
      mode="out-in">
      <router-view/>
    </transition>
  </div>
    <Footer/>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import { mapState } from 'vuex';
export default {
  name: "app",
  components: {
    NavBar,
    Footer
  },
  mounted(){
    window.addEventListener('scroll', () => {
      if (window.scrollY + 70 > window.innerHeight) {
        document.getElementById('banner').classList.add('banner-bar');
      } else if (this.$route.name === 'home') {
        document.getElementById('banner').classList.remove('banner-bar');
      }
    });
  },
  computed: mapState({
    getToken(state){
      return state.jwt;
    }
  }),
};
</script>

<style lang="less">

.el-form-item__label {
    padding-bottom: 0 !important;
}

.el-message-box {
  width: 50vw;
}

.el-form-item {
    margin-bottom: 14px !important;
}

body {
    background: url('./assets/background-landing.jpg') no-repeat center center fixed;
    background-size: cover;
}
// #app {
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   color: #2c3e50;
// }
// #nav {
//   height: 70px;
//   a {
//     font-weight: bold;
//     color: #2c3e50;
//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
.fade-enter-active,
.fade-leave-active {
  transition-duration: .4s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
.page {
  min-height: calc(~"100vh - 60px");
}

@media (max-width: 768px) {
  .el-message-box {
    width: 80vw;
  }
}

@media (max-width: 768px) {
  .el-dialog {
    width: 80vw !important;
  }
}

</style>
