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
  padding: 80px 80px 30px;
}
@media (max-width: 768px) {
  .schedule{
    padding: 80px 4% 4%;
  }
}

</style>
