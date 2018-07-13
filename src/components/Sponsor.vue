<template>
<el-container v-if="sponsorLevel === 'platinum'">
  <el-card shadow="hover" class="platinumCard">
      <el-col :span="1">
        <img :src="image" class="platinumImage" alt="pic">
      </el-col>
      <el-col :span="22">
        <div>
          <div class="name">Sponsor Name: {{ name }}</div>
          <div class="description">Description: {{ description }}</div>
        </div>
      </el-col>
  </el-card>
</el-container>
  <a :href="link" v-else >
    <img :src="image" alt="pic">
  </a>
</template>

<script>

export default {
  name: "Sponsor",
  props: {
    title: String,
    name: String,
    description: String,
    image: String,
    sponsorLevel: String,
    link: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.description {
  text-align: center;
}
.name{
  text-align: center;
  font-size: 20px;
  font-weight: bold;
}


.platinumCard{
  width: 100vw;
  font-size: 12px;
  margin-bottom: 10px;
}
img{
  height: 150px;
  width: 150px;
}



</style>
