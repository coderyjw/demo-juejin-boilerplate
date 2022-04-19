<template>
  <div id="app">
    <div class="m-top">
      <router-link
        class="m-link"
        v-for="nav in navs"
        :key="nav.path"
        :to="nav.path"
        >{{ nav.path }}</router-link
      >
    </div>
    <div class="m-content">
      <router-view></router-view>
      <!-- <u-topic type="top"></u-topic> -->
    </div>
  </div>
</template>

<script>
import UTopic from "./module/topic/views/UTopic.vue";
import { LIST_TYPE } from "./module/topic/store";

export default {
  components: {
    UTopic,
  },
  computed: {
    navs() {
      return [
        {
          name: "热门",
          path: LIST_TYPE.HOT,
        },
        {
          name: "最新",
          path: LIST_TYPE.NEW,
        },
        {
          name: "热榜",
          path: LIST_TYPE.TOP,
        },
        {
          name: "关于我",
          path: "about",
        },
      ];
    },
  },
};
</script>

<style>
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  margin: 0;
  overflow-y: scroll;
}

a {
  text-decoration: none;
  color: #007fff;
}

.m-top {
  height: 60px;
  width: 100%;
  background: #007fff;
}

.m-link {
  display: inline-block;
  color: #fff;
  height: 60px;
  line-height: 60px;
  font-size: 19px;
  padding: 0 20px;
}

.router-link-active {
  background: #00a6ff;
}

.m-content {
  width: 960px;
  border: 1px solid #eee;
  background: #fff;
  margin: 20px auto;
  padding: 0 20px;
}
</style>
