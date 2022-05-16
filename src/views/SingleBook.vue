<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-md-6 text-center">
        <div class="img">
          <img :src="single.volumeInfo.imageLinks.thumbnail" alt="#" />
        </div>
      </div>
      <div class="col-md-6">
        <h2>{{ single.volumeInfo.title }}</h2>
        <br />
        <div>
          <h4>Authors:</h4>
          <ul v-for="author in single.volumeInfo.authors" :key="author.id">
            <li>{{ author }}</li>
          </ul>
        </div>
        <div>
          <h4>Product Details:</h4>
          <p>Country: {{ single.accessInfo.country }}</p>
          <p>Publisher: {{ single.volumeInfo.publisher }}</p>
          <p>Publish Data: {{ single.volumeInfo.publishedDate }}</p>
          <p>Language: {{ single.volumeInfo.language }}</p>
        </div>
        <div>
          <h4>Description:</h4>
          <!-- <span> domPropsInnerHTML={{single.volumeInfo.decription}}</span> -->
          <!-- <span
                  domPropsInnerHTML= __html: {{single.volumeInfo.description }}
                ></span> -->
          <p v-html="single.volumeInfo.description"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
const urlId = window.location.href.split(":");
const url = urlId[2].split("8080/#/singlebook/");
console.log(url, "url");
const single = ref({});
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();
const getSingleBook = () => {
  axios
    .get(`https://www.googleapis.com/books/v1/volumes/${urlId[3]}`)
    .then((res) => {
      single.value = res.data;
      console.log(single.value, "urlId");
    });
};
getSingleBook();
</script>

<style scoped>
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
.img {
  width: 280px;
  height: 430px;
}
.img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}
</style>