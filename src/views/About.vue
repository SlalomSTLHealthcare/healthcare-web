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
  padding: 80px 80px 30px;
}
@media (max-width: 768px) {
  .about-content{
    padding: 80px 4% 4%;
  }
}
</style>
