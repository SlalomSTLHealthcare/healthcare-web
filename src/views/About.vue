<template>
  <div class="about">
    <h1>List of Panels</h1>
    <Panels/>
  </div>
</template>


<script>
// @ is an alias to /src
import Panels from "@/components/Panels.vue";

export default {
  name: "about",
  components: {
    Panels
  }
};
</script>
