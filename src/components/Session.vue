<template>
    <el-card shadow="hover" class="sessionCard">
      <div class="overview">
        <h2 class="boxTitle">{{title}}</h2>
        <span class="timeStyle">Time: {{computedTime}} &mdash; Room Number: {{roomNumber}}</span>
      </div>
      <div v-if="sessionType === 'Breakout'">
      <h4 class="space" v-if="computedSpace > 1">Spaces Available: <strong>{{computedSpace}}</strong></h4>
      <h4 class="space" v-else-if="computedSpace == 1">Space Available: <strong>{{computedSpace}}</strong></h4>
      <h4 class="space" v-else>No Space Available!</h4>
    </div>
    <p class="description">{{description}}</p>
    </el-card>
</template>

<script>
import moment from 'moment'
export default {
  name: "Session",
  props: {
    sessionType: String,
    title: String,
    time: String,
    roomNumber: Number,
    description: String,
    imgSource: String,
    maxCapacity: Number,
    signedUp: Number
  },
  computed:{
    computedTime: function(){
      return moment(this.time).format("h:mm A");
    },
    computedSpace: function(){
      return this.maxCapacity - this.signedUp;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

h2 {
    font-weight: 400;
    margin-bottom: 6px;
}
h4 {
    font-weight: 300;
    margin-bottom: 0;
    margin-top: 10px;
}
.image {
  height: 50px;
  width: 40px;
  border-radius: 5%;
}
.timeStyle{
  font-size: 14px;
  font-weight: normal;
  font-style: italic;
}
.description{
    min-height: 57px;
  // text-align: center;
}
.sessionCard{
  width: 100%;
  // height: 300px;
}
a {
  color: #42b983;
}

.boxTitle{
    margin-top: 0;
}

@media (max-width: 800px) {
  .boxTitle{
    font-size: 20px;
    text-align: left;
  }
  .timeStyle{
    font-size: 10px;
  }
  .sessionCard{
     // width: 100vw;
     height: 250px;
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

</style>
