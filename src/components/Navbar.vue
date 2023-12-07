<template>
  <nav
    :class="[
      `navbar-${theme}`,
      `bg-${theme}`,
      'navbar',
      'navbar-expand-lg px-5 py-4',
    ]"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img
          src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg"
          alt=""
          width="30"
          height="24"
          class="d-inline-block align-text-top"
        />
        Bootstrap
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <navbar-link
            v-for="(page, index) in pages"
            class="nav-item"
            :key="index"
            :index="index"
            :page="page"
          ></navbar-link>
          <li>
            <router-link
              class="nav-link"
              :to="`/pages`"
              active-class="active emphasize"
            >
              Pages
            </router-link>
          </li>
        </ul>
        <div class="d-flex">
          <button
            :class="ThemeBtnClass"
            class="btn"
            @click.prevent="changeTheme"
          >
            {{ getThemeType }}
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import NavbarLink from "./NavbarLink.vue";
export default {
  components: { NavbarLink },
  props: ["pages"],
  data() {
    return {
      theme: "light",
    };
  },
  created() {
    this.retriveTheme();
  },
  methods: {
    changeTheme() {
      let theme = "light";
      if (this.theme == "light") {
        theme = "dark";
      }
      this.theme = theme;
      this.setTheme();
    },
    setTheme() {
      localStorage.setItem("theme", this.theme);
    },
    retriveTheme() {
      let theme = localStorage.getItem("theme");
      if (theme) {
        this.theme = theme;
      }
    },
  },
  computed: {
    getThemeType() {
      if (this.theme == "light") {
        return "Change to Dark";
      }
      return "Change to Light";
    },
    ThemeBtnClass() {
      return {
        "btn-dark": this.theme == "light",
        "btn-light": this.theme == "dark",
      };
    },
  },
};
</script>

