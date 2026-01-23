<template>
  <section
    id="templates"
    class="min-h-screen flex flex-col items-center justify-start relative overflow-hidden px-4 sm:px-6 md:px-8 py-12 md:py-20"
  >
    <!-- Container principal -->
    <div class="text-center z-10 w-full max-w-5xl mx-auto relative">
      <!-- Título da seção -->
      <h2
        v-motion="animations.scaleIn"
        class="text-2xl sm:text-3xl font-bold mb-8 text-myWhite"
      >
        {{ $t("templates.tituloSecao") }}
      </h2>

      <p
        v-motion="animations.slideUp"
        class="text-center font-semibold text-thirdTheme mb-12"
      >
        {{ $t("templates.subtituloSecao") }}
      </p>

      <!-- Container dos templates -->
      <div class="mt-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(template, index) in templates"
            :key="index"
            v-motion="staggerAnimations.scaleIn(index)"
            class="group"
          >
            <!-- Card do template -->
            <div
              class="relative bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:border-thirdTheme/30 hover:shadow-lg hover:shadow-thirdTheme/10 group-hover:-translate-y-1"
            >
              <!-- Badge de destaque -->
              <div v-if="template.destaque" class="absolute -top-2 -right-2">
                <span
                  class="px-3 py-1 text-xs font-bold bg-thirdTheme text-navBlack rounded-full"
                >
                  {{ $t("templates.destaque") }}
                </span>
              </div>

              <!-- Conteúdo -->
              <div class="space-y-4">
                <!-- Informações -->
                <div class="text-left">
                  <h3 class="text-xl text-center font-bold text-myWhite mb-5">
                    {{ template.nome }}
                  </h3>
                  <p class="text-sm text-myWhite/70 mb-4">
                    {{ template.desc }}
                  </p>

                  <!-- Tecnologias -->
                  <div class="mb-4">
                    <p
                      class="text-xs text-thirdTheme/70 font-medium uppercase tracking-wider mb-2"
                    >
                      {{ locale === "pt" ? "TECNOLOGIAS" : "TECHNOLOGIES" }}
                    </p>
                    <div class="flex flex-wrap gap-2">
                      <span
                        v-for="tech in template.tech_usadas"
                        :key="tech"
                        class="px-2 py-1 text-xs font-medium rounded-full border border-white/10 bg-white/5 text-myWhite/70"
                      >
                        {{ tech }}
                      </span>
                    </div>
                  </div>

                  <!-- Recursos -->
                  <div class="mb-6">
                    <p
                      class="text-xs text-thirdTheme/70 font-medium uppercase tracking-wider mb-2"
                    >
                      {{ locale === "pt" ? "RECURSOS" : "RESOURCES" }}
                    </p>
                    <ul class="space-y-1">
                      <li
                        v-for="recurso in template.recursos"
                        :key="recurso"
                        class="text-sm text-myWhite/70 flex items-center gap-2"
                      >
                        <Icon
                          name="heroicons:check-circle"
                          class="w-4 h-4 text-thirdTheme"
                        />
                        {{ recurso }}
                      </li>
                    </ul>
                  </div>

                  <!-- Preço e ações -->
                  <div class="pt-4 border-t border-white/10">
                    <div
                      class="p-2 flex flex-col gap-1 items-center justify-between mb-4"
                    >
                      <!-- CONTAINER DOS PREÇOS -->
                      <div>
                        <!-- PREÇO EM DESTAQUE -->
                        <span class="text-2xl font-bold text-thirdTheme">
                          {{ template.preco }}
                        </span>

                        <!-- PREÇO CORTADO -->
                        <span class="text-sm text-myWhite/50 line-through ml-2">
                          {{ template.preco_original }}
                        </span>
                      </div>

                      <!-- FRASE SOBRE A LICENÇA -->
                      <span class="text-xs text-myWhite/50">{{
                        template.licenca
                      }}</span>
                    </div>

                    <!-- CONTAINER DOS BOTÕES DE VER DEMO E COMPRAR  -->
                    <div class="flex flex-col sm:flex-row gap-3">
                      <a
                        :href="template.demo"
                        target="_blank"
                        class="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-thirdTheme text-thirdTheme font-medium hover:bg-thirdTheme/10 transition-colors duration-300 text-center"
                      >
                        <!-- POR ICONE DE OLHO AQUI -->
                        <Icon
                          name="ic:baseline-remove-red-eye"
                          class="text-xl"
                        />
                        {{ $t("templates.verDemo") }}
                      </a>
                      <a
                        :href="template.comprar"
                        target="_blank"
                        class="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg gradient-btn text-navBlack font-medium hover:scale-105 transition-all duration-300 text-center"
                      >
                        <!-- POR ÍCONE DE CARRINHO AQUI -->
                        <Icon name="ic:round-shopping-cart" class="text-xl" />
                        {{ $t("templates.comprarAgora") }}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Informação de personalização -->
      <div class="mt-16 pt-8 border-t border-white/10">
        <div class="text-center">
          <h3
            v-motion="animations.slideUp"
            class="text-lg font-bold text-myWhite mb-2"
          >
            {{ $t("templates.personalizacao") }}
          </h3>
          <p
            v-motion="animations.slideUp"
            class="text-myWhite/70 mb-6 max-w-2xl mx-auto"
          >
            {{ $t("templates.entreEmContato") }}
          </p>

          <!-- BOTÃO DE CONTATO -->
          <a
            v-motion="animations.slideUp"
            :href="locale === 'en' ? `${link.en}` : `${link.pt}`"
            target="_blank"
            class="inline-flex items-center gap-2 px-6 py-3 rounded-lg gradient-btn text-navBlack font-medium hover:scale-105 transition-all duration-300"
          >
            <Icon name="heroicons:chat-bubble-left-right" class="w-5 h-5" />
            {{ $t("navbar.menu.contato") }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { computed } from "vue";

const { tm, locale } = useI18n();

const msgPt = encodeURIComponent("Olá, gostaria de fazer um site com você.");
const msgEn = encodeURIComponent(
  "Hello, I would like to make a website with you."
);
const link = {
  pt: `https://wa.me/5581997052877?text=${msgPt}`,
  en: `https://t.me/Lopes_93?text=${msgEn}`,
};

const templates = computed(() => {
  return tm("templates.lista") as Array<{
    nome: string;
    desc: string;
    tech_usadas: string[];
    recursos: string[];
    demo: string;
    comprar: string;
    preco: string;
    preco_original: string;
    licenca: string;
    destaque: boolean;
  }>;
});
</script>
