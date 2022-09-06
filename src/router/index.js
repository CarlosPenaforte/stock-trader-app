import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/wallet",
    name: "wallet",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "wallet" */ "../views/WalletView.vue"),
  },
  {
    path: "/stocks",
    name: "stocks",
    component: () =>
      import(/* webpackChunkName: "stocks" */ "../views/StocksView.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
