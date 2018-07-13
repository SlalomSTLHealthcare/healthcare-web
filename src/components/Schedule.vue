<template>
<el-row>
  <h1>Schedule</h1>
  <el-table
        :data="scheduleData"
        border
        stripe
        :default-sort = "{prop:'start_time', order: 'ascending'}"
        style="width: 100%">
        <el-table-column
          prop="start_time"
          width="90"
          :formatter="timeFormatter">
        </el-table-column>
        <el-table-column
          prop="title"
          label="Event"
          header-align = "center">
        </el-table-column>
      </el-table>
</el-row>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
export default {
  name: "Schedule",
  mounted: function(){
    this.populateData();
  },
  data () {
    return{
      scheduleData: []
    }
  },
  methods: {
    populateData: function() {
      axios.get(`https://slalom-health-api-staging.herokuapp.com/api/schedules`)
      .then(response => {
        // JSON responses are automatically parsed.
        this.scheduleData = response.data;
      })
      .catch(e => {
        console.log("error");
        return e;
      })
    },
    timeFormatter: function(row,column) {
      return moment(row.start_time).format("h:mm A");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.session{
  display: block;
  position: relative;
}
label{
  text-align: right;
  font-weight: normal;
}
h1 {
  text-align: center;

  font-size: 28px;
  padding-left: 4%;
}
</style>