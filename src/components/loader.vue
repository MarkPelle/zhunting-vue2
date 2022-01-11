<template>
  <div class="loader">
    <b-spinner :class="size" label="Loading..." :variant="variant"></b-spinner>
  </div>
</template>

<script>
export default {
  name: "Loader",

  props: {
    variant: {
      type: String,
      default: "success",
    },
    size: {
      type: String,
      default: "large",
    },
  },
};
</script>

<style scoped>
.loader {
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100% - 82.666px);
  overflow: hidden !important;
}
.large {
  width: 13rem;
  height: 13rem;
}
.normal {
  width: 3rem;
  height: 3rem;
}
.medium {
  width: 8rem;
  height: 8rem;
}
.success {
  color: #28a745 !important;
}
.failed {
  color: #d84141 !important;
}
</style>