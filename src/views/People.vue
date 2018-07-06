<template>
  <div class="people">
    <People msg="This is the People Page"/>
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
