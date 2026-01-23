<template>
  <div class="glossary-content">
    <!-- Header clean -->
    <div class="mb-8">
      <h3
        v-motion="animations.slideUp"
        class="text-2xl font-bold text-thirdTheme mb-2"
      >
        {{ $t("performance.glossario.titulo") }}
      </h3>
      <p v-motion="animations.slideUp" class="text-sm text-myWhite/60">
        {{ $t("performance.glossario.subtitulo") }}
      </p>
    </div>

    <!-- Lista compacta com indicação visual -->
    <div class="space-y-3">
      <div
        v-for="(term, index) in glossaryTerms"
        :key="term.term"
        v-motion="animations.scaleIn"
        class="group"
      >
        <!-- Item compacto com hover sutil -->
        <div
          class="relative bg-gradient-to-r from-white/2 to-transparent border border-white/5 rounded-xl p-4 transition-all duration-300 hover:border-thirdTheme/20 cursor-pointer"
          :class="{ 'bg-white/5': expandedTerm === index }"
          @click="toggleTerm(index)"
        >
          <!-- Linha de cabeçalho -->
          <div class="flex items-start justify-between gap-3">
            <!-- Termo com ícone minimalista -->
            <div class="flex items-center gap-3 flex-1">
              <div
                class="w-6 h-6 rounded-full bg-thirdTheme/10 flex items-center justify-center flex-shrink-0"
              >
                <Icon
                  name="heroicons:information-circle"
                  class="w-3 h-3 text-thirdTheme"
                />
              </div>

              <div class="flex-1 min-w-0">
                <div class="flex items-center gap-2">
                  <h4 class="text-sm font-semibold text-myWhite truncate">
                    {{ term.term }}
                  </h4>
                  <span
                    class="text-xs px-2 py-0.5 rounded bg-thirdTheme/20 text-thirdTheme flex-shrink-0"
                  >
                    {{ term.category }}
                  </span>
                </div>

                <!-- Breve descrição (sempre visível) -->
                <p class="text-xs text-myWhite/50 mt-1 line-clamp-1">
                  {{ term.shortDescription }}
                </p>
              </div>
            </div>

            <!-- Ícone de toggle -->
            <Icon
              name="heroicons:chevron-down"
              class="w-4 h-4 text-myWhite/40 transition-transform duration-300 flex-shrink-0 mt-1"
              :class="{ 'rotate-180': expandedTerm === index }"
            />
          </div>

          <!-- Definição completa (expandida) -->
          <div
            class="overflow-hidden transition-all duration-300"
            :class="expandedTerm === index ? 'max-h-32 mt-4' : 'max-h-0'"
          >
            <div class="pl-9 pt-2 border-t border-white/10 mt-3">
              <p class="text-sm text-myWhite/70 leading-relaxed">
                {{ term.definition }}
              </p>

              <!-- Impacto prático -->
              <div class="mt-3 flex items-center gap-2">
                <Icon
                  name="heroicons:light-bulb"
                  class="w-4 h-4 text-thirdTheme flex-shrink-0"
                />
                <span class="text-xs text-thirdTheme/80">
                  {{ locale === "pt" ? "Impacto" : "Impact" }}:
                  {{ term.impact }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer informativo -->
    <div
      v-motion="animations.slideUp"
      class="mt-8 pt-6 border-t border-white/10"
    >
      <div class="flex items-center justify-between text-xs text-myWhite/40">
        <span
          >{{ glossaryTerms.length }}
          {{ $t("performance.glossario.footer.conceitos") }}</span
        >
        <span>{{ $t("performance.glossario.footer.clique") }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";
import { animations, staggerAnimations } from "~/utils/animations";

const { tm, locale } = useI18n();

const expandedTerm = ref<number | null>(null);

const toggleTerm = (index: number) => {
  expandedTerm.value = expandedTerm.value === index ? null : index;
};

// Obter termos do arquivo de tradução
const glossaryTerms = computed(() => {
  return tm("performance.glossario.itens") as Array<{
    term: string;
    category: string;
    shortDescription: string;
    definition: string;
    impact: string;
  }>;
});
</script>

<style scoped>
.glossary-content {
  max-height: 65vh;
  overflow-y: auto;
  padding-right: 8px;
}

/* Scrollbar elegante */
.glossary-content::-webkit-scrollbar {
  width: 5px;
}

.glossary-content::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 2.5px;
}

.glossary-content::-webkit-scrollbar-thumb {
  background: rgba(45, 212, 191, 0.3);
  border-radius: 2.5px;
}

.glossary-content::-webkit-scrollbar-thumb:hover {
  background: rgba(45, 212, 191, 0.5);
}

/* Limita texto a 1 linha */
.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
