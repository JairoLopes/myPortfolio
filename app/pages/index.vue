<template>
  <div>
    <!-- Introdução explicativa -->
    <div class="text-center mb-12">
      <h2
        v-motion="animations.slideUp"
        class="text-2xl md:text-3xl font-bold text-myWhite mb-4"
      >
        {{ $t("performance.index.titulo") }}
      </h2>
      <p
        v-motion="animations.slideUp"
        class="text-myWhite/70 max-w-3xl mx-auto text-sm md:text-base leading-relaxed"
        v-html="$t('performance.index.descricao')"
      ></p>

      <!-- Métricas de referência -->
      <div
        v-motion="staggerAnimations.slideUp"
        class="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto"
      >
        <div
          class="text-center p-3 bg-white/5 rounded-lg border border-white/10"
        >
          <div class="text-lg font-bold text-thirdTheme">LCP &lt; 2.5s</div>
          <div class="text-xs text-myWhite/60">
            {{ $t("performance.index.metricas.lcp") }}
          </div>
        </div>
        <div
          class="text-center p-3 bg-white/5 rounded-lg border border-white/10"
        >
          <div class="text-lg font-bold text-secondaryTheme">CLS &lt; 0.1</div>
          <div class="text-xs text-myWhite/60">
            {{ $t("performance.index.metricas.cls") }}
          </div>
        </div>
        <div
          class="text-center p-3 bg-white/5 rounded-lg border border-white/10"
        >
          <div class="text-lg font-bold text-mainTheme">FCP &lt; 1.8s</div>
          <div class="text-xs text-myWhite/60">
            {{ $t("performance.index.metricas.fcp") }}
          </div>
        </div>
        <div
          class="text-center p-3 bg-white/5 rounded-lg border border-white/10"
        >
          <div class="text-lg font-bold text-fourthTheme">TBT &lt; 200ms</div>
          <div class="text-xs text-myWhite/60">
            {{ $t("performance.index.metricas.tbt") }}
          </div>
        </div>
      </div>
    </div>

    <!-- Cards das técnicas -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mt-12">
      <!-- Técnica 1: Lazy Hydration -->
      <div v-motion="staggerAnimations.scaleIn(0)" class="group">
        <div
          class="relative bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:border-thirdTheme/30 hover:shadow-lg hover:shadow-thirdTheme/10 group-hover:-translate-y-1"
        >
          <!-- Indicador de importância -->
          <div class="absolute -top-2 left-4">
            <span
              class="px-3 py-1 text-xs font-bold bg-thirdTheme/20 text-thirdTheme rounded-full"
            >
              {{ locale === "pt" ? "Alta Prioridade" : "High Priority" }}
            </span>
          </div>

          <!-- Cabeçalho do card -->
          <div class="flex items-start gap-4 mb-6">
            <div
              class="p-3 rounded-xl bg-gradient-to-br from-thirdTheme/20 to-secondaryTheme/20"
            >
              <Icon name="heroicons:clock" class="text-2xl text-thirdTheme" />
            </div>
            <div>
              <h3 class="text-xl font-bold text-myWhite">
                {{ $t("performance.index.tecnica1.titulo") }}
              </h3>
              <p class="text-sm text-thirdTheme mt-1">
                {{ $t("performance.index.tecnica1.impacto") }}
              </p>
            </div>
          </div>

          <!-- Conteúdo -->
          <div class="space-y-4 text-left">
            <p
              class="text-myWhite/70"
              v-html="$t('performance.index.tecnica1.descricao')"
            ></p>

            <!-- Aplicações práticas -->
            <div class="space-y-3">
              <h4
                class="text-sm font-semibold text-thirdTheme uppercase tracking-wider"
              >
                {{ $t("performance.index.tecnica1.ondeAplicar") }}
              </h4>

              <ul class="space-y-2">
                <li
                  v-for="(ponto, index) in $tm(
                    'performance.index.tecnica1.pontos',
                  )"
                  :key="index"
                  class="flex items-start gap-2"
                >
                  <Icon
                    name="heroicons:check-circle"
                    class="w-5 h-5 text-thirdTheme mt-0.5 flex-shrink-0"
                  />
                  <span class="text-sm text-myWhite/80" v-html="ponto"></span>
                </li>
              </ul>
            </div>

            <!-- Benefícios -->
            <div
              class="mt-6 p-4 bg-gradient-to-r from-thirdTheme/10 to-transparent border border-thirdTheme/20 rounded-lg"
            >
              <div class="flex items-center gap-3">
                <Icon
                  name="heroicons:chart-bar"
                  class="text-xl text-thirdTheme"
                />
                <div>
                  <h4 class="font-semibold text-myWhite mb-1">
                    {{ $t("performance.index.tecnica1.resultado.titulo") }}
                  </h4>
                  <p class="text-sm text-myWhite/70">
                    {{ $t("performance.index.tecnica1.resultado.descricao") }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Técnica 2: Lazy Loading Estratégico -->
      <div v-motion="staggerAnimations.scaleIn(1)" class="group">
        <div
          class="relative bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:border-thirdTheme/30 hover:shadow-lg hover:shadow-thirdTheme/10 group-hover:-translate-y-1"
        >
          <!-- Indicador de importância -->
          <div class="absolute -top-2 left-4">
            <span
              class="px-3 py-1 text-xs font-bold bg-secondaryTheme/20 text-secondaryTheme rounded-full"
            >
              {{ locale === "pt" ? "Performance Móvel" : "Mobile Performance" }}
            </span>
          </div>

          <!-- Cabeçalho do card -->
          <div class="flex items-start gap-4 mb-6">
            <div
              class="p-3 rounded-xl bg-gradient-to-br from-thirdTheme/20 to-secondaryTheme/20"
            >
              <Icon
                name="heroicons:arrow-down-tray"
                class="text-2xl text-thirdTheme"
              />
            </div>
            <div>
              <h3 class="text-xl font-bold text-myWhite">
                {{ $t("performance.index.tecnica2.titulo") }}
              </h3>
              <p class="text-sm text-secondaryTheme mt-1">
                {{ $t("performance.index.tecnica2.impacto") }}
              </p>
            </div>
          </div>

          <!-- Conteúdo -->
          <div class="space-y-4 text-left">
            <p
              class="text-myWhite/70"
              v-html="$t('performance.index.tecnica2.descricao')"
            ></p>

            <!-- Estratégias combinadas -->
            <div class="space-y-3">
              <h4
                class="text-sm font-semibold text-thirdTheme uppercase tracking-wider"
              >
                {{ $t("performance.index.tecnica2.estrategias") }}
              </h4>

              <ul class="space-y-2">
                <li
                  v-for="(ponto, index) in $tm(
                    'performance.index.tecnica2.pontos',
                  )"
                  :key="index"
                  class="flex items-start gap-2"
                >
                  <Icon
                    name="heroicons:check-circle"
                    class="w-5 h-5 text-thirdTheme mt-0.5 flex-shrink-0"
                  />
                  <span class="text-sm text-myWhite/80" v-html="ponto"></span>
                </li>
              </ul>
            </div>

            <!-- Impacto nas métricas -->
            <div class="grid grid-cols-2 gap-4 mt-6">
              <div
                class="text-center p-3 bg-gradient-to-br from-white/5 to-transparent rounded-lg border border-white/10"
              >
                <div class="text-2xl font-bold text-thirdTheme">92%</div>
                <div class="text-xs text-myWhite/60 mt-1">
                  {{ $t("performance.index.tecnica2.metricas.tbt") }}
                </div>
              </div>
              <div
                class="text-center p-3 bg-gradient-to-br from-white/5 to-transparent rounded-lg border border-white/10"
              >
                <div class="text-2xl font-bold text-secondaryTheme">3.2s</div>
                <div class="text-xs text-myWhite/60 mt-1">
                  {{ $t("performance.index.tecnica2.metricas.fcp") }}
                </div>
              </div>
              <div
                class="text-center p-3 bg-gradient-to-br from-white/5 to-transparent rounded-lg border border-white/10"
              >
                <div class="text-2xl font-bold text-mainTheme">98</div>
                <div class="text-xs text-myWhite/60 mt-1">
                  {{ $t("performance.index.tecnica2.metricas.score") }}
                </div>
              </div>
              <div
                class="text-center p-3 bg-gradient-to-br from-white/5 to-transparent rounded-lg border border-white/10"
              >
                <div class="text-2xl font-bold text-fourthTheme">1.1MB</div>
                <div class="text-xs text-myWhite/60 mt-1">
                  {{ $t("performance.index.tecnica2.metricas.bundle") }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Conexão com o glossário -->
    <div
      v-motion="animations.slideUp"
      class="mt-16 pt-8 border-t border-white/10"
    >
      <div class="text-center max-w-2xl mx-auto">
        <div class="flex items-center justify-center gap-3 mb-4">
          <Icon name="heroicons:book-open" class="text-2xl text-thirdTheme" />
          <h3 class="text-lg font-bold text-myWhite">
            {{ $t("performance.index.glossarioLink.titulo") }}
          </h3>
        </div>
        <p
          class="text-myWhite/70 mb-6"
          v-html="$t('performance.index.glossarioLink.descricao')"
        ></p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// Importações das animações
import { animations, staggerAnimations } from "~/utils/animations";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();
</script>
