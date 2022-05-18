<template>
  <div v-if="show">
    <div class="exist container">
      <router-link to="/"
        ><button type="button" class="btn-close" aria-label="Close"></button
      ></router-link>
    </div>
    <div class="container mt-4">
      <div class="card">
        <div>
          <div class="card__img">
            <img class="card-img-top" :src="getData.url" alt="Card image cap" />
          </div>
          <div class="card-body">
            <p class="card-text text-center item__name">
              {{ getData.name }}
            </p>
            <p class="card-text item__title">{{ getData.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    v-else
    class="container d-flex align-items-center justify-content-center mt-5"
  >
    <LoadingIcon />
  </div>
</template>
<script setup>
import { ref } from "vue";
import LoadingIcon from "./LoadingIcon.vue";
const show = ref(false);

setTimeout(() => {
  show.value = true;
}, 500);
const props = defineProps({
  id: {
    type: Number,
  },
});

console.log(props.item_id);

const news = ref([
  {
    id: 1,
    url: require("../assets/news/1.jpg"),
    name: "“Central Asia – 2022”: “Fan, ta’lim, madaniyat va biznesda internet va axborot-kutubxona resurslari” XV Xalqaro konferensiyasi",
    title:
      "“Central Asia – 2022”: “Fan, ta’lim, madaniyat va biznesda internet va axborot-kutubxona resurslari” XV Xalqaro konferensi",
  },
  {
    id: 2,
    url: require("../assets/news/2.png"),
    name: "Xorijiy adabiyotlar kutubxonasi",
    title: "Loyiha haqida",
  },
  {
    id: 3,
    url: require("../assets/news/3.jpg"),
    name: "O‘zbekiston Milliy kutubxonasida 2022-yil aprel oyida foydalanuvchilar tomonidan eng ko‘p buyurtma qilingan adabiyotlar",
    title: "",
  },
  {
    id: 4,
    url: require("../assets/news/4.jpg"),
    name: "#Oltin_sandiq_javohirlari",
    title:
      "  Aziz kitobxonlar, biz sizlarni kanalimizda #Oltin_sandiq_javohirlari xeshtegi ostida kutubxona kitob javonlaridan o'rin olgan O‘zbek tilining izohli lug‘atidan ona tilimizda uchraydigan jozibador   so‘zlarning sharhi bilan tanishtirib borishda davom etamiz.",
  },
  {
    id: 5,
    url: require("../assets/news/5.jpg"),
    name: "Akademik Vohid Abdullayev tavalludining 110 yilligiga bag'ishlangan ko‘rgazma",
    title:
      "  Aziz kitobxonlar, biz sizlarni kanalimizda #Oltin_sandiq_javohirlari xeshtegi ostida kutubxona kitob javonlaridan o'rin olgan O‘zbek tilining izohli lug‘atdan ona tilimizda uchraydigan jozibador   so‘zlarning sharhi bilan tanishtirib borishda davom etamiz.",
  },
  {
    id: 6,
    url: require("../assets/news/6.jpg"),
    name: "Akademik Vohid Abdullayev tavalludining 110 yilligiga bag'ishlangan ko‘rgazma",
    title:
      "   O‘zbekiston Milliy kutubxonasi “Ilm” o‘quv zalida O‘zbekistonda xizmat ko‘rsatgan fan arbobi, O‘zbekiston FA akademigi, adabiyotshunos olim, filologiya fanlari doktori, professor Vohid Abdullayev tavalludining 110 yilligi munosabati bilan kitoblar ko‘rgazmasi ochildi",
  },
  {
    id: 7,
    url: require("../assets/news/7.jpg"),
    name: "Hurmatli kitobxonlar!",
    title:
      "Sizlarni haftaning har juma kuni #kun_hikmati xeshtegi ostida taniqli va ulug olim-u shoirlarning hikmatli iboralari bilan tanishtirib boramiz",
  },
  {
    id: 8,
    url: require("../assets/news/8.jpg"),
    name: "“O‘chmas u kunlar shuhrati” nomli fotolavhalar ko‘rgazmasi",
    title:
      "  O‘zbekiston Respublikasi Prezidentining 2022-yil 29-apreldagi “9-may — Xotira va qadrlash kuniga tayyorgarlik ko‘rish va uni o‘tkazish chora-tadbirlari to‘g‘risida”gi qaroriga asosan “G‘alaba bog‘i” yodgorlik majmuasi tarkibidagi “Shon-sharaf” davlat muzeyida O‘zbeki",
  },
  {
    id: 9,
    url: require("../assets/news/9.jpg"),
    name: "Rossiya Federatsiyasida Hamdo‘stlik kutubxonalarining ta'lim sohasidagi hamkorligi loyihasi amalga oshirilmoqda",
    title:
      "   Rossiya Davlat kutubxonasi (RGB) Mustaqil davlatlar hamdo‘stligining xorijda yashovchi vatandoshlar ishlari bo‘yicha federal agentligi va Xalqaro gumanitar hamkorlik (Rossotrudnichesvo) bilan birgalikda siyosiy, ijtimoiy, ilmiy va ishbilarmon doiralari yosh vakillarining “Yangi avlod” das",
  },
]);
const data = news.value;
const getData = ref([]);
data.map((item) => {
  if (item.id == props.id) {
    getData.value = item;
  }
});
</script>
<style scoped>
.exist {
  margin-top: 20px;
  padding: 2px 12px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: #706e6e;
  border-radius: 10px;
}
</style>
