<template>
  <section
    id="home"
    class="min-h-screen flex flex-col items-center justify-center relative z-20 overflow-hidden pt-[7%] px-4 sm:px-6 md:px-8"
  >
    <!-- Background do Home -->
    <BackgroundVideo />

    <!-- Container principal com mais espaçamento -->
    <div
      class="text-center z-10 w-full max-w-4xl mx-auto relative py-12 md:py-20"
    >
      <!-- Nome sem gradiente, cor clara do tema -->
      <h1
        v-motion="animations.scaleIn"
        class="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-10 text-mainTheme px-4"
      >
        Jairo Lopes
      </h1>

      <!-- Container da animação crossfade isolada -->
      <div v-motion="animations.slideUp" class="mb-2 md:mb-7 px-4">
        <CrossfadeTech
          :textos="[
            'Vue.js',
            'Pinia',
            'Nuxt',
            'Tailwind CSS',
            'Nuxt UI',
            'Typescript',
            'JavaScript',
            'Node.js',
          ]"
          classes-tw="text-2xl md:text-3xl lg:text-4xl font-bold text-secondaryTheme"
        />
      </div>

      <!-- Descrição -->
      <div
        v-motion="animations.slideUp"
        class="max-w-2xl mx-auto mb-6 md:mb-10 px-6 relative"
      >
        <p
          v-html="$t('home.descricao')"
          class="text-md md:text-lg text-left text-myWhite leading-relaxed p-3"
        ></p>
      </div>

      <!-- Botões templates e projetos-->
      <div
        class="flex max-smm:flex-col flex-row justify-center items-center gap-4 md:gap-6 mb-4 px-4"
      >
        <!-- Botão Templates -->
        <a
          v-motion="animations.slideLeft"
          href="#templates"
          class="group relative px-6 py-3 rounded-xl gradient-btn max-smm:min-w-[169px] overflow-hidden transition-all duration-100 hover:scale-105"
        >
          <!-- SPAN QUE ENGLOBA ICONE E TEXTO DO BOTÃO -->
          <span
            class="text-navBlack font-bold text-[16px] tracking-wide flex items-center gap-3 relative z-10"
          >
            <Icon
              name="ri:layout-2-fill"
              class="text-xl transition-transform duration-400 group-hover:animate-"
            />
            {{ $t("home.templates") }}
          </span>
        </a>

        <!-- Botão Projetos -->
        <a
          v-motion="animations.slideRight"
          href="#projects"
          class="group relative px-6 py-3 max-smm:min-w-[169px] rounded-xl gradient-btn overflow-hidden transition-all duration-100 hover:scale-105"
        >
          <!-- SPAN QUE ENGLOBA ICONE E TEXTO DO BOTÃO -->
          <span
            class="text-navBlack font-bold text-[16px] tracking-wide flex items-center gap-3 relative z-10"
          >
            <Icon
              name="fa:code"
              class="text-xl transition-transform duration-400 group-hover:-rotate-20"
            />
            {{ $t("home.projetos") }}
          </span>
        </a>
      </div>

      <!-- Container que engloba botao contatos EN e PT -->
      <div v-motion="animations.slideUp" class="flex justify-center mb-17">
        <!-- Botão Contato EN(TELEGRAM)-->
        <a
          v-if="locale === 'en'"
          :href="link.en"
          target="_blank"
          class="group relative bg-deepBlue max-smm:min-w-[169px] border border-thirdTheme px-6 py-3 rounded-xl transition-all duration-500 hover:scale-105"
        >
          <!-- SPAN QUE ENGLOBA ICONE E TEXTO DO BOTÃO -->
          <span
            class="text-thirdTheme font-bold text-[16px] tracking-wide flex text-center items-center gap-3"
          >
            <Icon name="simple-icons:telegram" class="text-xl" />
            {{ $t("home.contato") }}
          </span>
        </a>

        <!-- Botão Contato PT(WHATSAPP)-->
        <a
          v-if="locale === 'pt'"
          :href="link.pt"
          target="_blank"
          class="group relative min-w-[169px] bg-deepBlue border border-thirdTheme px-6 py-3 rounded-xl transition-all duration-500 hover:scale-105"
        >
          <!-- SPAN QUE ENGLOBA ICONE E TEXTO DO BOTÃO -->
          <span
            class="text-thirdTheme font-bold text-[16px] tracking-wide flex items-center gap-3"
          >
            <Icon name="ri:whatsapp-fill" class="text-xl" />
            {{ $t("home.contato") }}
          </span>
        </a>
      </div>

      <!-- Container que engloba subcontainer de icones do linkedin e  github -->
      <div class="flex flex-col justify-center items-center gap-6 relative">
        <p
          v-motion="animations.slideUp"
          class="text-myWhite/90 text-[16px] mb-3 font-medium tracking-wider hidden sm:block"
        >
          {{ $t("home.social") }}
        </p>

        <!-- CONTAINER DE LINKEDIN E GITHUB-->
        <div v-motion="animations.slideUp" class="flex gap-3">
          <!-- LinkedIn -->
          <a
            href="https://www.linkedin.com/in/jairo-lopes-filho/"
            target="_blank"
            aria-label="LinkedIn"
            class="hover:scale-110 transition-all duration-300"
          >
            <Icon name="mdi:linkedin" class="text-4xl text-fourthTheme" />
          </a>

          <!-- GitHub -->
          <a
            href="https://github.com/JairoLopes"
            target="_blank"
            aria-label="GitHub"
            class="hover:scale-110 transition-all duration-300"
          >
            <Icon name="mdi:github" class="text-4xl text-fourthTheme" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import CrossfadeTech from "./CrossfadeTech.vue";
import BackgroundVideo from "./BackgroundVideo.vue";
import { useI18n } from "vue-i18n";
import { animations } from "~/utils/animations";

const { locale } = useI18n();

const msgPt = encodeURIComponent("Olá, gostaria de fazer um site com você.");
const msgEn = encodeURIComponent(
  "Hello, I would like to make a website with you."
);
const link = {
  pt: `https://wa.me/5581997052877?text=${msgPt}`,
  en: `https://t.me/Lopes_93?text=${msgEn}`,
};
</script>
