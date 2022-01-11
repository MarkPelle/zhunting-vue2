<template>
  <div id="app">
    <Navbar class="sticky-nav"></Navbar>
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>

<script>
import Navbar from "./components/zhunting-navbar";
export default {
  components: {
    Navbar,
  },
};
</script>

<style>
@font-face {
  font-family: Nunito;
  src: url(/fonts/Nunito/Nunito-Regular.ttf);
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #232323;
  color: #bababa;
  height: 100% !important;
  overflow-y: scroll;
  overflow-y: overlay;
}
.sticky-nav {
  position: sticky;
  top: 0;
  z-index: 1200;
}
.fade-enter-active,
.fade-leave-active {
  position: absolute;
  width: 100% !important;
  max-width: 100% !important;
  transition-property: height, opacity;
  transition-duration: 0.3s;
  transition-timing-function: ease;
}
.fade-enter,
.fade-leave-to {
  position: absolute;
  opacity: 0;
  width: 100% !important;
}
html,
body {
  font-family: "Nunito" !important;
  height: 100%;
  width: 100%;
  margin: 0;
  background-color: #232323;
  overflow-y: scroll;
  overflow-y: overlay;
}
</style>
