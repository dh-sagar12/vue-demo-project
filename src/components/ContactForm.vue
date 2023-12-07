<template>
  <form>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input
        type="email"
        class="form-control"
        v-model="email"
      />
    </div>
    <div class="form-floating">
      <textarea
        class="form-control"
        style="height: 100px"
        v-model="message"
      ></textarea>
      <label for="floatingTextarea2">message</label>
    </div>

    <button
      type="submit"
      class="btn btn-primary"
      @click.prevent="getFormData({ email, message })"
    >
      Submit
    </button>
  </form>
</template>
<script>
export default {
  props: ["getFormData"],
  data() {
    return {
      email: "",
      message: "",
    };
  },
};
</script>