<template>
  <div class="SelectBreakout">
    <p>{{timeSlot}}</p>
    <div class="breakout-button">
      <el-button plain round @click="show = !show">Click here for breakout info.</el-button>
    </div>
    <el-collapse-transition>
    <div class="breakout-info" v-show="show">
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item v-for="(breakout,index) in computedData" :title="breakout.label" :name="index">
        <div>{{breakout.description}}</div>
      </el-collapse-item>
    </el-collapse>
  </div>
</el-collapse-transition>
    <h4 v-if="onWaitlist === true" style="color: #ff0000">Waitlist</h4>
    <el-select
  :value="getBreakout" @input="resetWaitlist">
      <el-option v-for="item in computedRankingData"
        :key = "item.key"
        :label = "item.label"
        :value = "item.key"
        :waitlist = "item.waitlist">
        <span style="float: left">{{ item.label }}</span>
        <span style="float: right; color: #ff0000" v-if="item.waitlist === true">Waitlist</span>
      </el-option>
    </el-select>
    <div class="SelectBreakout" v-if="computedSelect === true">
      <h4 style="color: #ff0000" v-if="getBreakoutWait === ''">You have signed up for a waitlisted Breakout, please register for another session as a backup </h4>
      <h4 v-else>Backup Breakout Session for {{ timeSlot }} </h4>
    <el-select
    :value="getBreakoutWait" @input="updateBreakoutsWaitlist">
      <el-option v-for="item in computedRankingDataNoWaitlist"
        :key = "item.key"
        :label = "item.label"
        :value = "item.key"
        :waitlist = "item.waitlist">
        <span style="float: left">{{ item.label }}</span>
        <span style="float: right; color: #ff0000" v-if="item.waitlist === true">Waitlist</span>
      </el-option>
    </el-select>
  </div>

</div>
</template>

<script>
import _ from 'underscore';
import { mapState } from 'vuex';
export default {
  name: "SelectBreakout",
  data() {
    return {
      show: false,
      breakoutData: [],
      sessionAttendeeData: [],
      activeName: '1'
    }
  },
  props: {
    timeSlot: String,
    type: {
      defualt: "register",
      type: String
    }
  },
  mounted: function() {
    this.$axiosServer.get(`api/sessions`)
     .then(response => {
       this.breakoutData = response.data
    })
     .catch(e => {
       console.log(e)
     });
    this.$axiosServer.get(`api/session_attendees`)
      .then(response => {
        this.sessionAttendeeData = response.data
      })
      .catch(e => {
        console.log(e)
      });
  },
  computed: mapState({
    computedRankingData() {
      return _.map(_.filter(this.breakoutData, s => s.session_type === 'Breakout'), s => ({
        key: s.id,
        label: s.title,
        waitlist: this.isWaitlist(s.id, s.max_capacity)
      }))
    },
    computedRankingDataNoWaitlist() {
      return _.map(_.filter(this.breakoutData, s => s.session_type === 'Breakout' && !this.isWaitlist(s.id, s.max_capacity)), s => ({
        key: s.id,
        label: s.title,
      }))
    },
    computedData() {
      return _.map(_.filter(this.breakoutData, s => s.session_type === 'Breakout'), s => ({
        key: s.id,
        label: s.title,
        description: s.description
      }))
    },
    computedSelect(){
      var session = _.find(this.breakoutData, s => s.id === this.getBreakout);
      return (session != undefined ? (session.max_capacity - _.filter(this.sessionAttendeeData, s => s.session_id === session.id).length <= 0) : false) ;
    },
    getBreakout(state){
      return this.timeSlot === '10:15 am' ? state.breakoutOne : state.breakoutTwo;
    },
    getBreakoutWait(state){
      return this.timeSlot === '10:15 am' ? state.breakoutOneWaitlist : state.breakoutTwoWaitlist;
    },
    getAttendeeId(state){
      return state.attendeeId;
    },
    onWaitlist(){
      if(this.type === 'profile'){
        var sortedSessionAttendee = _.sortBy(_.filter(this.sessionAttendeeData, s => s.session_id === this.getBreakout), function(session){return session.date_signedup});
        var session = _.find(sortedSessionAttendee, s => s.attendee_id === this.getAttendeeId);
        return (session != undefined ? _.indexOf(sortedSessionAttendee, session) >= session.session_max_capacity : false);
      }
      return false;
    }
  }),
  methods: {
  isWaitlist(id, maxCapacity){
    return maxCapacity - _.filter(this.sessionAttendeeData, s => s.session_id === id).length <= 0;
  },
  resetWaitlist(value){
    this.updateBreakoutsWaitlist('');
    this.updateBreakouts(value);
  },
  updateBreakouts(value){
    if(this.timeSlot == '10:15 am'){
      this.$store.dispatch('setBreakout', {
        breakout:'setBreakoutOne',
        id: value
      });
    }else{
      this.$store.dispatch('setBreakout', {
        breakout:'setBreakoutTwo',
        id: value
      });
    }
  },
  updateBreakoutsWaitlist(value){
    if(this.timeSlot == '10:15 am'){
      this.$store.dispatch('setBreakout', {
        breakout:'setBreakoutOneWait',
        id: value
      });
    }else{
      this.$store.dispatch('setBreakout', {
        breakout:'setBreakoutTwoWait',
        id: value
      });
    }
  },

}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
p {
  font-size: 15px;
  padding-left: 20px;
  font-weight: bold;
}
.breakout-info{
  padding: 30px;
}
.breakout-button{
  padding-bottom: 20px;
  text-align: left;
}
</style>
