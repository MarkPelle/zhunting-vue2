import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/Contact.vue"),
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: () => import("../views/Gallery.vue"),
  },
    {
    path: "/booking",
    name: "Booking",
    component: () => import("../views/Booking.vue"),
  },
  {
    path: "/hunts/:detail",
    name: "Hunts",
    component: () => import("../views/Hunts/Details.vue"),
  },
    {
    path: "/hunts/:detail/:animaldetail",
    name: "AnimalDetails",
    component: () => import("../views/Hunts/AnimalDetails.vue"),
  },
  {
    path: "*",
    name: "NotFound",
    component:() => import("../views/NotFound.vue"),
    },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
