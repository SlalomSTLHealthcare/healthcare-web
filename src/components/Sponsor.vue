 <template>
  <a :href="link" v-else >
    <img :src="image" alt="pic">
  </a>
</template>

<script>

export default {
  name: "Sponsor",
  props: {
    title: String,
    name: String,
    description: String,
    image: String,
    sponsorLevel: String,
    link: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.description {
  text-align: center;
}
.name{
  text-align: center;
  font-size: 20px;
  font-weight: bold;
}
.platinumCard{
  width: 100vw;
  font-size: 12px;
  margin-bottom: 10px;
}
img{
  width: 90px;
  margin: 40px;
}



</style>
