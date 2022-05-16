import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import en from '@/i18/en.json'
import ru from '@/i18/ru.json'
import uz from '@/i18/uz.json'
import { createI18n } from 'vue-i18n'
const i18n = createI18n({
       messages:{
              uz:uz,
              en:en,
              ru:ru,
       },
       fallbackLocale: "en"
})
createApp(App).use(store).use(router).use(i18n).mount('#app')
