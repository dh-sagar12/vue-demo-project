
<template>
  <div>
    <navbar :pages="publishedPages" />

    <router-view></router-view>
  </div>
</template> 


<script>
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
  inject: ["$pages", "$bus"],

  created() {
    this.getPages();
    this.$bus.$on("page-updated", () => {
      this.pages = [...this.$pages.getAllpages()];
    });
  },
  data() {
    return {
      pages: [],
    };
  },
  computed: {
    publishedPages() {
      return this.pages.filter((p) => p.published);
    },
  },
  methods: {
    getPages() {
      this.pages = this.$pages.getAllpages();
    },
  },
};
</script>