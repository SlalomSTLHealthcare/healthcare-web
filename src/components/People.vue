<template>
  <div class="people">
    <h1>Keynote Speaker</h1>
    <div class="decoration"></div>
    <Person :name="'Allison Massari'" :imgSource="'https://static1.squarespace.com/static/587fc9a5d482e9ee798c6283/t/58d0a87920099eeb57dca11d/1490069629159/Massari_Headshot.jpg?format=750w'" :company="''" :bio="'Allison Massari knows that you have the power to transform lives. As an advocate for both patient and provider, Massari has an intimate understanding of the demands and challenges of the medical profession, and compelling authority to address the delicate nature of patient-centered care. She experienced firsthand the critical value of receiving personalized health care from committed, empathetic providers after surviving two life-threatening car accidents, one where she suffered second and third degree burns on over 50% of her body. In addition, raised by her father, an Oncology surgeon, and her mother, a nurse, Allison was mentored in the world of medicine from an early age. Captivated by her father’s compassionate work, she shadowed him in his practice, and also worked in hospitals and medical office settings. Allison’s riveting and courageous journey from absolute loss to a triumphant and hope-filled life, addresses sensitive topics, shining light on the provider’s immense value to a patient who is suffering, and helping to reinvigorate employees and heal burnout in the workplace.'" :twitter="'https://twitter.com/AllisonMassari'" :linkedin="'https://www.linkedin.com/in/allisonmassari'"/>
    <h1>Panelists</h1>
    <div class="decoration"></div>
    <div v-masonry transition-duration="0.3s" item-selector=".item" :gutter="20">
        <div v-masonry-tile class="item" v-for="item in data" style="margin-bottom: 20px;">
            <Person :name="item.full_name" :imgSource="item.image_loc" :company="item.company" :bio="item.bio" :title="item.title" :twitter="item.twitter" :linkedin="item.linkedin"/>
        </div>
    </div>
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
      data: []
    };
  },
  mounted: function() {
    this.$axiosServer.get(`api/people`)

     .then(response => {
     // JSON responses are automatically parsed.
       this.data = response.data
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
@import '../global-variables';

h1 {
  font-size: 40px;
  font-weight: lighter;
  // margin-left: 6%;
  color: #fff;
}
.decoration {
  background-color: @secondary;
  height: 5px;
  width: 75px;
  margin-bottom: 30px;
}
ul {
  list-style-type: none;
  padding: 0;
  // margin-left: 6%;
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
