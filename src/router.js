import Vue from "vue";
import VueRouter from "vue-router";
import { routes as topic } from "./module/topic/router";
import store from "./store";
import { compose } from "./util/compose";

Vue.use(VueRouter);
import { PERMISSION_MAP, getPermissionByRole } from "./config/permission";

const getRole = () => store.state.user.role;
const getPermission = (permission) =>
  compose((obj) => obj[permission], getPermissionByRole, getRole)();

export default new VueRouter({
  routes: [
    ...topic,
    {
      path: "/",
      redirect: "/hot",
    },
    {
      name: "about",
      path: "/about",
      component: () => import("./views/UAbout.vue"),
      beforeEnter(to, from, next) {
        getPermission(PERMISSION_MAP.ABOUT_PAGE) ? next() : next("403");
      },
    },
    {
      name: "403",
      path: "/403",
      component: () => import("./views/403.vue"),
    },
  ],
});
