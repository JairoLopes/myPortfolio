<template>
  <section
    id="performance"
    class="min-h-screen flex flex-col items-center justify-start relative overflow-hidden px-4 sm:px-6 md:px-8 py-12 md:py-20"
  >
    <!-- Background sutil -->
    <div class="absolute inset-0 -z-10 bg-navBlack">
      <div
        class="absolute inset-0 bg-gradient-to-br from-thirdTheme/5 via-transparent to-secondaryTheme/5"
      ></div>
    </div>

    <!-- Container principal -->
    <div class="text-center z-10 w-full max-w-5xl mx-auto relative">
      <!-- Título da seção -->
      <h2
        v-motion="animations.scaleIn"
        class="text-2xl sm:text-3xl font-bold mb-8 text-myWhite"
      >
        {{ $t("performance.tituloSecao") }}
      </h2>

      <p
        v-motion="animations.slideUp"
        class="text-center font-semibold text-thirdTheme mb-12"
      >
        {{ $t("performance.subtituloSecao") }}
      </p>

      <!-- Navegação estilizada -->
      <nav class="flex justify-center gap-4 mb-12">
        <!-- LINK DE TECNICAS DE OTIMIZAÇÃO -->
        <NuxtLink
          to="/"
          class="px-6 py-3 rounded-lg transition-all duration-300"
          :class="{
            'gradient-btn text-navBlack font-bold': $route.path === '/',
            'bg-white/5 text-myWhite border border-white/10 hover:border-thirdTheme/30':
              $route.path !== '/',
          }"
        >
          {{ $t("performance.nav.tecnicas") }}
        </NuxtLink>

        <!-- LINK DE GLOSSÁRIO -->
        <NuxtLink
          to="/glossario"
          class="px-6 py-3 rounded-lg transition-all duration-300"
          :class="{
            'gradient-btn text-navBlack font-bold':
              $route.path === '/glossario',
            'bg-white/5 text-myWhite border border-white/10 hover:border-thirdTheme/30':
              $route.path !== '/glossario',
          }"
        >
          {{ $t("performance.nav.glossario") }}
        </NuxtLink>
      </nav>

      <!-- Conteúdo da rota -->
      <div class="min-h-[400px]">
        <NuxtPage />
      </div>

      <!-- CONTAINER FINAL DE IMPLEMENTAÇÕES EM PROJETOS REAIS-->
      <div
        v-motion="animations.slideUp"
        class="mt-16 pt-8 border-t border-white/10"
      >
        <div class="max-w-3xl mx-auto">
          <h3 class="text-lg font-bold text-myWhite mb-4">
            {{ $t("performance.implementacao.titulo") }}
          </h3>

          <div class="space-y-4 text-left">
            <p
              class="text-myWhite/70"
              v-html="$t('performance.implementacao.descricao')"
            ></p>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div
                class="p-4 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-xl"
              >
                <div class="flex items-center gap-3 mb-3">
                  <Icon
                    name="simple-icons:nuxtdotjs"
                    class="text-xl text-thirdTheme"
                  />
                  <h4 class="font-semibold text-myWhite">Nuxt SSR/SSG</h4>
                </div>
                <p class="text-sm text-myWhite/60">
                  {{
                    locale === "pt"
                      ? "Renderização híbrida com hidratação parcial para componentes dinâmicos"
                      : "Hybrid rendering with partial hydration for dynamic components"
                  }}
                </p>
              </div>

              <div
                class="p-4 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-xl"
              >
                <div class="flex items-center gap-3 mb-3">
                  <Icon name="logos:vue" class="text-xl text-thirdTheme" />
                  <h4 class="font-semibold text-myWhite">
                    {{
                      locale === "pt"
                        ? "Vue Async Components"
                        : "Vue Async Components"
                    }}
                  </h4>
                </div>
                <p class="text-sm text-myWhite/60">
                  <code class="text-thirdTheme">defineAsyncComponent()</code>
                  {{
                    locale === "pt"
                      ? "para carregamento sob demanda"
                      : "for on-demand loading"
                  }}
                </p>
              </div>

              <div
                class="p-4 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-xl"
              >
                <div class="flex items-center gap-3 mb-3">
                  <Icon
                    name="logos:typescript-icon"
                    class="text-xl text-thirdTheme"
                  />
                  <h4 class="font-semibold text-myWhite">
                    TypeScript + Tree Shaking
                  </h4>
                </div>
                <p class="text-sm text-myWhite/60">
                  {{
                    locale === "pt"
                      ? "Eliminação automática de código não utilizado via análise estática"
                      : "Automatic elimination of unused code via static analysis"
                  }}
                </p>
              </div>
            </div>

            <div
              class="mt-8 p-4 bg-gradient-to-r from-thirdTheme/10 to-secondaryTheme/10 border border-thirdTheme/20 rounded-xl"
            >
              <div class="flex items-start gap-3">
                <Icon
                  name="heroicons:light-bulb"
                  class="text-2xl text-thirdTheme mt-1 flex-shrink-0"
                />
                <div>
                  <h4 class="font-bold text-myWhite mb-2">
                    {{ $t("performance.implementacao.resultado.titulo") }}
                  </h4>
                  <p
                    class="text-sm text-myWhite/80"
                    v-html="$t('performance.implementacao.resultado.descricao')"
                  ></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Container do botão para testar performance -->
      <div
        v-motion="animations.slideUp"
        class="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
      >
        <a
          class="px-6 py-3 rounded-lg gradient-btn text-navBlack font-medium hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
          href="https://pagespeed.web.dev/analysis/https-jairolopes-dev-vercel-app/y99xz1c6rd?form_factor=mobile"
          target="_blank"
        >
          <Icon name="heroicons:chart-bar" class="w-5 h-5" />
          {{ $t("performance.testarPerformance") }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Importações das animações configuradas
import { animations } from "~/utils/animations";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();
</script>

<style scoped>
/* Estilos específicos do componente Performance */
code {
  font-family: "Courier New", monospace;
  font-size: 0.9em;
}

/* Melhora a legibilidade dos gradientes em cards */
.bg-gradient-to-br {
  background-attachment: fixed;
}

/* Efeito sutil para os cards de métricas */
.text-center.p-3 {
  transition: all 0.3s ease;
}

.text-center.p-3:hover {
  transform: translateY(-2px);
  border-color: rgba(45, 212, 191, 0.3);
}
</style>
