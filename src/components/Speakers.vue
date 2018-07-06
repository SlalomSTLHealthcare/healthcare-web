<template>

<el-row>
  <!-- <el-row > -->
  <h1>Speakers</h1>
  <li v-for="speaker in speakerData" :key="speaker.id" v-if="speaker.session_type == 'Speaker'">
    <Speaker :title="speaker.title" :time="speaker.time" :roomNumber="speaker.room_num" moreInfo="www.google.com"  class = "Speaker"/>
  </li>
<!-- </el-row> -->
</el-row>
</template>

<script>
import axios from 'axios'
import Speaker from "@/components/Speaker.vue";
export default {
  name: "Speakers",
  components: {
    'Speaker':Speaker
  },
  mounted: function(){
    this.populateData();
    console.log("mounted")
  },
  data () {
    return{
      speakerData: []
    }
  },
  methods: {
    populateData: function() {
      axios.get(`https://slalom-health-api-staging.herokuapp.com/api/sessions`)
      .then(response => {
        // JSON responses are automatically parsed.
        this.speakerData = response.data;
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
.Speaker{
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
.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}
.clearfix:after {
    clear: both
}
</style>
