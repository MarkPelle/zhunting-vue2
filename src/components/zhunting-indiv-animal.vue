<template>
  <b-container fluid v-if="animal">
    <div id="animals" class="hunts">
      <div class="animal-row-container">
        <b-row class="vertical-center animal-row">
          <b-col md="6">
            <b-card
              overlay
              :img-src="animal.image.url"
              v-if="animal.image"
            ></b-card>
            <!-- <Loader v-else size="medium" variant="danger"></Loader> -->
          </b-col>
          <b-col md="2">
            <h4>Lelőhessük</h4>
          </b-col>
        </b-row>
      </div>
    </div>
  </b-container>
  <Loader v-else size="large"></Loader>
</template>

<script>
import Loader from "../components/loader.vue";
export default {
  name: "Animal",
  components: { Loader },
  data() {
    return {
      animal: {},
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
        "https://api.zhunting.hu/api/animals/anim/" +
          this.$route.params.animaldetail
      );
      const data = await response.json();
      console.log(data);
      this.animal = data;
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
</script>
<style>
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
</style>
