import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import i18n from "@/plugins/i18n";
import VuePageTransition from 'vue-page-transition'
createApp(App).use(store).use(router).use(i18n).use(VuePageTransition).mount("#app");
