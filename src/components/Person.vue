<template>
  <div class="person">
        <el-card class="card" shadow="hover" :body-style="{ padding: '0px' }">
          <img :src="imgSource" class="image">
          <div style="padding: 14px;">
            <span class="name">{{ name }}</span>
            <a :href="twitter" target="_blank"><i class="fab fa-twitter"></i></a>
            <a :href="linkedin" target="_blank"><i class="fab fa-linkedin-in"></i></a>
            <div class="info">
              <div class="bio">{{ bio }}</div>
              <div class="company">{{ company }}</div>
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
    twitter: String,
    linkedin: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
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
  padding: 2% 2%;
  border: 0;
  background-color: transparent;
}
.name {
  font-weight: bold;
  font-size: 18px;
  text-align: left;
  color:#005aed;
}
.bio {
  text-align: left;
}
.fa-linkedin-in,
.fa-twitter {
  padding: 5px;
  float: right;
  color: #9b9b9b;
  font-size: 15px;
}
.info {
  margin-top: 10px;
  font-size: 15px;
  color: #9b9b9b;
}
</style>
