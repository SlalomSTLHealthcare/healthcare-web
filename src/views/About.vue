<template>
  <el-carousel indicator-position="outside">
    <el-carousel-item>
      <Breakouts/>
    </el-carousel-item>
    <el-carousel-item>
      <Panels/>
    </el-carousel-item>
    <el-carousel-item>
      <Speakers/>
    </el-carousel-item>
  </el-carousel>
</template>


<script>
// @ is an alias to /src
import Panels from "@/components/Panels.vue";
import Breakouts from "@/components/Breakouts.vue";
import Speakers from "@/components/Speakers.vue";

export default {
  name: "about",
  components: {
    Panels,
    Breakouts,
    Speakers
  }
};
</script>
