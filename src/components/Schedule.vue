<template>
  <div>
    <h1>Schedule</h1>
    <div class="decoration"></div>
    <table>
      <tr v-for="event in scheduleData" valign="top">
        <td style="" class="time">
          <h2 class="timeHeader">{{timeFormatter(event)}}</h2>
          <p class="roomNum" v-for="session in getSessions(event)" >Room #{{session.room_num}}</p>
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
        this.scheduleData = _.sortBy(this.scheduleData, function(event){ return event.start_time});
        console.log(this.scheduleData);

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
    timeFormatter: function(event) {
      return moment(event.start_time).format("h:mm A");
    },
    getSessions(schedule){
      return _.where(this.sessions, {schedule_id: schedule.id});
    }
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
    text-align: right
}
.scheduleEvent{
  padding-left: 25px;
  padding-top: 0px;
}
table{
  border-spacing: 0;
  background-color: white;
  margin: 0 auto;
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
  margin-left: 10%;
  margin-top: 100px;
}

.decoration {
  background-color: #005aed;;
  height: 5px;
  width: 75px;
  margin-left: 10%;
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
    .time{
      padding-top:0;
      padding-bottom: 0;
      width: 25%;
    }
    p{
      font-size: 13px;
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
