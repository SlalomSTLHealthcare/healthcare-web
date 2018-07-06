<template>
  <div class="people">
    <h1>{{ msg }}</h1>
    <li v-for="item in data" :key="item.id">
      <div class="person">
        <Person :name="item.full_name" :imgSource="item.image_loc" :company="item.company" :bio="item.bio"/>
      </div>
    </li>
  </div>
</template>

<script>
import axios from 'axios'
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
    axios.get(`https://slalom-health-api-staging.herokuapp.com/api/people`)

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
.person{
  margin: 20px;
  display: block;
  position: relative;
}
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
