import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import BoshSahifa from "@/views/BoshSahifa";
import Books from "@/views/Books";
import SingleBook from "@/views/SingleBook";
import AboutLibraries from "@/views/AboutLibraries";
import NewsPageVue from "@/views/NewsPage.vue";
import NewsDetailsPageVue from "@/views/NewsDetailsPage.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    children: [
      {
        path: "/",
        name: "bosh_sahifa",
        component: BoshSahifa,
      },
      {
        path: "/books",
        name: "books",
        component: Books,
      },
      {
        path: "/about_library",
        name: "about_library",
        component: AboutLibraries,
      },
      {
        path: "/news",
        name: "News",
        component: NewsPageVue,
      },
    ],
  },
  {
    path: "/news/:id",
    name: "newsDetails",
    component: NewsDetailsPageVue,
    props: true,
  },
  {
    path: "/singleBook/:id",
    name: "singleBook",
    component: SingleBook,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
