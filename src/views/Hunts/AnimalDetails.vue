<template>
  <Animal></Animal>
</template>

<script>
import Animal from "@/components/zhunting-indiv-animal.vue";
export default {
  name: "AnimalDetails",
  components: {
    Animal,
  },
  data() {
    return {
      animaldetail: this.$route.params.details,
    };
  },
  created() {},
};
</script>

<style>
</style>
