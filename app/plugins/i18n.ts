import { createI18n } from "vue-i18n";

// Importa os arquivos de tradução
import pt from "@/locales/pt.json";
import en from "@/locales/en.json";

type MessageSchema = typeof pt | typeof en;

export default defineNuxtPlugin((nuxtApp) => {
  const i18n = createI18n<[MessageSchema], "pt" | "en">({
    legacy: false, // permite Composition API
    locale: "en", // idioma padrão
    fallbackLocale: "en",
    messages: {
      pt,
      en,
    },
    warnHtmlMessage: false, // Desativa avisos de HTML
  });

  nuxtApp.vueApp.use(i18n);
});
