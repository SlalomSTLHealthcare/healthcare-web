<template>
<div class="about-content">
  <AboutContent/>
</div>
</template>


<script>
// @ is an alias to /src
import AboutContent from "@/components/AboutContent.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  name: "about",
  components: {
    AboutContent,
    NavBar
  }
};
</script>

<style>
.about-content {
  background-color: #f7f7f7;
}
</style>
