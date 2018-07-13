<template>
    <el-card shadow="hover" class="sessionCard">
      <el-col>
            <img :src="imgSource" class="image">
      </el-col>
      <div class="overview">
        <h2 class="boxTitle">{{title}} <span class="timeStyle">Time: {{computedTime}}, Room Number: {{roomNumber}}</span> </h2>
        <p></p>
      </div>
      <h2 class="description">{{description}}</h2>
    </el-card>
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
.image {
  height: 50px;
  width: 40px;
  border-radius: 5%;

}
.timeStyle{
  font-size: 12px;
  font-weight: normal;
}
.description{
  text-align: center;
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
     height: 200px;
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
