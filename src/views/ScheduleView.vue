<template>
  <div class="schedule">
    <Schedule/>
  </div>
</template>


<script>
import Schedule from "@/components/Schedule.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  name: "scheduleView",
  components: {
    Schedule,
    NavBar
  }
};
</script>


<style scoped lang="less">
.schedule {
  padding: 30px 50px;
}
@media only screen and (max-width:349px){
  .schedule {
  padding: 30px 10px;
  }
}
@media only screen and (min-width: 350px) and (max-width: 1024px) {
  .schedule {
  padding: 30px 5px;
  }
}

</style>
