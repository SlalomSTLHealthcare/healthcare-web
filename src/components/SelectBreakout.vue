<template>
  <div class="SelectBreakout">
    <p>{{timeSlot}}</p>
    <el-transfer
    :titles="['All Breakouts', 'Ranked Breakouts']"
    :target-order="push"
    v-model="value2"
    :data="data2">
      <!-- v-model="value"
      :data="data"> -->
    </el-transfer>
  </div>
</template>

<script>
import axios from 'axios'
import _ from 'underscore';
export default {
  name: "SelectBreakout",
  data() {
  const generateData2 = _ => {
    const data = [];
    const breakouts = ['Chronic Disease/High Flier', 'Healthy People and End of Life', 'Acute Care', 'Development ', 'Data for Health/Caring for the Whole Patien', 'Security of Data', 'Research ', 'Partnerships/M&A/Business Models'];
    // const initials = ['CA', 'IL', 'MD', 'TX', 'FL', 'CO', 'CT'];
    breakouts.forEach((city, index) => {
      data.push({
        label: city,
        key: index,
        // initial: initials[index]
      });
    });
    return data;
  };
  return {
    data2: generateData2(),
    value2: [],
    filterMethod(query, item) {
      return item.initial.toLowerCase().indexOf(query.toLowerCase()) > -1;
    }
  };
},
//   data() {
//     const generateData = _ => {
//       const data=[];
//       const breakouts = ['Chronic Disease/High Flier', 'Healthy People and End of Life', 'Acute Care', 'Development ', 'Data for Health/Caring for the Whole Patien', 'Security of Data', 'Research ', 'Partnerships/M&A/Business Models'];
//       breakouts.forEach((breakout, index) => {
//         data.push({
//           label: breakout,
//           key: index
//         });
//       });
//       return data;
//     };
//   return {
//     data: generateData(),
//     value: []
//   }
// },
props: {
  timeSlot: String
}
// computed:{
//   computedData: function(){
//     console.log(_.filter(this.breakoutData, s => s.session_type === "Breakout"));
//     return _.filter(this.breakoutData, s => s.session_type === "Breakout");
//     console.log(this.data);
//     this.data.forEach(function(element) {
//       console.log("heloooooo");
//       if(element.session_type==="Breakout"){
//         let i=0;
//         this.breakoutData.push({
//           key: i,
//           label: element.title
//         });
//         console.log("successful push");
//       }
//     })
//   }
// },
// mounted: function() {
//   axios.get(`https://slalom-health-api-staging.herokuapp.com/api/sessions`)
//    .then(response => {
//      this.data=response.data;
//      this.data.forEach(function(element) {
//        console.log("heloooooo");
//        if(element.session_type==="Breakout"){
//          let i=0;
//          this.breakoutData.push({
//            key: i,
//            label: element.title
//          });
//          console.log("successful push");
//        }
//      })
//   })
//    .catch(e => {
//      console.log("error")
//    })
// }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
p {
  font-size: 15px;
  padding-left: 20px;
}
</style>
