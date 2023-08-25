import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginApp from "@/views/LoginApp.vue";
import ColaboradorCreate from "../views/colaboradores/CreateColaboradorApp.vue";
import ColaboradorIndex from "../views/colaboradores/IndexColaboradorApp.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: LoginApp,
  },
  {
    path: "/colaborador/index",
    name: "colaborador-index",
    component: ColaboradorIndex,
  },
  {
    path: "/colaborador/create",
    name: "colaborador-create",
    component: ColaboradorCreate,
  },
  {
    path: "/colaborador/edit/:id",
    name: "colaborador-edit",
    component: () => import("@/views/colaboradores/EditColaboradorApp.vue"),
  },
  {
    path: "/about",
    name: "about",
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

export default router;
