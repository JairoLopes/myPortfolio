<template>
  <footer class="relative bg-navBlack border-t border-white/5">
    <!-- Efeito de gradiente sutil no topo -->
    <div
      class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-thirdTheme/20 to-transparent"
    ></div>

    <div class="container mx-auto px-6 py-12 md:py-16">
      <div class="flex flex-col items-center gap-12">
        <!-- Seção de tecnologias -->
        <div class="w-full max-w-3xl">
          <div class="text-center mb-8">
            <h3
              class="text-lg md:text-xl font-medium text-myWhite/90 mb-3 tracking-wide"
            >
              {{ $t("footer.tecnologiasTitulo") }}
            </h3>
            <div
              class="w-12 h-0.5 bg-gradient-to-r from-thirdTheme to-secondaryTheme mx-auto rounded-full"
            ></div>
          </div>

          <div class="flex justify-center items-center gap-8 md:gap-12">
            <div
              v-for="(tech, index) in technologies"
              :key="index"
              class="flex flex-col items-center group"
            >
              <div class="relative">
                <Icon
                  :name="tech.icon"
                  class="text-2xl transition-colors duration-300"
                  :class="tech.color"
                />
                <!-- Efeito de brilho no hover -->
                <div
                  class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <div
                    class="absolute inset-0 rounded-full bg-thirdTheme/5 blur-sm"
                  ></div>
                </div>
              </div>
              <span
                class="mt-3 text-sm font-medium text-myWhite/70 group-hover:text-myWhite transition-colors duration-300"
              >
                {{ tech.tech }}
              </span>
            </div>
          </div>
        </div>

        <!-- Separador elegante -->
        <div class="w-full max-w-xs">
          <div class="flex items-center justify-center gap-4">
            <div
              class="flex-1 h-px bg-gradient-to-r from-transparent to-white/10"
            ></div>
            <div class="w-1 h-1 rounded-full bg-thirdTheme"></div>
            <div
              class="flex-1 h-px bg-gradient-to-l from-transparent to-white/10"
            ></div>
          </div>
        </div>

        <!-- Seção de links sociais e código -->
        <div
          class="flex flex-col md:flex-row items-center justify-between w-full max-w-2xl gap-8"
        >
          <!-- Código fonte  da pagina-->
          <div class="flex flex-col items-center md:items-start">
            <h4 class="text-sm font-medium text-myWhite/80 mb-3">
              {{ $t("footer.codigoTitulo") }}
            </h4>
            <a
              href="https://github.com/JairoLopes/myPortfolio"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-2 group"
            >
              <div
                class="relative p-2 rounded-lg bg-gradient-to-br from-white/5 to-transparent border border-white/5 group-hover:border-thirdTheme/30 transition-all duration-300"
              >
                <Icon
                  name="ion:logo-github"
                  class="text-2xl text-secondaryTheme group-hover:text-thirdTheme transition-all duration-300"
                />
              </div>
            </a>
          </div>

          <!-- CONTAINER PARA TITULO E Links sociais -->
          <div class="flex flex-col items-center md:items-end">
            <h4 class="text-sm font-medium text-myWhite/80 mb-3">
              {{ $t("home.social") }}
            </h4>

            <!-- CONTAINER DE ICONES DE REDE SOCIAIS -->
            <div class="flex items-center gap-4">
              <a
                v-for="social in socialLinks"
                :key="social.name"
                :href="social.url"
                target="_blank"
                rel="noopener noreferrer"
                class="p-2 rounded-lg transition-all duration-300 group"
                :aria-label="social.name"
              >
                <Icon
                  :name="social.icon"
                  class="text-2xl transition-colors duration-300 group-hover:scale-110"
                  :class="`text-myWhite/70 ${social.color}`"
                />
              </a>
            </div>
          </div>
        </div>

        <!-- Direitos autorais -->
        <div class="pt-8 border-t border-white/5 w-full text-center">
          <p class="text-sm text-myWhite/60 font-light tracking-wide">
            © {{ new Date().getFullYear() }}
            <span class="font-medium text-thirdTheme mx-2">Jairo Lopes</span>
            • Frontend Developer
          </p>
          <p class="text-xs text-myWhite/40 mt-2">
            Built with Vue.js, Nuxt 4, TailwindCSS, and TypeScript
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Dados das tecnologias usadas
const technologies = [
  {
    tech: "Vue.js",
    icon: "logos:vue",
    color: "text-thirdTheme",
  },
  {
    tech: "Nuxt",
    icon: "logos:nuxt-icon",
    color: "text-thirdTheme",
  },
  {
    tech: "TypeScript",
    icon: "logos:typescript-icon",
    color: "text-secondaryTheme",
  },
  {
    tech: "Tailwind CSS",
    icon: "logos:tailwindcss-icon",
    color: "text-mainTheme",
  },
];

const socialLinks = [
  {
    name: "GitHub",
    icon: "ion:logo-github",
    url: "https://github.com/JairoLopes",
    color: "hover:text-myWhite",
  },
  {
    name: "LinkedIn",
    icon: "ion:logo-linkedin",
    url: "https://www.linkedin.com/in/jairo-lopes-filho/",
    color: "hover:text-thirdTheme",
  },
];
</script>
