<template>
  <div class="container">
    <h2>Edit Page #{{ index }}</h2>

    <div class="container mt-5">
      <form class="row">
        <div class="row">
          <div class="col-6">
            <div class="mb-3">
              <label class="form-label">Page Title</label>
              <input
                type="text"
                class="form-control"
                v-model="page.pageTitle"
              />
            </div>
          </div>
          <div class="col-6">
            <div class="mb-3">
              <label class="form-label">Nav Text</label>
              <input
                type="text"
                class="form-control"
                v-model="page.link.text"
              />
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-6">
            <div class="mb-3">
              <label class="form-label">Url</label>
              <input type="text" class="form-control" v-model="page.link.url" />
            </div>
          </div>
          <div class="col-6 d-flex align-items-center">
            <div class="mb-3 form-check">
              <input
                type="checkbox"
                class="form-check-input"
                v-model="page.published"
              />
              <label class="form-check-label">Published</label>
            </div>
          </div>
        </div>

        <div class="mb-3">
          <label class="form-label">Content</label>
          <textarea
            rows="5"
            type="text"
            class="form-control"
            v-model="page.content"
          />
        </div>

        <div class="d-flex">
          <button
            type="submit"
            class="btn btn-primary"
            @click.prevent="submitForm"
          >
            Submit
          </button>

          <button class="btn btn-danger mx-3" @click.prevent="cancleEditing">
            Cancel
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { inject } from "vue";

const { index } = defineProps(["index"]);
const router = useRouter();
const pages = inject("$pages");
const bus = inject("$bus");

let page = pages.getSinglepage(index);

const submitForm = () => {
  pages.editPage(index, page);
  bus.$emit("page-updated", {});
  router.push({ path: "/pages" });
};

const cancleEditing = () => {
  router.push({ path: "/pages" });
};
</script>