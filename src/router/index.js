import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/pages/HomePage.vue";

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
    component: () => import("../components/pages/AboutPage.vue")
  },
  {
    path: "/movies",
    name: "Movies",
    component: () => import("../components/pages/MoviesPage.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
