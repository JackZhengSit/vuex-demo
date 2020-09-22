import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: () =>
      import(/* webpackChunkName: "index" */ "../views/index.vue")
  },
  {
    path: "/login",
    name: "login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/login.vue")
  },
  {
    path: "/usercenter",
    name: "usercenter",
    component: () =>
      import(/* webpackChunkName: "usercenter" */ "../views/userCenter.vue")
  },
  {
    path: "/course",
    name: "course",
    props: route => ({
      id: route.query.id,
      title: route.query.title
    }),
    component: () =>
      import(/* webpackChunkName: "course" */ "../views/course.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (store.state.userInfo || to.path === "/login") {
    next();
  } else {
    next({ path: "login" });
  }
});

export default router;
