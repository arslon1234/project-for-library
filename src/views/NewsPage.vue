<template>
  <div v-if="show">
    <div
      class="container mt-4 d-flex flex-wrap justify-content-between justify-content-sm-center"
      style="gap: 30px"
    >
      <div
        class="card"
        style="width: 22rem"
        v-for="(item, index) in news"
        :key="item"
      >
        <div class="card__img">
          <img class="card-img-top" :src="item.url" alt="Card image cap" />
        </div>
        <div class="card-body">
          <p class="card-text text-center item__name">
            {{ item.name }}
          </p>
          <p class="card-text item__title">{{ item.title }}</p>
        </div>

        <RouterLink
          :to="`/news/${item.id}`"
          :id="item.id"
          class="router btn btn-primary"
        >
          To'liq Ma'lumot
        </RouterLink>
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
import { useI18n } from "vue-i18n";
import { getCurrentInstance } from "vue";
const root = getCurrentInstance();
const single = ref({});
const { t, locale } = useI18n();
const show = ref(false);

setTimeout(() => {
  show.value = true;
  console.log(show.value);
}, 500);

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


</script>

<style scoped>
.router {
  color: #fff;
  text-decoration: none;
  font-weight: 500;
}
.card:hover {
  cursor: pointer;
}
.card:hover .card__img img {
  transform: scale(1.2);
}
.card:hover .item__name {
  color: #46b2d0;
}

.card__img {
  overflow: hidden;
  height: 200px;
}

.card__img img {
  height: 100%;
  transition: all 0.25s ease;
}

.item__name {
  color: #1a1a1a;
  font-weight: 700;
  font-size: 14px;
}

.item__title {
  font-size: 12px;
}
</style>
