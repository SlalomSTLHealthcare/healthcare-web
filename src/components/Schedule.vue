<template>
<el-row>
  <h1>Schedule</h1>
  <el-table
        :data="scheduleData"
        ref="scheduleTable"
        stripe
        :default-sort = "{prop:'start_time', order: 'ascending'}"
        @row-click="changeExpansion"
        @expand-change="setCurrentExpandedRow"
        style="width: 100%"
        >
        <el-table-column
          prop="start_time"
          width="90"

          :formatter="timeFormatter">
        </el-table-column>
        <el-table-column
          width="50"
          class-name="expandedCol"
          type="expand">
          <template slot-scope="props">
            <p v-for="session in getSessions(props.row)" v-if="session.session_type === 'Extra'">{{session.description}}, Room Number: {{session.room_num}}</p>
            <p v-else>{{session.title}}, Room Number: {{session.room_num}}</p>
          </template>
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
import _ from 'underscore'
export default {
  name: "Schedule",
  mounted: function(){
    this.populateData();
  },
  data () {
    return{
      scheduleData: [],
      sessions: [],
      currentExpanded: []
    }
  },
  methods: {
    changeExpansion(val){
      this.$refs.scheduleTable.toggleRowExpansion(val, !(this.currentExpanded.indexOf(val) > -1));
    },
    setCurrentExpandedRow(val,expandedRows){
      this.currentExpanded = expandedRows;
    },
    tableRowSetter(){
      return 'tableRow';
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
      });

      this.$axiosServer.get(`api/sessions`)
      .then(response => {
        // JSON responses are automatically parsed.
        this.sessions = response.data;
      })
      .catch(e => {
        console.log("error");
        return e;
      });

    },
    timeFormatter: function(row,column) {
      return moment(row.start_time).format("h:mm A");
    },
    getSessions(schedule){
      return _.where(this.sessions, {schedule_id: schedule.id});
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

.el-table{
  text-align: center;
  cursor: pointer;
  margin-bottom: 25px;
}

.expandedCol{
  cursor: default;
}



.session{
  display: block;
  position: relative;
}
label{
  font-weight: normal;
}
p{
  text-align: left;
}
h1 {
  padding-top: 100px;
  text-align: center;
  // align with table body
  margin-left: 140px;
  font-size: 28px;
}
</style>
