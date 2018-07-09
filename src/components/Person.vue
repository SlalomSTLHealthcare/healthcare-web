<template>
  <div class="person">
        <el-card shadow="hover" :body-style="{ padding: '0px' }">
          <div class="image-wrapper">
            <img :src="imgSource" class="image">
          </div>
          <div style="padding: 10px;">
            <span class="name">{{ name }}</span>
            <div class="bottom clearfix">
              <el-button type="text" class="button">{{ company }}</el-button>
              <p class="bio">{{ bio }}</p>
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
    bio: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
body {
  background-color: transparent;
}
.el-card{
  border-radius: 15%;
  padding: 15%;
  height: 300px;
  width: 250px;
}
.image-wrapper{
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}
img{
  position: relative;
  width: 220px;
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
  font-size: 18px;
}
.bio {
  font-style: italic;
  padding: 3px;
  line-height: 1.4;
}
.bottom {
  margin-top: 13px;
  line-height: 12px;
  text-align: center;
}
.button {
  padding: 0;
}
.image {
  width: 400px;
  display: block;
}
.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}
.clearfix:after {
    clear: both
}
</style>
