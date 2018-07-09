<template>
    <el-col :span="12">

    <el-card class="about" shadow="hover">
      <div class="description">
        <h2>{{title}}</h2>
        <p>Time: {{computedTime}}, Room Number: {{roomNumber}}</p>
      </div>
      <h2>{{description}}</h2>
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
.description{
  padding-top: 0px;
  font-size: 12px;
  text-align: left;
  margin-bottom: 15%;
}
.about{
 align-items: center;
 border-radius: 5%;
 margin: 5%;

}
a {
  color: #42b983;
}
</style>
