import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Translate from "../components/Translate.vue";
import Attractions from "../components/Attractions.vue";
import About from "../views/About.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  { path: "/translate", component: Translate },
  { path: "/attractions", component: Attractions },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
