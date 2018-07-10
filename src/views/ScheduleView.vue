<template>
  <div>
      <Schedule/>
  </div>
</template>


<script>
// @ is an alias to /src
import Schedule from "@/components/Schedule.vue";

export default {
  name: "scheduleView",
  components: {
    Schedule
  }
};
</script>


<style scoped lang="less">
h1 {
  text-align: left;
  padding-left: 1%;
  font-weight: bold;
}

</style>
