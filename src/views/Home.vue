<template>
  <div class="home">
    <Intro id="intro"></Intro>
  </div>
</template>

<script>
import Intro from "@/components/Intro.vue";

export default {
  name: "Home",
  components: {
    Intro,
  },
};
</script>
<style scoped>
#intro {
  height: calc(var(--vh, 1vh) * 30);
  margin-top: 30px;
}
</style>
