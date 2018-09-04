<template>
  <div class="people">
    <h1>Speakers</h1>
    <div class="decoration"></div>
    <h3>HealthSTLX brings together an exciting panel of St. Louis healthcare thought leaders from diverse backgrounds, as well as keynote speaker Allison Massari, who has been described as "life-changing," "bold," and "motivational." Check out the full list of speakers for HealthSTLX below.</h3>
    <div class="keynote-card" shadow="never">
      <img :src="keynoteImageSource" class="allison">
      <div class="info-wrapper">
        <span class="name">Allison Massari</span>
        <a href="https://twitter.com/AllisonMassari" target="_blank"><i class="fab fa-twitter"></i></a>
        <a href="https://www.linkedin.com/in/allisonmassari" target="_blank"><i class="fab fa-linkedin-in"></i></a>
        <div class="info">
          <div class="title">{{ speakerTitle }}</div>
          <div class="description">{{ speakerDescription }}</div>
          <div class="bio">{{ bio }}</div>
        </div>
      </div>
    </div>
    <!-- <h1>Panelists</h1> -->
    <div class="decoration" style="margin-top: 40px;"></div>
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
      data: [],
      bio: `Allison Massari knows that you have the power to transform lives. As an advocate for both patient and provider, Massari has an intimate understanding of the demands and challenges of the medical profession, and compelling authority to address the delicate nature of patient-centered care. She experienced firsthand the critical value of receiving personalized health care from committed, empathetic providers after surviving two life-threatening car accidents, one where she suffered second and third degree burns on over 50% of her body. In addition, raised by her father, an Oncology surgeon, and her mother, a nurse, Allison was mentored in the world of medicine from an early age. Captivated by her father’s compassionate work, she shadowed him in his practice, and also worked in hospitals and medical office settings. Allison’s riveting and courageous journey from absolute loss to a triumphant and hope-filled life, addresses sensitive topics, shining light on the provider’s immense value to a patient who is suffering, and helping to reinvigorate employees and heal burnout in the workplace.`,
      speakerTitle: 'Transforming Patient Lives: The Art of Person-Centered Care',
      speakerDescription: `Prepare to be taken on a journey. With her perceptive view inside the “patient experience”, Allison Massari’s riveting and insightful keynote illuminates the immense value that healthcare providers have upon a patient who is suffering. This dynamic and poignant program offers real solutions to the struggle of how to keep the patient first despite limited time and other practical constraints. By weaving her remarkable journey with potent life-lessons, Allison highlights the integral nature of patient-centered care and fortifies audience members, reigniting their passion for why they went into healthcare in the first place. She explains, "The power of what you do goes far beyond the technical part of your job. You are healing the places medicine cannot touch. In fact YOU are the medicine." Hailed as “life-changing”, Allison’s keynote offers a sincere and direct approach to navigating adversity, transcending life’s difficulties, and always finding a way to be the healer in the room. This content rich and deeply moving speech also offers applicable tools for managing change, adversity, and the everyday challenges of being human.`,
      keynoteImageSource: 'https://static1.squarespace.com/static/587fc9a5d482e9ee798c6283/t/58d0a87920099eeb57dca11d/1490069629159/Massari_Headshot.jpg?format=750w'
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

h3 {
  font-size: 16px;
  font-weight: lighter;
  color: #fff;
}
.name {
  font-weight: bold;
  font-size: 18px;
  text-align: left;
}
.title {
    margin: 0 0 10px;
    font-style: italic;
}
.allison {
    margin-right: 20px;
    max-height: 400px;
    object-fit: cover;
    object-position: 100% 20%;
}
.fa-linkedin-in,
.fa-twitter {
  padding-left: 10px;
  // float: right;
  color: #9b9b9b;
  font-size: 15px;
}
.fa-linkedin-in:hover,
.fa-twitter:hover {
  color: @primary;
}
.info {
  margin-top: 4px;
  font-size: 15px;
  color: #777;
}
.description {
  margin-top: 20px;
}
.bio {
  margin-top: 20px;
}
.keynote-card {
  padding: 20px;
  border: 1px solid #ebeef5;
  background-color: #fff;
  color: #303133;
  transition: .3s;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
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
@media (max-width: 768px) {
  .keynote-card {
    flex-direction: column;

    .allison {
      margin-bottom: 20px;
        margin-right: 0;
        max-height: 300px;
        max-width: 300px;
        object-fit: cover;
        object-position: 100% 10%;
    }
  }
}

</style>
