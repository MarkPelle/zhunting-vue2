<template>
  <div>
    <b-container fluid>
      <b-row class="intro-row">
        <b-col md="6" sm="10" class="narrow">
          <h1>Üdvözölöm!</h1>
          <p>
            Zahorán György vagyok, puskás ember. Több mint 35 éve lövöldözök
            vaktába. Embert, állatot, nem igazán számít. Kiviszem a svájcba,
            lövünk ezt-azt, aztán megyünk haza. Higgye el, velem jár a
            legjobban, vadászataimon vannak kurvák, kokain, pálinka, minden ami
            kell. A vadászat menete a következő: a faházikóba jól berugunk,
            aztán autóba pattanunk. Én vezetek, én pofázok! Mindenki más kussban
            várja a parancsaimat. Amikor lelőttünk valamit, akkor betelefonálok
            a haveroknak, kijön a helikopter, bevisszük a vadat, te fizetsz,
            aztán mész.
          </p>
          <b-row class="button-container">
            <b-col md="4">
              <router-link to="hunts/hungary" class="btn btn-success">
                Tekintse meg belföldi vadászatainkat
              </router-link></b-col
            >
          </b-row>
          <b-row class="button-container">
            <b-col md="4">
              <router-link to="hunts/abroad" class="btn btn-success">
                Tekintse meg külföldi vadászatainkat
              </router-link></b-col
            >
          </b-row>
        </b-col>

        <b-col md="4" sm="10" class="wide">
          <b-card
            v-if="loaded"
            overlay
            loading="lazy"
            img-src="/images/boss.jpg"
            img-alt="Card Image"
            text-variant="white"
            class="no-border"
            img-height="100%"
            no-body
            @load="onLoad"
          >
          </b-card>
          <Loader v-else size="normal"></Loader>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import Loader from "../components/loader.vue";
export default {
  name: "Intro",
  components: { Loader },
  data() {
    return {
      loaded: false,
    };
  },
  mounted() {
    this.onLoad();
  },
  methods: {
    onLoad() {
      this.loaded = true;
    },
  },
};
</script>
<style scoped>
.no-border {
  border: none !important;
}
.intro-row {
  place-content: space-evenly;
}
.intro-row > .narrow > p {
  text-align: justify;
  font-size: 16px;
}
.button-container {
  margin-bottom: 5%;
}
</style>
