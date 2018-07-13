<template>
  <div class="SelectBreakout">
    <el-transfer
      v-model="selected"
      :data="data">
    </el-transfer>
  </div>
</template>

<script>
import axios from 'axios'
import _ from 'underscore';
export default {
  name: "SelectBreakout",
  data() {
  return {
    data: [],
    breakoutData: [],
    selected:[]
  }
},
computed:{
  computedData: function(){
    console.log(_.filter(this.breakoutData, s => s.session_type === "Breakout"));
    return _.filter(this.breakoutData, s => s.session_type === "Breakout");
    console.log(this.data);
    this.data.forEach(function(element) {
      console.log("heloooooo");
      if(element.session_type==="Breakout"){
        let i=0;
        this.breakoutData.push({
          key: i,
          label: element.title
        });
        console.log("successful push");
      }
    })
  }
},
mounted: function() {
  axios.get(`https://slalom-health-api-staging.herokuapp.com/api/sessions`)
   .then(response => {
     this.data=response.data;
     this.data.forEach(function(element) {
       console.log("heloooooo");
       if(element.session_type==="Breakout"){
         let i=0;
         this.breakoutData.push({
           key: i,
           label: element.title
         });
         console.log("successful push");
       }
     })
  })
   .catch(e => {
     console.log("error")
   })
},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.header{
  font-size: 30px;
}
.logo{
  float: left;
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
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
}
.buttons {
  text-align: center;
}
.form{
  width: 60%;
  margin-left: auto;
  margin-right: auto;
}
</style>
