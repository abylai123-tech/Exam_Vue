import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routers/routers";

const routers = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(routers).mount("#app");
