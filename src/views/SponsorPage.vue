<template>
  <div class="sponsor">
<el-row>
    <h1>Sponsors</h1>
    <div class="decoration"></div>
    <el-col >
        <Sponsors :sponsorData="filteredData('platinum')" sponsorLevel="Platinum"/>
        <Sponsors :sponsorData="filteredData('low')" class="otherFlex" sponsorLevel="Other"/>
    </el-col>
</el-row>
</div>
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
@import '../global-variables';
.sponsor{
  padding: 30px 50px;
  // background-color: #f7f7f7;
}
.btn {
  background: #3336ff;
  color: white;
  margin-left: 0px;
  // opacity: 0.7;
}
.decoration {
  background-color: @secondary;
  height: 5px;
  width: 75px;
  margin-left: 60px;
}
h3 {
  margin-left: 10px;
}
h1 {
    color: #fff;
  font-size: 40px;
  font-weight: lighter;
  margin-left: 60px;
  margin-bottom: 16px;
}

.emailLink{
  margin-left: 10px;
}


</style>
