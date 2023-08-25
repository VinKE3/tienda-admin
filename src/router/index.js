import Vue from "vue";
import VueRouter from "vue-router";
import LoginApp from "@/views/LoginApp.vue";
import ColaboradorCreate from "../views/colaboradores/CreateColaboradorApp.vue";
import ColaboradorIndex from "../views/colaboradores/IndexColaboradorApp.vue";
import store from "@/store/index";
import jwt_decode from "jwt-decode";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: LoginApp,
    meta: { requiresAuth: false },
  },
  {
    path: "/colaborador/index",
    name: "colaborador-index",
    component: ColaboradorIndex,
    meta: { requiresAuth: true },
  },
  {
    path: "/colaborador/create",
    name: "colaborador-create",
    component: ColaboradorCreate,
    meta: { requiresAuth: true },
  },
  {
    path: "/colaborador/edit/:id",
    name: "colaborador-edit",
    component: () => import("@/views/colaboradores/EditColaboradorApp.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("@/views/DashboardApp.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/contact",
    name: "contact",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((item) => item.meta.requiresAuth)) {
    if (!store.state.token) {
      next({
        name: "login",
      });
    }
    try {
      jwt_decode(store.state.token);
    } catch (error) {
      next({
        name: "login",
      });
    }
    if (jwt_decode(store.state.token).exp * 1000 <= new Date().getTime()) {
      next({
        name: "login",
      });
    }
    next();
    console.log("privada");
  } else {
    console.log("publica");
    next();
  }
});

export default router;
