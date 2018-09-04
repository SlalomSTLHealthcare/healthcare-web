<template>
  <div>
    <h1>Schedule</h1>
    <div class="decoration"></div>
    <div class="subheader">Check out the details of our full one-day conference below. The morning will be a mix of our guest keynote speaker, Allison Massari and a host of panelist who are regarded as thought-leaders within the St. Louis healthcare community. As we transition into the afternoon, guest will get a chance to tackle real issues in our community, by working in teams in order to come up with viable solutions for a better St. Louis.</div>
    <table>
      <tr v-for="event in scheduleData" valign="top">
        <td class="scheduleEvent">
          <h3 class="timeHeader">{{timeFormatter(event)}}</h3>
          <h3 class="eventHeader">{{event.title}}</h3>
          <p class="event" v-if="getExtra(event)">{{getExtra(event).description}}<br><em class="roomNum">{{getExtra(event).room_num}}</em></p>
          <el-collapse style="margin-top: 10px;" :accordion="true" v-if="event.sessions.length > 0 && event.sessions[0].session_type !== 'Extra'">
            <el-collapse-item v-if="session.session_type !== 'Extra'" :key="session.id" v-for="session in event.sessions" :title="session.title + ' - Room #' + session.room_num" :name="session.id">
              {{session.description}}
            </el-collapse-item>
          </el-collapse>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import moment from 'moment'
import _ from 'underscore'
import axios from 'axios';
export default {
  name: "Schedule",
  mounted: function(){
    var self = this;
    axios.all([this.populateData(),this.populateSessions()])
      .then(axios.spread(function (schedule, sessions){
        self.scheduleData = schedule.data;
        self.sessions = sessions.data;
        self.scheduleData = _.sortBy(self.scheduleData, function(event){ return event.start_time});
        self.scheduleData.forEach(function(event){
          event.sessions = self.getSessions(event);
        });
      }))
    .catch(e => {
      console.log(e);
      return e;
    });
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
      return this.$axiosServer.get(`api/schedules`)
    },
    populateSessions: function(){
      return this.$axiosServer.get(`api/sessions`);
    },
    timeFormatter: function(event) {
      return moment(event.start_time).format("h:mm A");
    },
    getSessions(schedule){
      return _.where(this.sessions, {schedule_id: schedule.id});
    },
    getExtra(schedule){
      return _.findWhere(this.sessions, {schedule_id: schedule.id, session_type: 'Extra'});
    },
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '../global-variables';

.subheader {
  font-size: 16px;
  font-weight: 100;
  color: #fff;
  margin-top: 1rem;
}
.time {
    border-right: 1px solid #b5bfbd;
    color: #b5bfbd;
    padding-right: 10px;
    text-align: right;
    width: 20%;
}
.scheduleEvent{
  padding-left: 25px;
  padding-top: 0px;
}
table{
  border-spacing: 0;
  background-color: white;
  margin: 4% 0;
  padding: 5% 4%;
  width: 100%;
  border-radius: 4px;
}
.eventHeader{
  color: @primary;
  margin: 0 0 6px;
}
.timeHeader{
  color: #333;
  font-size: 22px;
  margin-bottom: 6px;
}
h3 {
    font-weight: 400;
}
h1 {
  font-size: 40px;
  font-weight: lighter;
  color: #fff;
}

p {
    font-weight: 300;
}

.decoration {
  background-color: @secondary;
  height: 5px;
  width: 75px;
}

.bigger {
  line-height: 49px;
  margin-bottom: 0;
}

.roomNum {
  line-height: 36px;
}

.event {
  margin-top: 2px;
}

.roomNum:last-child {
    margin-bottom: 20px;
}
.endOfEntry{
  padding-bottom: 3px;
}
</style>
