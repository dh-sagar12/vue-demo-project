<template>
  <li>
    <router-link
      class="nav-link"
      :to="`/${index}`"
      active-class="active emphasize"
    >
      {{ page.link.text }}
    </router-link>
  </li>
</template>


<script>
export default {
  props: ["page", "index"],
};
</script>

<style >
.emphasize {
  text-decoration: underline;
}
</style>