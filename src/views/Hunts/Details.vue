<template>
  <animals></animals>
</template>

<script>
import animals from "@/components/zhunting-animals.vue";
export default {
  name: "Hunts",
  components: {
    animals,
  },
  data() {
    return {
      detail: this.$route.params.detail,
    };
  },
};
</script>

<style>
</style>