<template>
<el-row v-if="sponsorLevel === 'platinum'">
    <el-row class="pic">
        <el-card shadow="never">
            <img :src="image" alt="pic">
        </el-card>
    </el-row>
    <el-row >
        <el-card class="event" shadow="never" >
            <h2>{{ title }}</h2>
            <h3>Name: {{ name }}</h3>
            <h3 class="description">Description: {{ description }}</h3>
        </el-card>
    </el-row>
</el-row>
<el-row class="grid-container" v-else>
    <el-card  class="grid-container" shadow="never">
        <img class="grid-item" :src="image" alt="pic">
    </el-card>
</el-row>
</template>

<script>
import Sponsors from "@/components/Sponsors.vue";
export default {
  name: "Sponsor",
  props: {
    title: String,
    name: String,
    description: String,
    image: String,
    sponsorLevel: String
  },
  computed: {},
  components: {
    Sponsors
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.event {
  padding-top: 0px;
  font-size: 12px;
  text-align: left;
  margin-bottom: 1%;
}
.description {
  text-align: left;
}
h3,
h2 {
  text-align: left;
  padding: 0;
}
.pic {
  float: left;
  width: 20%;
  margin-bottom: 1%;
}
.el-row {
  padding-right: 0.5%;
}
img {
  width: 100%;
}
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 1%;
  float: left;
}
.grid-item {
  text-align: center;
  width: 90%;
}
</style>
