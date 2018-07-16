<template>
  <div class="hello">
    <el-button @click="testCall">HELLO</el-button>
    <h1> here is your data: {{ dataMessage }}</h1>
    <p>
      whaddup
      <a href="https://cli.vuejs.org" target="_blank">vue-cli documentation</a>.
    </p>
</template>

<script>
export default {
  name: "HelloWorld",
  data () {
    return{
      dataMessage: "Original data message"
    }
  },
  props: {
    msg: String
  },
  methods: {
    testCall: function() {
      this.$axiosServer.get(`api/people`)
       .then(response => {
       // JSON responses are automatically parsed.
         this.dataMessage = response.data[0].full_name
       })
       .catch(e => {
         console.log("error")
       })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
