<template>
  <div id="app">
    <div id="nav"></div>
    <NavBar></NavBar>
    <router-view/>
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
  },
  computed: mapState({
    getToken(state){
      return state.jwt;
    }
  }),
};
</script>

<style lang="less">
body {
  font-family: 'Roboto', sans-serif;
  margin: 0;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  height: 70px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
