<template>

<el-row>
  <!-- <el-row > -->
  <h1>Panels</h1>
  <li v-for="panel in panelData" :key="panel.id" v-if="panel.session_type == 'Panel'">
    <Panel :title="panel.title" :time="panel.time" :roomNumber="panel.room_num" moreInfo="www.google.com"  class = "Panel"/>
  </li>
<!-- </el-row> -->
</el-row>
</template>

<script>
import axios from 'axios'
import Panel from "@/components/Panel.vue";
export default {
  name: "Panels",
  components: {
    'Panel':Panel
  },
  mounted: function(){
    this.populateData();
    console.log("mounted")
  },
  data () {
    return{
      panelData: []
    }
  },
  methods: {
    populateData: function() {
      axios.get(`https://slalom-health-api-staging.herokuapp.com/api/sessions`)
      .then(response => {
        // JSON responses are automatically parsed.
        this.panelData = response.data;
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
.Panel{
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
