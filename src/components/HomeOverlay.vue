<template>
  <el-row class="container">
  <div class="image">
    <img src="./light-blue-blur.jpg">
  </div>
  <div class="overlay">
   <p>Hello WorldM</p>
 </div>
</el-row>
</template>

<script>
export default {
  name: "HomeOverlay",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

img{
  width: 100%;
  height: 200px;
  overflow: hidden;
  margin-left: 0;
}

.overlay {
  position: absolute;
  top:30px;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  background-color: transparent;
}
.container:hover .overlay {
  opacity: 1;
}
</style>
