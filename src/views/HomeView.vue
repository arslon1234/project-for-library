<template>
  <div class="home">
    <Navbar/>
    <div class="bg_img">
      <span>“If you are going to get anywhere in life you have to read a lot of books.”</span>
      <p>Roald Dahl</p>
    </div>
    <div class="app">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar'
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.home{
  width: 100%;
}
.bg_img{
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image: url('../assets/library.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.bg_img span{
  font-size: 30px;
  counter-reset: #fff;
}
.app{
  width: 100%;
}
</style>
