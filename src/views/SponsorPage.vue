<template>
<el-row>
  <NavBar></NavBar>
    <h1>Sponsors</h1>
    <h3>Description of Our Sponsors</h3>
    <div class="emailLink">
      <a href="mailto:eric.mason@slalom.com">Email Us About Becoming A Sponsor</a>
    </div>
    <el-col >
        <Sponsors :sponsorData="filteredData('platinum')" sponsorLevel="Platinum"/>
        <Sponsors :sponsorData="filteredData('low')" class="otherFlex" sponsorLevel="Other"/>
    </el-col>
</el-row>
</template>

<script>
// @ is an alias to /src
import Sponsors from "@/components/Sponsors.vue";
import NavBar from "@/components/NavBar.vue";
import _ from "underscore";
export default {
  name: "sponsorPage",
  components: {
    Sponsors,
    NavBar
  },
  data() {
    return {
      sponsorData: []
    };
  },
  mounted: function() {
    this.populateData();
  },
  methods: {
    populateData: function() {
      this.$axiosServer
        .get(`api/sponsors`)
        .then(response => {
          // JSON responses are automatically parsed.
          this.sponsorData = response.data;
        })
        .catch(e => {
          return e;
        });
    },
    filteredData(level) {
      console.log(this.sponsorData);
      return _.filter(this.sponsorData, s => s.sponsor_level === level);
    }
  }
};
</script>


<style scoped lang="less">



.btn {
  background: #3336ff;
  color: white;
  margin-left: 0px;
  // opacity: 0.7;
}
h1, h3 {
  margin-left: 10px;
}

.emailLink{
  margin-left: 10px;
}


</style>
