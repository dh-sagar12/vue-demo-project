<template>
  <div class="my-5">
    <router-link to="/pages/create" class="btn btn-primary"> New </router-link>
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th>Title</th>
          <th>Link Test</th>
          <th>Published</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(page, index) in $pages.getAllpages()" :key="index">
          <td>{{ page.pageTitle }}</td>
          <td>{{ page.link.text }}</td>
          <td>{{ page.published ? "Yes" : "NO" }}</td>
          <td>
            <button
              class="btn btn-outline-danger"
              @click.prevent="HandleDelete(index)"
            >
              Delete
            </button>
            <button
              class="btn mx-3 btn-outline-primary"
              @click.prevent="handleClickOnPageRow(index)"
            >
              Edit
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { inject, onMounted } from "vue";
import { useRouter } from "vue-router";

const $pages = inject("$pages");
const $bus = inject("$bus");
const router = useRouter();

const handleClickOnPageRow = (index) => {
  router.push({ path: `pages/${index}/edit` });
};

const HandleDelete = (index) => {
  $pages.deletePage(index);
  $bus.$emit("page-updated", {});
};
</script>