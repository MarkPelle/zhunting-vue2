<template>
  <div>
    <!-- THIS SYNTAX WILL BE USED LATER -->
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div> -->
    <b-navbar id="nav" toggleable="lg" type="dark" variant="darkgreen">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <router-link to="/" class="nav-item nav-link">Kezdőlap</router-link>
          <b-nav-item-dropdown text="Vadászatok" toggle-class="nav-link-custom">
            <b-dropdown-item>
              <router-link
                :to="{
                  name: 'Hunts',
                  params: { detail: details[0].zone.toLowerCase() },
                }"
                class="nav-item nav-link"
              >
                Vadászatok magyarországon</router-link
              >
            </b-dropdown-item>
            <b-dropdown-item>
              <router-link
                :to="{
                  name: 'Hunts',
                  params: { detail: details[1].zone.toLowerCase() },
                }"
                class="nav-item nav-link"
                >Vadászatok külföldön</router-link
              >
            </b-dropdown-item>
          </b-nav-item-dropdown>
          <router-link to="/gallery" class="nav-item nav-link"
            >Galéria</router-link
          >
          <router-link to="/contact" class="nav-item nav-link"
            >Kapcsolat</router-link
          >
          <router-link to="/booking" class="nav-item nav-link"
            >Foglalás</router-link
          >
        </b-navbar-nav>
        <b-nav class="ml-auto">
          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name: "Navbar",
  data() {
    return {
      details: [{ zone: "Hungary" }, { zone: "Abroad" }],
    };
  },
};
</script>
<style>
#nav {
  padding: 20px;
}

#nav a {
  font-weight: bold;
  font-size: 18px;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
#nav a.router-link-exact-active:hover {
  color: #5cffb5;
}
.dropdown-item > .nav-link:hover {
  background-color: unset !important;
}
.dropdown-menu {
  background: rgba(1, 50, 32, 0.7) !important;
  color: #fff !important;
}
.nav-item {
  margin-right: 5px;
}
.dropdown-menu-right {
  margin-top: 20px !important;
}
.dropdown-item {
  color: #fff !important;
}
.dropdown-item:hover,
.dropdown-item:focus {
  color: #000 !important;
  background: rgba(1, 74, 47, 0.7) !important;
}
@media only screen and (min-width: 1024px) {
  .dropdown-menu.show {
    margin-top: 15%;
  }
}
@media only screen and (max-width: 768px) {
  .dropdown-menu {
    text-align: unset !important;
    float: unset !important;
  }
}
.bg-darkgreen {
  background: rgba(1, 50, 32, 0.7);
}
.dropdown-toggle::after {
  transform: rotate(0deg);
}
a[aria-expanded="true"]:after {
  animation-name: rotation;
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
}
a[aria-expanded="false"]:after {
  animation-name: rotation;
  animation-duration: 0.3s;
  animation-fill-mode: backwards;
}
@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(180deg);
  }
}
</style>
