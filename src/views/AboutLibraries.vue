<template>
       <div class="about">
              <h1>{{$t("about_library")}}</h1>
              <div class="about_main">
                     <div class="text">
                            <p>{{$t("Library")}}</p>
                     </div>
                     <div class="img">
                            <img :src="libraries" alt="">
                     </div>
              </div>
       </div>
</template>

<script setup>
import libraries from '@/assets/libraries.jpg'      
</script>

<style scoped>
*{
       margin: 0;
       padding: 0;
       box-sizing: border-box;
}
.about{
       width: 100%;
       height: 100vh;
       margin-top: 20px;
}
.about h1{
       font-size: 35px;
       text-align: center;
       font-family: "Roboto", sans-serif;
       letter-spacing: 0.5px;
}
.about .about_main{
       width: 100%;
       display: flex;
       justify-content: space-around;
       margin-top: 20px;
}
.about .about_main .text{
       width: 47%;
}
.about .about_main .text p{
       font-size: 18px;
       font-family: "Roboto", sans-serif;
}
.about .about_main .img{
       width: 47%;
       height: 400px;
}
.about .about_main .img img{
       width: 100%;
       height: 100%;
       object-fit: cover;
       border-radius: 5px;
}
</style>