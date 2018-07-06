<template>
<<<<<<< HEAD

<el-row>
  <!-- <el-row > -->
  <h1>Breakouts</h1>
  <li v-for="breakout in breakoutData" :key="breakout.id" v-if="breakout.session_type == 'Breakout'">
    <Breakout :title="breakout.title" :time="breakout.time" :roomNumber="breakout.room_num" moreInfo="www.google.com"  class = "Breakout"/>
  </li>
<!-- </el-row> -->
</el-row>
=======
  <div class="breakouts">
    <h1>List of YOUR MOM</h1>
    <el-table
      :data="tableData"
      stripe
      border>
      <el-table-column align = "center"
        prop="title"
        label="Breakout Title">
      </el-table-column>
      <el-table-column align = "center"
        prop="time"
        label="Time">
      </el-table-column>
      <el-table-column align = "center"
        prop="room_num"
        label="Room Number">
      </el-table-column>
      <el-table-column align = "center"
        prop="moreInfo"
        label="More Information">
      </el-table-column>
  </el-table>
>>>>>>> staging
</template>

<script>
import axios from 'axios'
import Breakout from "@/components/Breakout.vue";
export default {
  name: "Breakouts",
  components: {
    'Breakout':Breakout
  },
  mounted: function(){
    this.populateData();
    console.log("mounted")
  },
  data () {
    return{
      breakoutData: []
    }
  },
  methods: {
    populateData: function() {
      axios.get(`https://slalom-health-api-staging.herokuapp.com/api/sessions`)
      .then(response => {
        // JSON responses are automatically parsed.
        this.breakoutData = response.data;
      })
      .catch(e => {
        return e;
      })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.Breakout{
  display: block;
  position: relative;
}
h1 {
  text-align: center;
  font-size: 28px;
}
ul {
  list-style-type: none;
  padding: 0;
  width: 100%%;
  align-self: center;
}
li {
  display: inline-block;
  margin: 0 5% 0;

}
a {
  color: #42b983;
}
.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}
.clearfix:after {
    clear: both
}
</style>
