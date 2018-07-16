<template>
  <div class="SelectBreakout">
    <p>{{timeSlot}}</p>
    <el-transfer
    :titles="['All Breakouts', 'Ranked Breakouts']"
    :target-order="'push'"
    v-model="value2"
    :data="computedData">
      <!-- v-model="value"
      :data="data"> -->
    </el-transfer>
  </div>
</template>

<script>
import _ from 'underscore';
export default {
  name: "SelectBreakout",
  data() {
    return {
      breakoutData: [],
      value2: []
    }
  },
  mounted: function() {
    this.$axiosServer.get(`api/sessions`)
     .then(response => {
       this.breakoutData = response.data
    })
     .catch(e => {
       console.log("error")
     })
  },
  props: {
    timeSlot: String
  },
  computed:{
    computedData() {
      return _.map(_.filter(this.breakoutData, s => s.session_type === 'Breakout'), s => ({
        key: s.id,
        label: s.title
      }))
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
p {
  font-size: 15px;
  padding-left: 20px;
}
</style>
