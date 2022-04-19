<template>
  <div>
    <u-list :items="items"></u-list>
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
  created() {
    const { type } = this;
    this.fetchData({ type });
  },
  methods: {
    ...mapActions({
      fetchData: "FETCH_LIST_DATA",
    }),
  },
};
</script>
