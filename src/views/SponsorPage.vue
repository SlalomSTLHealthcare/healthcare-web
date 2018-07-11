<template>
<el-col>
    <el-row>
        <el-card class="header" shadow="never">
            <h1>Sponsor Page</h1>
        </el-card>
    </el-row>
    <el-row>
        <el-card class="desc" shadow="never">
            <h3>Description about the page.</h3>
        </el-card>
    </el-row>
    <el-row class="btn">
        <el-button>
            Sponsor Email
        </el-button>
    </el-row>
    <el-row>
        <Sponsors :sponsors="filteredData('platinum')" sponsorLevel="platinum"/>
        <Sponsors :sponsors="filteredData('low')" sponsorLevel="low"/>
    </el-row>
</el-col>
</template>

<script>
// @ is an alias to /src
import Sponsors from "@/components/Sponsors.vue";
import _ from "underscore";
export default {
  name: "sponsorPage",
  components: {
    Sponsors
  },
  methods: {
    filteredData(level) {
      return _.filter(this.sponsorData, s => s.sponsor_level === level);
    }
  }
};
</script>


<style scoped lang="less">
h1 {
  text-align: left;
  margin-left: 0%;
  font-weight: bold;
  padding-left: 1%;
}
h3 {
  text-align: left;
  padding-left: 1%;
}
.desc {
  width: 60%;
  margin: 1% 4%;
}
.header {
  width: 25%;
}
.btn {
  margin-left: 50%;
}
</style>
