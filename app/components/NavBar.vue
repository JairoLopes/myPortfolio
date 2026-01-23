<template>
  <nav
    :class="[
      isScrolling ? 'bg-navBlack' : 'bg-transparent',
      'fixed top-0 w-full z-40',
    ]"
  >
    <!-- CONTAINER QUE ENGLOBA TODA NAVBAR -->
    <div class="max-w-5xl mx-auto px-4 py-1">
      <div class="flex justify-between items-center h-16">
        <!-- Botão para mudar idioma -->
        <span
          class="px-5 flex flex-col items-center cursor-pointer active:scale-80 transition-all text-primaryTheme"
          @click="toggleLanguage"
        >
          <Icon name="material-symbols:language" class="text-2xl" />
          <span class="text-white">{{ locale === "pt" ? "en" : "pt" }}</span>
        </span>

        <!-- CONTAINER DO ICONE HAMBURGUER (aparece apenas em telas pequenas) -->
        <div
          id="burger-zip"
          class="w-7 h-5 cursor-pointer z-40 md:hidden"
          @click="toggleMenu"
        >
          <!-- Ícone do menu (hamburger) em SVG -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="stroke-2"
          >
            <line x1="3" x2="21" y1="12" y2="12"></line>
            <line x1="3" x2="21" y1="6" y2="6"></line>
            <line x1="3" x2="21" y1="18" y2="18"></line>
          </svg>
        </div>

        <!-- CONTAINER DO MENU (aparece apenas em telas grandes) -->
        <div class="hidden md:flex items-center space-x-8 font-extrabold">
          <!-- HOME -->
          <a
            href="#home"
            class="text-gray-300 hover:text-gray-300 hover:drop-shadow-lg transition-all relative group py-2"
          >
            {{ $t("navbar.menu.home") }}
            <span
              class="absolute left-1/2 -bottom-0.5 w-0 h-0.5 bg-thirdTheme group-hover:w-full transition-all duration-500 -translate-x-1/2"
            ></span>
          </a>

          <!-- ABOUT -->
          <a
            href="#about"
            class="text-gray-300 hover:text-gray-300 hover:drop-shadow-lg transition-all relative group py-2"
          >
            {{ $t("navbar.menu.sobre") }}
            <span
              class="absolute left-1/2 -bottom-0.5 w-0 h-0.5 bg-thirdTheme group-hover:w-full transition-all duration-500 -translate-x-1/2"
            ></span>
          </a>

          <!-- TEMPLATES -->
          <a
            href="#templates"
            class="text-gray-300 hover:text-gray-300 hover:drop-shadow-lg transition-all relative group py-2"
          >
            {{ $t("navbar.menu.templates") }}
            <span
              class="absolute left-1/2 -bottom-0.5 w-0 h-0.5 bg-thirdTheme group-hover:w-full transition-all duration-500 -translate-x-1/2"
            ></span>
          </a>

          <!-- PROJETOS -->
          <a
            href="#projects"
            class="text-gray-300 hover:text-gray-300 hover:drop-shadow-lg transition-all relative group py-2"
          >
            {{ $t("navbar.menu.projetos") }}
            <span
              class="absolute left-1/2 -bottom-0.5 w-0 h-0.5 bg-thirdTheme group-hover:w-full transition-all duration-500 -translate-x-1/2"
            ></span>
          </a>

          <!-- PERFORMANCE -->
          <a
            href="#performance"
            class="text-gray-300 hover:text-gray-300 hover:drop-shadow-lg transition-all relative group py-2"
          >
            {{ $t("navbar.menu.performance") }}
            <span
              class="absolute left-1/2 -bottom-0.5 w-0 h-0.5 bg-thirdTheme group-hover:w-full transition-all duration-500 -translate-x-1/2"
            ></span>
          </a>

          <!-- EXPERIENCIA -->
          <a
            href="#experiencia"
            class="text-gray-300 hover:text-gray-300 hover:drop-shadow-lg transition-all relative group py-2"
          >
            {{ $t("navbar.menu.experiencia") }}
            <span
              class="absolute left-1/2 -bottom-0.5 w-0 h-0.5 bg-thirdTheme group-hover:w-full transition-all duration-500 -translate-x-1/2"
            ></span>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { computed, watch, onUnmounted } from "vue";
import { useI18n } from "vue-i18n";
import { useScroll } from "@vueuse/core";

const { locale } = useI18n();

function toggleLanguage() {
  locale.value = locale.value === "pt" ? "en" : "pt";
}

const { y } = useScroll(window, {
  throttle: 300,
});

// Usar um pequeno threshold (ex: 10px) costuma ser mais estável visualmente
// do que y.value > 0 para evitar "flicker" em scrolls milimétricos.
const isScrolling = computed(() => y.value > 10);

/* --------------------------
   Propriedades e emits
   -------------------------- */
const props = defineProps<{
  menuOpen: boolean;
}>();

const emit = defineEmits(["update:menuOpen"]);

/* --------------------------
   Controle do overflow (SSR Safe)
   -------------------------- */
watch(
  () => props.menuOpen,
  (newValue) => {
    // IMPORTANTE: No Nuxt, sempre verifique se está no cliente antes de tocar no 'document'
    if (import.meta.client) {
      document.body.style.overflow = newValue ? "hidden" : "";
    }
  },
);

onUnmounted(() => {
  if (import.meta.client) {
    document.body.style.overflow = "";
  }
});

const toggleMenu = () => {
  emit("update:menuOpen", !props.menuOpen);
};
</script>
