import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import TableView from "../views/TableView.vue";

import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", component: HomeView },
  { path: "/about", component: AboutView },
  { path: "/table", component: TableView },
];

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});

export default router;
