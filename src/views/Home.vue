<template>
  <div class="home">
    <NavBar></NavBar>
    <HomeOverlay/>
    <HomeSponsor/>
    <Footer/>
  </div>
</template>

<script>

import HomeOverlay from "@/components/HomeOverlay.vue";
import HomeSponsor from "@/components/HomeSponsor.vue";
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "home",
  components: {
    HomeOverlay,
    HomeSponsor,
    NavBar,
    Footer
  }
};
</script>

<style scoped lang="less">
div{
  margin: 0px;
}
</style>
