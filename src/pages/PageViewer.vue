<template>
  <div v-if="page" class="container">
    <h1 class="text-center my-5">
      {{ page.pageTitle }}
    </h1>
    <h1 class="text-center">
      {{ page.content }}
    </h1>
  </div>
</template>

<script>
export default {
  props: ["index"],
  inject: ["$pages"],
  created() {
    this.page = this.$pages.getSinglepage(this.$route.params.index);
  },
  data() {
    return {
      page: null,
    };
  },
  watch: {
    index(newInd, oldInd) {
      this.page = this.$pages.getSinglepage(newInd);
    },
  },
};
</script>