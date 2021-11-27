import Docs from "./Docs.vue";
import {createRouter, createWebHistory} from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/:version/:category?/:route?", component: Docs },
    { path: "/:pathMatch(.*)*", component: Docs }
],
});
export default router;
