<template>
  <div class="person">
        <el-card shadow="hover">
          <el-row :gutter="20">
            <el-col :span="8">
                <div class="image-wrapper">
                  <img :src="imgSource" class="image">
                </div>
            </el-col>
            <el-col :span="16">
              <div style="padding: 10px;">
                <div class="name">{{ name }}</div>
                <div>
                  <a :href="twitter" target="_blank"><img src="../assets/twitter.png" class="imageLogo"></a>
                  <a :href="linkedin" target="_blank"><img src="../assets/linkedin.png" class="imageLogo"></a>
                </div>
                <div class="button">
                  <el-button type="text">{{ company }}</el-button>
                </div>
              <p class="bio">{{ bio }}</p>
              <p class="descript">This is a description of their talk</p>
              </div>
            </el-col>
          </el-row>
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
.descript {
  float: left;
}
.el-card {
  padding: 2% 2%;
  height: 20%;
  border: 0;
  background-color: transparent;
}
.image-wrapper {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  overflow: hidden;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.name {
  font-weight: bold;
  font-size: 40px;
  text-align: left;
}
.bio {
  font-style: italic;
  padding: 3px;
  line-height: 1.4;
  text-align: left;
}

.button {
  padding: 0;
  text-align: left;
}
.image {
  width: 300px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.imageLogo {
  width: 80px;
  height: 80px;
  display: inline;
}
</style>
