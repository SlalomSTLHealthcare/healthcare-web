<template>
  <div class="people">

    <h1>Speakers</h1>
    <div class="decoration"></div>

    <ul class="people-list">
      <li v-for="item in data" :key="item.id">
        <Person :name="item.full_name" :imgSource="item.image_loc" :company="item.company" :bio="item.bio" :twitter="item.twitter" :linkedin="item.linkedin"/>
      </li>
    </ul>
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
  font-weight: lighter;
  margin-left: 10%;
}
.decoration {
  background-color: #005aed;;
  height: 5px;
  width: 75px;
  margin-left: 10%;
}
ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
li {
  list-style-type: none;
  margin: 2%;
}
a {
  color: #42b983;
}
</style>
