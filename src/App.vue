<template>
  <div id="app">
    <div class="m-top" :style="{ backgroundColor: theme.primary }">
      <router-link
        class="m-link"
        :style="{
          backgroundColor:
            $route.name === nav.path ? theme.highlight : theme.primary,
        }"
        v-for="nav in navs"
        :key="nav.path"
        :to="nav.path"
        >{{ langType === "zh" ? nav.name : nav.path }}</router-link
      >
    </div>
    <div class="m-content">
      <router-view></router-view>
      <!-- <u-topic type="top"></u-topic> -->
    </div>

    <div class="m-side">
      <div>
        主题切换：
        <button @click="themeType = 'red'">红</button>
        <button @click="themeType = 'blue'">蓝</button>
      </div>
      <div>
        语言切换：
        <button @click="langType = 'zh'">汉</button>
        <button @click="langType = 'en'">英</button>
      </div>
    </div>
  </div>
</template>

<script>
import UTopic from "./module/topic/views/UTopic.vue";
import { LIST_TYPE } from "./module/topic/store";
import config from "./config/config";

export default {
  components: {
    UTopic,
  },
  data() {
    return {
      themeType: "blue",
      langType: "zh",
    };
  },
  provide() {
    return {
      theme: this.theme,
    };
  },
  computed: {
    theme() {
      return config.get("theme")[this.themeType];
    },
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

.m-content {
  width: 720px;
  border: 1px solid #eee;
  background: #fff;
  margin: 20px auto;
  padding: 0 20px;
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

.m-side {
  position: fixed;
  left: 65%;
  margin-left: 220px;
  top: 100px;
}
</style>
