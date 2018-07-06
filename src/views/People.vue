<template>
  <div class="people">
    <People msg="People"/>
  </div>
</template>

<script>
// @ is an alias to /src
import People from "@/components/People.vue";

export default {
  name: "people",
  components: {
    People
  }
};
</script>
