<template>
  <div class="person">
    <div class="container">
      <div id="image-wrapper">
        <img :src="imgSource">
      </div>
      <h1>{{ name }}</h1>
      <p>{{ company }}</p>
      <p>{{ bio }}</p>
    </div>
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
.container {
  overflow:hidden;
  border: 1px solid #e8e8e8;
  border-radius: 30%;
  display: inline-block;
  height: 380px;
  width:300px;
}
#image-wrapper{
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10%;
  margin-top: 10%;
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
</style>
