<template>
  <div class="navbars">
    <div class="nav_top">
      <span>{{ $t("tuit") }}</span>
    </div>
    <div
      class="nav_centre d-flex justify-content-md-around justify-content-xl-between justify-content-sm-center"
    >
      <div class="bottom_left">
        <p class="tatu">{{ $t("library") }}</p>
      </div>
      <div
        class="bottom_right justify-content-center justify-content-md-end justify-content-xl-end w-100"
      >
        <div class="input">
          <input type="text" placeholder="Search this site" />
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <div class="select">
          <select v-model="d" @change="change($event)">
            <option value="en">En</option>
            <option value="ru">Ru</option>
            <option value="uz">Uz</option>
          </select>
        </div>
      </div>
    </div>
    <div class="nav_bottom">
      <ul>
        <li>
          <router-link
            to="/"
            :class="click1 ? 'router1' : 'router'"
            @click="Click1"
            >{{ $t("home") }}</router-link
          >
        </li>
        <li>
          <router-link
            to="/news"
            :class="click2 ? 'router1' : 'router'"
            @click="Click2"
          >
            {{ $t("news") }}</router-link
          >
        </li>
        <li>
          <router-link
            to="/about_library"
            :class="click3 ? 'router1' : 'router'"
            @click="Click3"
            >{{ $t("about_library") }}</router-link
          >
        </li>
        <li>
          <router-link
            to="/books"
            :class="click4 ? 'router1' : 'router'"
            @click="Click4"
            >{{ $t("books") }}</router-link
          >
        </li>
        <li>
          <router-link
            to="/"
            :class="click5 ? 'router1' : 'router'"
            @click="Click5"
            >{{ $t("libraries") }}</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import i18n from "@/plugins/i18n";
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { onMounted } from "vue";
const { t, locale } = useI18n();
console.log(i18n.global.locale, "locale");
const click1 = ref(true);
const click2 = ref(false);
const click3 = ref(false);
const click4 = ref(false);
const click5 = ref(false);
const d = ref();
onMounted(() => {
  i18n.global.locale = localStorage.getItem("lang");
});
const change = (event) => {
  localStorage.setItem("lang", event.target.value);
  i18n.global.locale = event.target.value;
};
d.value = localStorage.getItem("lang");
const Click1 = () => {
  click1.value = true;
  (click2.value = false), (click3.value = false);
  click4.value = false;
  click5.value = false;
};
const Click2 = () => {
  (click2.value = true),
    (click3.value = false),
    (click4.value = false),
    (click5.value = false);
  click1.value = false;
};
const Click3 = () => {
  (click2.value = false),
    (click3.value = true),
    (click4.value = false),
    (click5.value = false);
  click1.value = false;
};
const Click4 = () => {
  (click2.value = false),
    (click3.value = false),
    (click4.value = true),
    (click5.value = false);
  click1.value = false;
};
const Click5 = () => {
  (click2.value = false),
    (click3.value = false),
    (click4.value = false),
    (click5.value = true);
  click1.value = false;
};
</script>

<style scoped>
@media screen and (max-width: 780px) {
  .nav_bottom {
    display: flex;
    flex-direction: column;
  }
  .nav_bottom ul {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .nav_bottom ul li {
    padding: 10px 0;
  }
  .nav_centre {
    flex-wrap: wrap;
  }
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.navbars {
  width: 100%;
  /* height: 150px; */
  box-shadow: 0px 1px 3px 5px #ccc;
}
.navbars .nav_top {
  width: 100%;
  height: 30px;
  background-color: #b1040e;
  display: flex;
  align-items: center;
}
.navbars .nav_top span {
  color: #f9ebec;
  font-size: 17px;
  font-family: "Roboto", sans-serif;
  margin-left: 80px;
  font-weight: 500;
  letter-spacing: 0.5px;
}
.navbars .nav_centre {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.navbars .nav_centre .bottom_left {
  margin-left: 80px;
  margin-top: 10px;
  display: flex;
  align-items: center;
}
.navbars .nav_centre .bottom_left .tatu {
  font-size: 35px;
  color: #8c1515;
  font-family: "Roboto", sans-serif;
}
.navbars .nav_centre .bottom_right {
  margin-right: 80px;
  display: flex;
  align-items: center;
}
.navbars .nav_centre .bottom_right .input {
  width: 280px;
  height: 35px;
  border: 1px solid #999;
  display: flex;
  align-items: center;
  border-radius: 15px;
}
.navbars .nav_centre .bottom_right .input input {
  width: 240px;
  outline: none;
  border: none;
  border-radius: 15px;
  padding: 0px 10px;
  color: #5c5b5b;
}
.navbars .nav_centre .bottom_right .input i {
  font-size: 18px;
  color: #8c1515;
}
.navbars .nav_centre .bottom_right .select {
  margin-left: 10px;
}
.navbars .nav_centre .bottom_right .select select {
  width: 80px;
  height: 32px;
  border-radius: 10px;
}
.navbars .nav_bottom {
  width: 100%;
  margin-top: 15px;
}
.navbars .nav_bottom ul {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.navbars .nav_bottom ul li {
  list-style: none;
  margin: 0px 15px;
  font-size: 18px;
  color: #2e2d2d;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
}
.navbars .nav_bottom ul li .router {
  text-decoration: none;
  color: #2e2d2d;
}
.navbars .nav_bottom ul li .router1 {
  text-decoration: none;
  color: #b1040e;
  font-size: 22px;
  transition: all 0.1s linear;
}
.navbars .nav_bottom ul li .router:hover {
  color: #b1040e;
}
</style>
