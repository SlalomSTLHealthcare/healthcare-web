<template>
<el-row>
  <h1>Schedule</h1>
  <el-table
        :data="scheduleData"
        border
        stripe
        class="events"
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
          header-align="center"
          >
        </el-table-column>
      </el-table>
</el-row>
</template>

<script>
import moment from 'moment'
export default {
  name: "Schedule",
  mounted: function(){
    this.populateData();
    this.logoutTest();
  },
  data () {
    return{
      scheduleData: []
    }
  },
  methods: {
    logoutTest(){
      if(this.$session.exists()){
        console.log(this.$session.get('username'));
        this.$session.destroy();
        console.log(this.$session.exists());
      }
    },
    populateData: function() {
      this.$axiosServer.get(`api/schedules`)
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
.events{
  text-align: center;
}
.session{
  display: block;
  position: relative;
}
label{
  font-weight: normal;
}
h1 {
  text-align: center;
  // align with table body
  margin-left: 75px;
  font-size: 28px;
}
</style>
