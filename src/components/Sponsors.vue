<template>
<el-row>
    <el-card class="titledesign" shadow="never">
        <h2>{{sponsorLevel}} level</h2>
    </el-card>
    <li v-for="sponsor in sponsorData" :key="sponsor.id" v-if="sponsor.sponsor_level === sponsorLevel">
        <Sponsor :image="sponsor.image_loc" :title="sponsor.title" :name="sponsor.name" :description="sponsor.description" :sponsorLevel="sponsor.sponsor_level" class="sponsor"/>
    </li>
</el-row>
</template>

<script>
import axios from "axios";
import Sponsor from "@/components/Sponsor.vue";
export default {
  name: "Sponsors",
  components: {
    Sponsor: Sponsor
  },
  mounted: function() {
    this.populateData();
  },
  data() {
    return {
      sponsorData: []
    };
  },
  props: {
    sponsorLevel: String
  },
  methods: {
    populateData: function() {
      axios
        .get(`https://slalom-health-api-staging.herokuapp.com/api/sponsors`)
        .then(response => {
          // JSON responses are automatically parsed.
          this.sponsorData = response.data;
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
.sponsor {
  display: block;
  position: relative;
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
.el-card {
  width: 19.15%;
}
.el-card h2 {
  text-align: center;
}
.titledesign {
  margin-bottom: 0.5%;
}
</style>
