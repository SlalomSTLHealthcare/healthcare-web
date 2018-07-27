<template>
  <div class="home">
    <HomeOverlay/>
    <HomeSponsor/>
    <!-- <Footer/> -->
  </div>
</template>

<script>
import Login from "@/components//Login.vue";
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
    Footer,
    Login
  },
  methods: {
    about: function() {
      this.$router.push("/about");
    }
  }
};
</script>

<style scoped lang="less">
div {
  margin: 0px;
}
</style>
