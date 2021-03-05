import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";

const app = createApp(App);

const routes = [{ path: "/", component: Home }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.use(router);
app.mount("#app");
