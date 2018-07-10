<template>
    <el-col class="sessionCard">

    <el-card class="about" shadow="hover">
      <el-col :span="2">
          <div class="image-wrapper">
            <img :src="imgSource" class="image">
          </div>
      </el-col>
      <div class="overview">
        <h2 class="boxTitle">{{title}} <span class="timeStyle">Time: {{computedTime}}, Room Number: {{roomNumber}}</span> </h2>
        <p></p>
      </div>
      <h2 class="description">{{description}}</h2>
    </el-card>
  </el-col>
</template>

<script>
import moment from 'moment'
export default {
  name: "Session",
  props: {
    title: String,
    time: String,
    roomNumber: Number,
    description: String,
    imgSource: String
  },
  computed:{
    computedTime: function(){
      return moment(this.time).format("h:mm A");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.sessionCard{
    width:50%;
  }
.overview{
  padding-top: 0px;
  text-align: left;
  margin-bottom: 5%;
}
.about{
 border-radius: 5%;
 margin: 2.5%;
 border: 0;
 background-color: transparent
}
.boxTitle{
  font-size: 28px;
  text-align: left;
}
.image-wrapper{
  width: 50px;
  height: 50px;

}
.image {
  height: 50px;
  width: 40px;
  border-radius: 5%;
  display: block;
}
.timeStyle{
  font-size: 12px;
  font-weight: normal;
}
.description{
  text-align: center;
  margin-bottom: 5%;
}

@media (max-width: 800px) {
  .boxTitle{
    font-size: 20px;
    text-align: left;
  }
  .timeStyle{
    font-size: 10px;
    font-weight: normal;
  }
  .sessionCard{
     width: 100%;
  }
  .image {
    height: 30px;
    width: 20px;
    border-radius: 5%;
    display: block;
  }
  .description{
    font-size: 15px;
  }
}
a {
  color: #42b983;
}
</style>
