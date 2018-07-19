<template>
<el-row>
  <h1>Schedule</h1>
  <el-table
        :data="scheduleData"
        ref="scheduleTable"
        stripe
        :default-sort = "{prop:'start_time', order: 'ascending'}"
        :row-class-name="tableRowSetter"
        @row-click="changeExpansion"
        @expand-change="setCurrentExpandedRow"
        style="width: 100%"
        >
        <el-table-column
          prop="start_time"
          width="90"
          class="test"
          :formatter="timeFormatter">
        </el-table-column>
        <el-table-column
          width="50"
          type="expand">
          <template slot-scope="props">
            <p v-for="session in getSessions(props.row)" v-if="session.session_type == 'Extra'">{{session.description}}, Room Number: {{session.room_num}}</p>
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
      console.log(val);
      var isFound = false;
      this.currentExpanded.forEach(function(row){
        if(row === val){
          console.log("match");
          isFound = true;
        }
      });
      if(isFound){
        this.$refs.scheduleTable.toggleRowExpansion(val,false);
      }else{
        this.$refs.scheduleTable.toggleRowExpansion(val,true);
      }

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
      var attachedSessions = [];
      this.sessions.forEach(function(element){
        if(element.schedule_id === schedule.id){
          attachedSessions.push(element);
        }
      });
      return attachedSessions;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

.el-table{
  text-align: center;
  cursor: pointer;
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
  text-align: center;
  // align with table body
  margin-left: 75px;
  font-size: 28px;
}
</style>
