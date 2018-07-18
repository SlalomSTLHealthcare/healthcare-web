<template>
  <div class="people">

    <h1>The People Involved</h1>
    <h2>Here's a list of people.</h2>
    <li v-for="item in data" :key="item.id">
      <div class="person">
        <Person :name="item.full_name" :imgSource="item.image_loc" :company="item.company" :bio="item.bio" :twitter="item.twitter" :linkedin="item.linkedin"/>
      </div>
    </li>
  </div>
</template>

<script>
import Person from "./Person.vue";
export default {
  name: "People",
  components: {
    'Person': Person
  },
  data() {
    return {
      data: "Original data message"
    };
  },
  mounted: function() {
    this.$axiosServer.get(`api/people`)

     .then(response => {
     // JSON responses are automatically parsed.
       this.data = response.data
       console.log(this.data)
       console.log(response.data)
     })
     .catch(e => {
       console.log("error")
     })
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h1 {
  font-size: 40px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 5% 5%;
  list-style-type: none;
}
a {
  color: #42b983;
}
</style>
