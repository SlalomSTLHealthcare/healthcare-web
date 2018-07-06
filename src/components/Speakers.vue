<template>
  <div class="speakers">
    <h1>List of Speakers</h1>
    <el-table
      :data="tableData"
      stripe
      border>
      <el-table-column align = "center"
        prop="title"
        label="Speaker Title">
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
</template>

<script>
import axios from 'axios'
import moment from 'moment'
export default {
  name: "Speakers",
  mounted: function(){
    this.populateData()
  },
  data () {
    return{
      tableData: []
    }
  },
  methods: {
    populateData: function() {
      axios.get(`https://slalom-health-api-staging.herokuapp.com/api/sessions`)
      .then(response => {
        // JSON responses are automatically parsed.
        for(var i = 0; i < response.data.length; i++){
          if(response.data[i].session_type == "Speaker"){
            response.data[i].time = moment(response.data[i].time).format("h:mm A");
            response.data[i].moreInfo = `https://google.com`;
            this.tableData.push(response.data[i]);
          }
        }
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
</style>
