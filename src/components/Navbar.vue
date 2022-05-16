<template>
  <div class="navbars">
    <div class="nav_top">
      <span>{{ t("tuit", {}, { locale: d }) }}</span>
    </div>
    <div class="nav_centre">
      <div class="bottom_left">
        <p class="tatu">{{ t("library", {}, { locale: d }) }}</p>
      </div>
      <div class="bottom_right">
        <div class="input">
          <input type="text" placeholder="Search this site" />
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <div class="select" >
          <select  v-model="d"
          @change="change($event)">
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
               <router-link to='/' class="router">{{ t("home", {}, { locale: d }) }}</router-link>
               </li>
             <li>{{ t("news", {}, { locale: d }) }}</li>
             <li>{{ t("about_library", {}, { locale: d }) }}</li>
             <li>
               <router-link to='/books' class="router">{{ t("books", {}, { locale: d }) }}</router-link>
               </li>
             <li>{{ t("libraries", {}, { locale: d }) }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import en from "@/assets/en.jpg";
import ru from "@/assets/ru.jpg";
import uz from "@/assets/uz.jpg";
import {ref} from 'vue'
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();
const d = ref();
const change = (event) => {
  localStorage.setItem("lang", event.target.value);
  // event.target.value = d.value
};
d.value = localStorage.getItem('lang')
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.navbars {
  width: 100%;
  height: 150px;
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
  /* justify-content: space-between; */
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
.navbars .nav_bottom ul{
       width: 100%;
       display: flex;
       align-items: center;
       justify-content: center;
}
.navbars .nav_bottom ul li{
       list-style: none;
       margin: 0px 15px;
       font-size: 18px;
       color: #2e2d2d;
       font-family: 'Roboto', sans-serif;
       font-weight: 500;
       cursor: pointer;
       text-decoration: none;
}
.navbars .nav_bottom ul li .router{
  text-decoration: none;
    color: #2e2d2d;
}
.navbars .nav_bottom ul li .router:hover{
       color: #B1040E;
}
</style>