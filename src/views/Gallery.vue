<template>
  <div class="gallery h-100 mt-5" v-if="galleries.length">
    <b-container fluid>
      <b-row class="gallery-row pb-5">
        <b-col
          v-for="gallery in galleries"
          :key="gallery.id"
          md="5"
          sm="12"
          class="mb-4"
        >
          <p class="mb-4">{{ gallery.name }}</p>
          <div v-if="gallery.images.length">
            <lightbox
              :title="gallery.name"
              css="h-300 h-lg-300"
              :items="gallery.images"
              :cells="3"
            ></lightbox>
          </div>
          <Loader v-else class="h-300" variant="danger"></Loader>
        </b-col>
      </b-row>
    </b-container>
  </div>
  <Loader v-else size="large"></Loader>
</template>

<script>
import lightbox from "../components/lightbox.vue";
import Loader from "../components/loader.vue";
import "../components/lightbox.css";

export default {
  name: "Gallery",
  components: {
    lightbox,
    Loader,
  },
  data() {
    return { galleries: [] };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      this.loading = true;
      const response = await fetch(
        "https://api.zhunting.hu/api/gallery/"
      ).catch((err) => err.message);
      const data = await response.json();
      this.galleries = data;
    },
  },
};
</script>
<style>
.gallery-container {
  height: 604.8px;
  width: 750px;
}
.gallery-row {
  display: flex;
  align-items: center;
  justify-content: center;
  place-content: center;
  margin-bottom: 50px;
}
.lb-item {
  border-top: unset !important;
  border-right: unset !important;
}
.lb-modal-close {
  background-color: crimson;
}
.lb-modal-close:hover {
  background-color: #940a00;
  border-color: #940a00;
}
.lb-modal-prev:hover,
.lb-modal-next:hover {
  background-color: #42b983;
  border-color: #42b983;
}
.lb-item:hover {
  cursor: zoom-in !important;
}
.lb-modal-img:hover {
  cursor: zoom-out !important;
}
</style>
