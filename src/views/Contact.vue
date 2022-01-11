<template>
  <ContactInfo class="zhunting-contact"></ContactInfo>
</template>

<script>
// @ is an alias to /src
import ContactInfo from "@/components/zhunting-contact.vue";

export default {
  name: "Contact",
  components: {
    ContactInfo,
  },
  data() {
    return {};
  },
  created() {},
};
</script>
<style scoped>
.zhunting-contact {
  width: 100%;
  max-width: 100%;
}
</style>
