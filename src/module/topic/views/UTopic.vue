<template>
  <div>
    <u-list :items="items"></u-list>
    <div class="x-bottom" v-intersect="{ handler: fetchNext }"></div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import UList from "../components/UList.vue";
const { mapState, mapActions } = createNamespacedHelpers("topic");
export default {
  name: "u-top",
  props: ["type"],
  computed: {
    ...mapState({
      items: (state) => state[state.activeType].items,
    }),
  },
  components: {
    UList,
  },
  mounted() {
    this.fetchNext();
  },
  watch: {
    type(type) {
      this.fetchData({ type });
    }
  },
  methods: {
    ...mapActions({
      fetchData: "FETCH_LIST_DATA",
    }),
    fetchNext() {
      const { type } = this;
      this.fetchData({ type });
    }
  },
};
</script>
<style scoped>
.x-bottom {
  width: 100%;
  height: 40px;
  background-color: #333;
}
</style>
