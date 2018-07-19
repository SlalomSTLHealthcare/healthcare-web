<template>
  <div class="SelectBreakout">
    <p>{{timeSlot}}</p>
    <div class="breakout-button">
    <el-button plain round @click="show = !show">Click here for breakout info.</el-button>
  </div>
    <el-collapse-transition>
    <div class="breakout-info" v-show="show">
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item v-for="(breakout,index) in computedData" :title="breakout.label" :name="index">
        <div>{{breakout.description}}</div>
      </el-collapse-item>
    </el-collapse>
  </div>
</el-collapse-transition>
    <el-transfer
    :titles="['All Breakouts', 'Ranked Breakouts']"
    :target-order="'push'"
    v-model="selected"
    @change="handleChange"
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
      show: false,
      breakoutData: [],
      selected: [],
      activeName: '1'
    }
  },
  mounted: function() {
    this.$axiosServer.get(`api/sessions`)
     .then(response => {
       this.breakoutData = response.data
    })
     .catch(e => {
       console.log(e)
     })
  },
  props: {
    timeSlot: String
  },
  computed:{
    computedData() {
      return _.map(_.filter(this.breakoutData, s => s.session_type === 'Breakout'), s => ({
        key: s.id,
        label: s.title,
        description: s.description
      }))
    }
  },
  methods: {
  handleChange() {
    this.$emit('selected-data', this.selected)
  }
}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
p {
  font-size: 15px;
  padding-left: 20px;
  font-weight: bold;
}
.breakout-info{
  padding: 30px;
}
.breakout-button{
  padding: 20px;
}
</style>
