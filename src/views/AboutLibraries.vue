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
              <h2>{{$t("MIT_Library")}}</h2>
              <div class="about_main">
                      <div class="img">
                            <img :src="MIT" alt="">
                     </div>
                     <div class="text">
                            <p>{{$t("MIT")}}</p>
                     </div>
                    
              </div>
              <h2>{{$t("Harvard")}}</h2>
              <div class="about_main">
                     <div class="text">
                            <p>{{$t("Harvard_library")}}</p>
                     </div>
                      <div class="img">
                            <img :src="harvard2" alt="">
                     </div>
                    
              </div>
              <h2>{{$t("Uzb")}}</h2>
              <div class="about_main">
                      <div class="img">
                            <img :src="milliy2" alt="">
                     </div>
                      <div class="text">
                            <p>{{$t("uzb_library")}}</p>
                     </div>
                    
              </div>
       <Footer/>
       </div>
</template>

<script setup>
import libraries from '@/assets/libraries.jpg'      
import MIT from '@/assets/MIT.jpg'      
import harvard2 from '@/assets/harvard2.jpg'      
import milliy2 from '@/assets/milliy2.jpg'     
import Footer from '@/components/Footer' 
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
.about h2{
       font-size: 35px;
       font-family: "Roboto", sans-serif;
       letter-spacing: 0.5px;
       margin-left: 20px;
       margin-top: 20px;
}
.about .about_main{
       width: 100%;
       display: flex;
       flex-wrap: wrap;
       justify-content: space-around;
       margin-top: 30px;
}
.about .about_main .text{
       width: 47%;
}
.about .about_main .text p{
       font-size: 18px;
       font-family: "Roboto", sans-serif;
}
.about .about_main .img{
       width: 43%;
       height: 450px;
}
.about .about_main .img img{
       width: 100%;
       height: 100%;
       object-fit: cover;
       border-radius: 10px;
}
</style>