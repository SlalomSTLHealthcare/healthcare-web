<template>

<el-row>
  <!-- <el-row > -->
  <h1>{{sessionType}} Sessions</h1>
  <el-row class="session" v-if="sessionType === 'Breakout'">
    <li v-for="session in sessionData" :key="session.id" v-if="session.session_type == sessionType" >
      <Session :sessionType="sessionType" :title="session.title" :time="session.time" :roomNumber="session.room_num" :description="session.description" :imgSource="session.image_loc" :maxCapacity="session.max_capacity"
      :signedUp="computeSignedUp(session.id)"/>
    </li>
  </el-row>
  <el-row class="session"v-else="sessionType === 'Panel'">
    <el-card shadow="hover" class="panelCard" v-for="session in sessionData" v-if="session.session_type == sessionType">
        <div class="overview">
          <h2 class="boxTitle">{{session.title}}</h2>
          <div class="images">
            <!-- <img src="../assets/someperson.png" class="image"> -->
          </div>
          <span class="timeStyle">Time: {{computedTime(session.time)}} &mdash; Room Number: {{session.room_num}}</span>
        </div>
      <p class="description">{{session.description}}</p>
    </el-card>
  </el-row>
</el-row>
</template>

<script>
import Session from '@/components/Session.vue';
import moment from 'moment'
import _ from 'underscore';
export default {
  name: "Sessions",
  components: {
    Session: Session
  },
  mounted: function() {
    this.populateData();
  },
  data() {
    return {
      sessionData: [],
      sessionAttendeeData: []
    };
  },
  props: {
    sessionType: String
  },
  methods: {
    computedTime: function(time){
      return moment(time).format("h:mm A");
    },
    populateData: function() {
      this.$axiosServer
        .get(`api/sessions`)
        .then(response => {
          // JSON responses are automatically parsed.
          this.sessionData = response.data;
        })
        .catch(e => {
          return e;
        });
      this.$axiosServer
        .get(`api/session_attendees`)
        .then(response => {
          // JSON responses are automatically parsed.
          this.sessionAttendeeData = response.data;
        })
        .catch(e => {
          return e;
        });
    },
    computeSignedUp: function(id){
      return _.filter(this.sessionAttendeeData, s => s.session_id === id).length;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.session {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  padding: 0;
}
h1 {
  font-size: 30px;
  // margin-left: 6%;
  margin: 30px 0 10px;
  color: #fff;
  font-weight: 100;
}
ul {
  padding: 0;
}
li {
  list-style-type: none;
  margin: 20px 0;
  width: 100%;
}



h2 {
    font-weight: 400;
    margin-bottom: 6px;
}
h4 {
    font-weight: 300;
    margin-bottom: 0;
    margin-top: 10px;
}
.image {
  height: 40px;
  width: 40px;
  margin-right: 10px;
  border-radius: 100px;
}
.timeStyle{
  font-size: 14px;
  font-weight: normal;
  font-style: italic;
}
.panelCard{
  width: 45%;
}
a {
  color: #42b983;
}

.boxTitle{
    margin-top: 0;
}


@media(min-width: 1000px){
  li{
    width: 45%;
    margin: 20px 40px 20px 0;
  }
}
a {
  color: #42b983;
}
</style>
