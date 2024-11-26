import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";

// import Login from "@/components/Common/Login.vue";
// import Dashboard from "@/components/pages/Dashboard.vue";


const router = createRouter({
  history: createWebHistory(),
  routes
});

// router.beforeEach((to, from, next) => {
// if (to.meta.auth){
//   next(false);
// } else {
//   next();
// }
// })

export default router;
