import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import MoviesIndex from "../views/MoviesIndex.vue";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";
import Logout from "../views/Logout.vue";
import MoviesShow from "../views/MoviesShow.vue";
import MoviesNew from "../views/MoviesNew.vue";
import MoviesEdit from "../views/MoviesEdit.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  { path: "/login", name: "Login", component: Login },
  { path: "/signup", name: "Signup", component: Signup },
  { path: "/logout", name: "Logout", component: Logout },
  { path: "/movies", name: "MoviesIndex", component: MoviesIndex },
  { path: "/movies/:id", name: "MoviesShow", component: MoviesShow },
  { path: "/movies/new", name: "MoviesNew", component: MoviesNew },
  { path: "/movies/:id/edit", name: "MoviesEdit", component: MoviesEdit },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
