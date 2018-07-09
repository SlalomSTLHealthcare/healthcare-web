<template>

<el-row>
  <!-- <el-row > -->
  <h1>{{sessionType}}</h1>
  <li v-for="session in sessionData" :key="session.id" v-if="session.session_type == sessionType">
    <Session :title="session.title" :time="session.time" :roomNumber="session.room_num" moreInfo="www.google.com"  class="session"/>
  </li>
<!-- </el-row> -->
</el-row>
</template>

<script>
import axios from 'axios'
import Session from "@/components/Session.vue";
export default {
  name: "Sessions",
  components: {
    'Session': Session
  },
  mounted: function(){
    this.populateData();
  },
  data () {
    return{
      sessionData: []
    }
  },
  props: {
    sessionType: String
  },
  methods: {
    populateData: function() {
      axios.get(`https://slalom-health-api-staging.herokuapp.com/api/sessions`)
      .then(response => {
        // JSON responses are automatically parsed.
        this.sessionData = response.data;
      })
      .catch(e => {
        return e;
      })
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
h1 {
  text-align: center;
  font-size: 28px;
}
ul {
  list-style-type: none;
  padding: 0;
  width: 100%%;
  align-self: center;
}
li {
  display: inline-block;
  margin: 0 5% 0;

}
a {
  color: #42b983;
}
</style>
