<template>

<el-row>
  <!-- <el-row > -->
  <h1>{{sessionType}} Sessions</h1>
  <el-row class="session">
    <li v-for="session in sessionData" :key="session.id" v-if="session.session_type == sessionType" >
      <Session :sessionType="sessionType" :title="session.title" :time="session.time" :roomNumber="session.room_num" :description="session.description" :imgSource="session.image_loc" :maxCapacity="session.max_capacity"
      :signedUp="computeSignedUp(session.id)"/>
    </li>
  </el-row>
</el-row>
</template>

<script>
import Session from '@/components/Session.vue';
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
  padding: 0 6%;
}
h1 {
  font-size: 30px;
  margin-left: 6%;
  margin-bottom: 16px;
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
