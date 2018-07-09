<template>
    <el-col :span="12">

    <el-card class="about" shadow="hover">
      <div class="overview">
        <h2>{{title}}</h2>
        <p>Time: {{computedTime}}, Room Number: {{roomNumber}}</p>
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
.overview{
  padding-top: 0px;
  font-size: 12px;
  text-align: left;
  margin-bottom: 15%;
}
.about{
 border-radius: 5%;
 margin: 2.5%;

}
.description{
  text-align: center;
  margin-bottom: 5%;
}
a {
  color: #42b983;
}
</style>
