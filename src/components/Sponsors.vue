<template>
<el-row>
    <h2>{{sponsorLevel}} Sponsors</h2>
    <div class="decoration"></div>
    <el-row class="sponsor">
    <li v-for="sponsor in sponsorData" :key="sponsor.id">
        <Sponsor :image="sponsor.image_loc" :title="sponsor.title" :name="sponsor.name" :description="sponsor.description" :sponsorLevel="sponsor.sponsor_level" link="https://www.slalom.com/locations/st-louis"/>
    </li>
  </el-row>
</el-row>
</template>

<script>

import Sponsor from "@/components/Sponsor.vue";
export default {
  name: "Sponsors",
  components: {
    Sponsor: Sponsor
  },

  props: {
    sponsorData: Array,
    sponsorLevel: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

.sponsor{
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  margin-bottom: 55px;
}
ul {
  padding: 0;
}
li {
  list-style-type: none;
  padding: 10px;

}
 h2 {
  padding-left:50px;
  text-align: left;
}
</style>
