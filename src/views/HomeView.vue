<template>
  <div
  class="home">
    <Navbar />
  
    <div class="app">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import Navbar from "@/components/Navbar";
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.home {
  width: 100%;
}
.bg_img {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image: url("../assets/library.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.bg_img span {
  font-size: 35px;
  color: #110de0;
  text-shadow: 1px 1px #87a9ec;
  font-weight: 400;
  font-family: "Roboto", sans-serif;
  letter-spacing: 0.5px;
}
.bg_img p {
  font-size: 30px;
  color: #110de0;
  letter-spacing: 0.5px;
  text-shadow: 1px 1px #87a9ec;
  font-weight: 400;
  font-family: "Roboto", sans-serif;
}
.app {
  width: 100%;
}
</style>
