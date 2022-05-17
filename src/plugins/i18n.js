import { createI18n } from "vue-i18n";
import en from "@/i18/en.json";
import ru from "@/i18/ru.json";
import uz from "@/i18/uz.json";

const lang = localStorage.getItem("lang");
console.log(lang, "lang22")
const i18n = createI18n({
  messages: {
    uz,
    en,
    ru,
  },
  silentTranslationWarn: true,
  fallbackLocale: lang || 'en',
});


export default i18n;
