<template>
  <b-container fluid v-if="animals.length">
    <div id="animals" class="hunts">
      <b-row>
        <b-col md="3">
          <h3></h3>
        </b-col>
        <b-col md="3">
          <h3>Megnevezés</h3>
        </b-col>
        <b-col md="3">
          <h3>Ár forintban</h3>
        </b-col>
        <b-col md="3">
          <h3>Ár euróban</h3>
        </b-col>
      </b-row>
      <div
        v-for="animal in animals"
        :key="animal.id"
        class="animal-row-container"
      >
        <b-row v-if="animal" class="vertical-center animal-row">
          <b-col md="3">
            <b-card
              overlay
              :img-src="animal.image.url"
              v-if="animal.image"
            ></b-card>
            <Loader v-else size="medium" variant="danger"></Loader>
          </b-col>
          <b-col md="3">
            <h4>{{ animal.animalName }}</h4>
          </b-col>
          <b-col md="3">
            <h4>{{ animal.priceInHuf }} Ft</h4>
          </b-col>
          <b-col md="3">
            <h4>{{ animal.priceInEur }} Eur</h4>
          </b-col>
        </b-row>
        <Loader v-else size="medium"></Loader>
        <router-link
          :to="{
            path:
              $route.params.detail.toLowerCase() +
              '/' +
              animal.animalName.replace(/[\s\/]/g, '').toLowerCase(),
          }"
          class="mask"
        >
        </router-link>
      </div>
    </div>
  </b-container>
  <Loader v-else size="large"></Loader>
</template>

<script>
import Loader from "@/components/loader.vue";
export default {
  name: "animals",
  components: { Loader },
  data() {
    return {
      animals: [],
    };
  },
  created() {
    this.getData();
  },
  watch: {
    $route: "getData",
  },
  methods: {
    async getData() {
      const response = await fetch(
        "https://api.zhunting.hu/api/animals/" + this.$route.params.detail
      );
      const data = await response.json();
      this.animals = data;
    },
  },
  setData(err, post) {
    if (err) {
      this.error = err.toString();
    } else {
      this.post = post;
    }
  },
};
//  .normalize('NFD')
//   .replace(/[\u0300-\u036f]/g, ''),
</script>
<style scoped>
.hunts {
  padding-top: 40px;
  padding-left: 40px;
}
#animals {
  padding-top: 30px;
}
.vertical-center {
  align-items: center;
}
.card {
  border: none !important;
}
.animal-row-container {
  padding-top: 3%;
  position: relative;
}
.animal-row {
  opacity: 1;
  width: 100%;
  height: auto;
  transition: 0.5s ease;
  backface-visibility: hidden;
  margin-top: 1%;
  margin-bottom: 5%;
  background-color: rgba(1, 50, 32, 0.08);
}
.mask {
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}
.animal-row-container:hover .animal-row {
  opacity: 0.3;
}
.animal-row-container:hover .mask {
  width: 100%;
  height: 100%;
  opacity: 1;
}
</style>