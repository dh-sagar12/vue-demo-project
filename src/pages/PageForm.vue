<template>
  <div class="container mt-5">
    <form class="row">
      <div class="row">
        <div class="col-6">
          <div class="mb-3">
            <label class="form-label">Page Title</label>
            <input type="text" class="form-control" v-model="pageTitle" />
          </div>
        </div>
        <div class="col-6">
          <div class="mb-3">
            <label class="form-label">Nav Text</label>
            <input type="text" class="form-control" v-model="text" />
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-6">
          <div class="mb-3">
            <label class="form-label">Url</label>
            <input type="text" class="form-control" v-model="url" />
          </div>
        </div>
        <div class="col-6 d-flex align-items-center">
          <div class="mb-3 form-check">
            <input
              type="checkbox"
              class="form-check-input"
              v-model="published"
            />
            <label class="form-check-label">Published</label>
          </div>
        </div>
      </div>

      <div class="mb-3">
        <label class="form-label">Content</label>
        <textarea rows="5" type="text" class="form-control" v-model="content" />
      </div>

      <button
        :disabled="IsFormInvalid"
        type="submit"
        class="btn btn-primary"
        @click.prevent="submitForm"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref, computed, inject, watch } from "vue";
import { useRouter } from "vue-router";

const pageTitle = ref("");
const content = ref("");
const text = ref("");
const url = ref("");
const published = ref(true);

const bus = inject("$bus");
const page = inject("$pages");
const router = useRouter();

const submitForm = () => {
  const newpage = {
    link: {
      text: text.value,
      url: url.value,
    },
    pageTitle: pageTitle.value,
    content: content.value,
    published: published.value,
  };
  page.addPage(newpage);
  bus.$emit("page-updated", {});
  router.push({ path: "/pages" });
};

const IsFormInvalid = computed(
  () => !pageTitle.value || !content.value || !url.value || !text.value
);
</script>
