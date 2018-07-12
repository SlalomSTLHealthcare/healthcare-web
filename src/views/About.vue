<template>
  <AboutContent/>
</template>


<script>
// @ is an alias to /src
import AboutContent from "@/components/AboutContent.vue";

export default {
  name: "about",
  components: {
    AboutContent
  }
};
</script>


<style scoped lang="less">
h1 {
  text-align: left;
  padding-left: 1%;
  font-weight: bold;
}

</style>
