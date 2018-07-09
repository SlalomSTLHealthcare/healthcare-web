<template>
  <el-card class="event" shadow="hover">
    <h2>{{title}}</h2>
    <p>Time: {{computedTime}}</p>
    <p>Room Number: {{roomNumber}}</p>
    <a :href="moreInfo">More Information </a>
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
    moreInfo: String
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
.event{
 border-radius: 10%;
 padding: 10%;
 height: 200px;
 width: 200px;
 align-items: center;
}
a {
  color: #42b983;
}
</style>
