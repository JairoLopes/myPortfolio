<template>
  <section
    id="about"
    class="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4 sm:px-6 md:px-8 py-12 md:py-20"
  >
    <!-- Container principal -->
    <div class="text-center z-10 w-full max-w-5xl mx-auto relative">
      <!-- Título minimalista -->
      <h2
        v-motion="animations.slideUp"
        class="text-3xl md:text-4xl font-bold mb-12 text-myWhite"
      >
        {{ $t("sobre.titulo") }}
      </h2>

      <!-- Container da foto -->
      <div v-motion="animations.scaleIn" class="flex justify-center mb-12">
        <NuxtImg
          src="/img/perfil.jpeg"
          alt="Profile Image"
          class="w-28 h-28 md:w-35 md:h-35 -rotate-35 border-2 border-mainTheme/40 rounded-full object-cover shadow-lg"
        />
      </div>

      <!-- Container de formação -->
      <div class="text-center mb-16 px-4">
        <h3
          v-motion="animations.slideUp"
          class="text-xl sm:text-2xl font-bold mb-6 text-thirdTheme"
        >
          {{ $t("sobre.formacao") }}
        </h3>

        <div v-motion="animations.slideUp" class="max-w-3xl mx-auto">
          <p
            v-html="$t('sobre.descricao')"
            class="text-sm sm:text-[16px] text-start text-myWhite/90 leading-relaxed"
          ></p>
        </div>
      </div>

      <!-- Container de tecnologias - Versão enxuta -->
      <div class="mt-4">
        <!-- Título minimalista -->
        <div v-motion="animations.scaleIn" class="mb-12">
          <h3 class="text-xl sm:text-2xl font-bold text-mainTheme">
            {{ $t("sobre.tecnologias") }}
          </h3>
          <div
            class="w-16 h-px bg-gradient-to-r from-thirdTheme to-secondaryTheme mx-auto mt-2"
          ></div>
        </div>

        <!-- Grid de skills enxuto -->
        <div
          class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6"
        >
          <div
            v-for="(skill, index) in skills"
            :key="index"
            v-motion="staggerAnimations.scaleIn(index)"
            class="group"
          >
            <div
              class="flex flex-col items-center p-2 transition-all duration-300 hover:border-thirdTheme/30 hover:shadow-lg"
            >
              <!-- Ícone -->
              <div class="mb-3 relative">
                <Icon
                  :name="skill.icon"
                  class="text-3xl transition-colors duration-300"
                  :class="[
                    'text-amber-500',
                    skill.tech === 'Nuxt' ? 'text-emerald-500' : '',
                    skill.tech === 'JavaScript' ? 'text-amber-50' : '',
                  ]"
                />
              </div>

              <!-- Nome da tecnologia -->
              <div class="text-center mb-2">
                <span class="text-sm font-medium text-myWhite">
                  {{ skill.tech }}
                </span>
              </div>

              <!-- Nível simplificado - apenas pontos coloridos -->
              <div class="flex justify-center gap-1 mt-1">
                <div
                  v-for="n in 5"
                  :key="n"
                  class="w-1.5 h-1.5 rounded-full transition-colors duration-300"
                  :class="{
                    'bg-thirdTheme': n <= skill.level,
                    'bg-white/20': n > skill.level,
                  }"
                ></div>
              </div>

              <!-- Badge de nível (só aparece no hover) -->
              <div
                class="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <span
                  class="text-xs px-2 py-1 rounded-full"
                  :class="getLevelClass(skill.level)"
                >
                  {{ getLevelText(skill.level) }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Separador minimalista -->
      <div
        class="h-px bg-gradient-to-r from-transparent via-thirdTheme/20 to-transparent mx-auto mt-16 w-32"
      ></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();

// Array de skills simplificado
const skills = [
  { tech: "Vue.js", icon: "logos:vue", level: 5 },
  { tech: "Nuxt", icon: "logos:nuxt-icon", level: 4 },
  { tech: "Tailwind", icon: "logos:tailwindcss-icon", level: 5 },
  { tech: "Nuxt UI", icon: "simple-icons:nuxtdotjs", level: 4 },
  { tech: "Typescript", icon: "logos:typescript-icon", level: 4 },
  { tech: "React", icon: "logos:react", level: 3 },
  { tech: "JavaScript", icon: "logos:javascript", level: 4 },
  { tech: "Node.js", icon: "logos:nodejs-icon", level: 3 },
];

// Funções auxiliares
const getLevelText = (level: number) => {
  if (level === 5) return t("sobre.niveis.especialista");
  if (level === 4) return t("sobre.niveis.intermediario");
  if (level <= 3) return t("sobre.niveis.basico");
  return "Básico";
};

/* Define a cor do nível(especialista, intermediario, básico) dependendo do valor do level */
const getLevelClass = (level: number) => {
  if (level === 5)
    return "bg-thirdTheme/20 text-thirdTheme border border-thirdTheme/30";
  if (level === 4) return "bg-sky-400/20 text-sky-500 border border-sky-500/30";
  return "bg-mainTheme/20 text-mainTheme border border-mainTheme/30";
};
</script>
