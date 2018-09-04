<template>
  <div class="person">
        <el-card class="card" shadow="never" :body-style="{ padding: '0px' }">
          <img :src="imgSource" class="image">
          <div class="info-wrapper">
            <span class="name">{{ name }}</span>
            <a v-if="twitter" :href="twitter" target="_blank"><i class="fab fa-twitter"></i></a>
            <a v-if="linkedin" :href="linkedin" target="_blank"><i class="fab fa-linkedin-in"></i></a>
            <div class="info">
              <div class="company">{{ company }}</div>
              <div class="title">{{ title }}</div>
              <div class="bio">{{ bio }}</div>
            </div>
          </div>
        </el-card>
  </div>
</template>

<script>
export default {
  name: "Person",
  props: {
    name: String,
    imgSource: String,
    company: String,
    bio: String,
    title: String,
    twitter: String,
    linkedin: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '../global-variables';
.card {
  width: 300px;
}
.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}
.descript {
  float: left;
}
.el-card {
  padding: 20px;
  border: 0;
  // border-radius: 0;
}
.name {
  font-weight: bold;
  font-size: 18px;
  text-align: left;
}
.title {
    margin: 4px 0 10px;
    font-style: italic;
}
.fa-linkedin-in,
.fa-twitter {
  padding-left: 10px;
  float: right;
  color: #9b9b9b;
  font-size: 15px;
}
.fa-linkedin-in:hover,
.fa-twitter:hover {
  color: @primary;
}
.info {
  margin-top: 10px;
  font-size: 15px;
  color: #777;
}
.company {
    color: #555;
}

.info-wrapper {
    margin-top: 10px;
}
</style>
