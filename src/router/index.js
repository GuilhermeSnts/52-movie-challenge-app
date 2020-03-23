import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/pages/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../components/pages/About.vue")
  },
  {
    path: "/movies",
    name: "Movies",
    component: () => import("../components/pages/UserMovies.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
