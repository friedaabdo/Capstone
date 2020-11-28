import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Translate from "../components/Translate.vue";
import Attractions from "../components/Attractions.vue";
import About from "../views/About.vue";
import Startup from '../components/Startup.vue'
import Flashcards from '../components/Flashcards.vue'

const routes = [
  {
    path: "/",
    component: Startup,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/about",
    component: About,
  },
  { path: "/translate", component: Translate },
  { path: "/attractions", component: Attractions, },
  { path: "/flashcards", component: Flashcards, },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
