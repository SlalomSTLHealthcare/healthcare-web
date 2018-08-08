<template>
  <div>
    <h1>Schedule</h1>
    <div class="decoration"></div>
    <table>

      <tr v-for="event in scheduleData" valign="top">
        <td class="time">
          <h2 class="timeHeader">{{timeFormatter(event)}}</h2>
          <p class="roomNum" v-for="session in event.sessions" >Room #{{session.room_num}}</p>
        </td>
        <td class="scheduleEvent">
          <h2 class="eventHeader">{{event.title}}</h2>
          <p class="event" v-for="session in getSessions(event)" v-if="session.session_type === 'Extra'">{{session.description}}</p>
          <p class="event" v-else>{{session.title}}</p>
          <p class="endOfEntry"></p>
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
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

div{
  margin-bottom: 25px;
}
.time {
    border-right: 1px solid #b5bfbd;
    color: #b5bfbd;
    padding-right: 10px;
    text-align: right;
}
.scheduleEvent{
  padding-left: 25px;
  padding-top: 0px;
}
table{
  border-spacing: 0;
  background-color: white;
  margin: 4% 5.3%;
  padding: 5% 20%;
}
.eventHeader{
  color: #162565;
}
.timeHeader{
  color: #706e6b;
}
h1 {
  font-size: 40px;
  font-weight: lighter;
  margin-left: 5.3%;
  margin-bottom: 16px;
}

.decoration {
  background-color: #005aed;;
  height: 5px;
  width: 75px;
  margin-left: 5.3%;
}

.roomNum, .timeHeader, .event, .eventHeader {
  margin: 2px;
}
.endOfEntry{
  padding-bottom: 3px;
}
@media only screen and (max-width:349px){
    h2 {
        font-size: 15px;
    }
    .scheduleEvent{
      padding-top:0;
      padding-bottom:0;
      padding-left: 15px;
      padding-right: 10px;
      }
    table{
      border-spacing: 0;
      background-color: white;
      margin: 4% 0%;
      padding: 5% 0%;
    }
    .time{
      padding-top:0;
      padding-bottom: 0;
      width: 25%;
    }
    p{
      font-size: 13px;
    }
    .event{
      padding: 15px 0px;
    }
}
@media only screen and (min-width: 350px) and (max-width: 480px){
    body{
      padding:0;
    }
    h2 {
        font-size: 18px;
    }
    .scheduleEvent{
      padding-top:0;
      padding-bottom:0;
      padding-left: 15px;
      padding-right: 10px;
    }
    table{
      border-spacing: 0;
      background-color: white;
      margin: 4% 5.3%;
      padding: 5% 0%;
    }
    .time{
      padding-top:0;
      padding-bottom: 0;
      width: 25%;
    }
    p{
      font-size: 15px;
    }
}
@media only screen and (min-width: 481px) and (max-width: 1024px) {
  body{
    padding:0;
  }
  h2 {
      font-size: 25px;
  }
  table{
    border-spacing: 0;
    background-color: white;
    margin: 4% 5.3%;
    padding: 5% 10%;
  }
  .scheduleEvent{
    padding-top:0;
    padding-bottom:0;
    padding-left: 15px;
  }
  .time{
    width: 25%;
  }
}
</style>
