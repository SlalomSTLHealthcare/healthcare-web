<template>
  <el-container class="container">
   <li v-for="sponsor in sponsorData" :key="sponsor.id">
       <Sponsor :image="sponsor.image_loc" :title="sponsor.title" :name="sponsor.name" :description="sponsor.description" sponsorLevel="low" link="https://www.slalom.com/locations/st-louis" class="sponsor"/>
   </li>
 </el-container>
</template>

<script>
import Sponsor from "@/components/Sponsor.vue";
export default {
  name: "HomeSponsor",
  data: function(){
    return{
      sponsorData: []
    }
  },
  components:{
    Sponsor
  },
  mounted: function() {
    this.populateData();
  },
  methods: {
    populateData: function() {
      this.$axiosServer.get(`api/sponsors`)
        .then(response => {
          this.sponsorData = response.data;
          console.log(this.sponsorData);
        })
        .catch(e => {
          return e;
        });
    },
    sponsor: function(){
      this.$router.push("/sponsors");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.container{
  text-align: center;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin: 30px 0px;
}
li{
  list-style-type: none;
}
.sponsor{
  margin: 5px 5px;
}
</style>
