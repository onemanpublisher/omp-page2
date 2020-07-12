import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Landing from "./views/Landing.vue";
import Sascha from "./views/Profiles/Sascha.vue";
import Luca from "./views/Profiles/Luca.vue";
import Baris from "./views/Profiles/Baris.vue";
import Alex from "./views/Profiles/Alex.vue";
import Gravitybird from "./views/Gravity-Bird.vue";
import Impressum from "./views/Impressum.vue";
import Datenschutz from "./views/Datenschutz.vue";
import { BIconArrowRightShort, BIconArrowsAngleExpand } from "bootstrap-vue";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "landing",
      components: {
        header: AppHeader,
        default: Landing,
        footer: AppFooter
      }
    },
    {
      path: "/sascha-dolgow",
      name: "sascha-dolgow",
      components: {
        header: AppHeader,
        default: Sascha,
        footer: AppFooter
      }
    },
    {
      path: "/luca-kohls",
      name: "luca-kohls",
      components: {
        header: AppHeader,
        default: Luca,
        footer: AppFooter
      }
    },
    {
      path: "/baris-avci",
      name: "baris-avci",
      components: {
        header: AppHeader,
        default: Baris,
        footer: AppFooter
      }
    },
    {
      path: "/alexander-vaymer",
      name: "alexander-vaymer",
      components: {
        header: AppHeader,
        default: Alex,
        footer: AppFooter
      }
    },
    {
      path: "/gravity-bird",
      name: "gravity-bird",
      components: {
        header: AppHeader,
        default: Gravitybird,
        footer: AppFooter
      }
    },
    {
      path: "/impressum",
      name: "impressum",
      components: {
        header: AppHeader,
        default: Impressum,
        footer: AppFooter
      }
    },
    {
      path: "/datenschutz",
      name: "datenschutz",
      components: {
        header: AppHeader,
        default: Datenschutz,
        footer: AppFooter
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});