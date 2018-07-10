<template>

<el-row>
  <!-- <el-row > -->
  <h1>{{sessionType}}</h1>
  <li v-for="session in sessionData" :key="session.id" v-if="session.session_type == sessionType">
    <Session :title="session.title" :time="session.time" :roomNumber="session.room_num" :description="session.description"  class="session"/>
  </li>
<!-- </el-row> -->
</el-row>
</template>

<script>
import axios from "axios";
import Session from "@/components/Session.vue";
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
      sessionData: []
    };
  },
  props: {
    sessionType: String
  },
  methods: {
    populateData: function() {
      axios
        .get(`https://slalom-health-api-staging.herokuapp.com/api/sessions`)
        .then(response => {
          // JSON responses are automatically parsed.
          this.sessionData = response.data;
        })
        .catch(e => {
          return e;
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.session {
  display: block;
  position: relative;
}
h1 {
  text-align: left;
  font-size: 28px;
  padding-left: 1%;
}
ul {
  padding: 0;
}
li {
  list-style-type: none;
}
a {
  color: #42b983;
}
</style>
