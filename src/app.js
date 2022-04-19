import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import intersect from "./directive/intersect";
import router from "./router";
import { init as themeInit } from "./config/theme";

Vue.directive("intersect", intersect);
themeInit();

const app = new Vue({
  store,
  router,
  render: (h) => h(App),
});

app.$mount("#app");
