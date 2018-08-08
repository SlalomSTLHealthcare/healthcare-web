<template>
  <div class="schedule">
    <Schedule/>
  </div>
</template>


<script>
// @ is an alias to /src
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
  background-color: #f7f7f7;
}

</style>
