<template>
  <section
    id="experiencia"
    class="min-h-screen flex flex-col items-center justify-start pt-[10%] pb-20 px-4"
  >
    <!-- Container principal -->
    <div class="max-w-6xl mx-auto w-full">
      <!-- Cabeçalho da seção -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center justify-center gap-3 mb-6">
          <div
            class="w-10 h-px bg-gradient-to-r from-transparent to-thirdTheme"
          ></div>
          <Icon
            name="heroicons:briefcase"
            class="text-3xl text-thirdTheme animate-pulse"
          />
          <div
            class="w-10 h-px bg-gradient-to-l from-transparent to-thirdTheme"
          ></div>
        </div>

        <h3
          v-motion="animations.scaleIn"
          class="text-3xl sm:text-4xl font-bold mb-4 text-myWhite"
        >
          {{ $t("experiencia.tituloSecao") }}
        </h3>

        <p
          v-motion="animations.slideUp"
          class="text-[13px] sm:text-[16px] text-thirdTheme/80 font-medium max-w-2xl mx-auto"
        >
          {{ $t("experiencia.subtituloSecao") }}
        </p>
      </div>

      <!-- Container da timeline -->
      <div class="relative">
        <!-- Linha central para desktop -->
        <div
          class="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full"
        >
          <div
            class="absolute inset-0 bg-gradient-to-b from-thirdTheme/20 via-thirdTheme/40 to-secondaryTheme/20"
          ></div>
          <div
            class="absolute inset-0 bg-gradient-to-b from-transparent via-thirdTheme/10 to-transparent animate-pulse"
          ></div>
        </div>

        <!-- Cards da timeline -->
        <div class="space-y-12 lg:space-y-0">
          <div
            v-for="(item, index) in exp"
            :key="index"
            v-motion="staggerAnimations.scaleIn(index)"
            :class="[
              'relative',
              index % 2 === 0 ? 'lg:pr-1/2 lg:pl-4' : 'lg:pl-1/2 lg:pr-4',
              'lg:pt-8',
            ]"
          >
            <!-- Card principal -->
            <div
              class="group relative bg-gradient-to-br from-white/3 via-white/2 to-transparent border border-white/10 rounded-2xl p-6 md:p-8 transition-all duration-500 hover:border-thirdTheme/40 hover:shadow-2xl hover:shadow-thirdTheme/5 overflow-hidden"
            >
              <!-- Efeito de brilho no hover -->
              <div
                class="absolute inset-0 bg-gradient-to-br from-thirdTheme/5 via-transparent to-secondaryTheme/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              ></div>

              <!-- Indicador de ano (mobile) -->
              <div class="lg:hidden mb-6">
                <div class="inline-flex items-center gap-3">
                  <div
                    class="w-6 h-px bg-gradient-to-r from-thirdTheme to-secondaryTheme"
                  ></div>
                  <span
                    class="px-4 py-2 text-sm font-bold bg-gradient-to-r from-thirdTheme to-secondaryTheme bg-clip-text text-transparent border border-thirdTheme/30 rounded-full"
                  >
                    {{ item.ano }}
                  </span>
                  <div
                    class="w-6 h-px bg-gradient-to-l from-thirdTheme to-secondaryTheme"
                  ></div>
                </div>
              </div>

              <!-- Conteúdo -->
              <div class="relative z-10">
                <!-- Cabeçalho com ícone -->
                <div class="flex items-start gap-4 mb-6">
                  <div class="flex-shrink-0">
                    <div
                      class="p-3 rounded-xl bg-gradient-to-br from-thirdTheme/15 to-secondaryTheme/10 border border-white/10"
                    >
                      <Icon
                        :name="getExperienceIcon(item.titulo)"
                        class="text-2xl text-thirdTheme"
                      />
                    </div>
                  </div>

                  <div class="flex-1">
                    <div
                      class="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2"
                    >
                      <h3
                        class="text-xl md:text-2xl font-bold text-myWhite group-hover:text-thirdTheme transition-colors duration-300"
                      >
                        {{ item.titulo }}
                      </h3>

                      <!-- Ano (desktop) -->
                      <div class="hidden lg:block">
                        <span
                          class="px-3 py-1 text-sm font-semibold bg-gradient-to-r from-thirdTheme/20 to-secondaryTheme/20 text-thirdTheme border border-thirdTheme/20 rounded-full"
                        >
                          {{ item.ano }}
                        </span>
                      </div>
                    </div>

                    <div class="flex items-center gap-2">
                      <Icon
                        name="heroicons:building-office"
                        class="w-4 h-4 text-thirdTheme/70"
                      />
                      <h4 class="text-lg font-medium text-thirdTheme">
                        {{ item.empresa }}
                      </h4>
                    </div>
                  </div>
                </div>

                <!-- Descrição -->
                <p
                  class="text-myWhite/80 leading-relaxed mb-6 pl-12 md:pl-16 border-l border-white/10 pl-4"
                >
                  {{ item.desc }}
                </p>

                <!-- Tags de habilidades -->
                <div class="mt-6 pt-6 border-t border-white/10">
                  <div class="flex items-center gap-2 mb-3">
                    <Icon
                      name="heroicons:wrench-screwdriver"
                      class="w-4 h-4 text-thirdTheme/70"
                    />
                    <span
                      class="text-xs font-semibold text-thirdTheme/70 uppercase tracking-wider"
                    >
                      {{ locale === "pt" ? "HABILIDADES" : "SKILLS" }}
                    </span>
                  </div>

                  <div class="flex flex-wrap gap-2">
                    <span
                      v-for="(tag, tagIndex) in getTechTags(item.titulo)"
                      :key="tagIndex"
                      class="px-3 py-1.5 text-xs font-medium rounded-full border border-white/10 bg-gradient-to-br from-white/5 to-white/2 hover:from-thirdTheme/20 hover:to-secondaryTheme/20 hover:border-thirdTheme/30 hover:text-thirdTheme transition-all duration-300 group/tag relative overflow-hidden"
                    >
                      <!-- Efeito de brilho no hover -->
                      <div
                        class="absolute inset-0 bg-gradient-to-r from-thirdTheme/0 via-thirdTheme/10 to-thirdTheme/0 translate-x-[-100%] group-hover/tag:translate-x-[100%] transition-transform duration-700"
                      ></div>
                      <span class="relative z-10 flex items-center gap-1.5">
                        <Icon
                          v-if="retornaLogo(tag)"
                          :name="retornaLogo(tag)"
                          class="w-3 h-3"
                        />
                        {{ tag }}
                      </span>
                    </span>
                  </div>
                </div>

                <!-- Duração indicativa -->
                <div
                  class="mt-6 flex items-center justify-between text-xs text-myWhite/40"
                >
                  <div class="flex items-center gap-1.5">
                    <Icon name="heroicons:clock" class="w-3 h-3" />
                    <span>{{ getDurationText(item.ano) }}</span>
                  </div>
                  <div class="flex items-center gap-1.5">
                    <Icon name="heroicons:map-pin" class="w-3 h-3" />
                    <span>{{
                      locale === "pt" ? "Remoto/Presencial" : "Remote/On-site"
                    }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Conector para desktop -->
            <div
              v-if="index < exp.length - 1"
              class="hidden lg:block absolute top-full left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-thirdTheme/40 to-transparent"
            ></div>
          </div>
        </div>

        <!-- Elemento decorativo no final -->
        <div class="hidden lg:flex justify-center mt-12">
          <div class="relative">
            <div
              class="w-16 h-16 rounded-full bg-gradient-to-br from-thirdTheme/10 to-secondaryTheme/10 border border-white/10 flex items-center justify-center"
            >
              <Icon
                name="heroicons:rocket-launch"
                class="text-2xl text-thirdTheme animate-pulse"
              />
            </div>
            <div
              class="absolute inset-0 rounded-full bg-thirdTheme/20 animate-ping"
            ></div>
          </div>
        </div>
      </div>

      <!-- Call to action -->
      <div v-motion="animations.slideUp" class="mt-20 text-center">
        <div
          class="inline-flex flex-col items-center gap-4 p-8 bg-gradient-to-br from-white/3 to-transparent border border-white/10 rounded-2xl max-w-2xl mx-auto"
        >
          <div
            class="p-3 rounded-full bg-gradient-to-br from-thirdTheme/15 to-secondaryTheme/15"
          >
            <Icon
              name="heroicons:arrow-up-right"
              class="text-2xl text-thirdTheme"
            />
          </div>
          <h4 class="text-xl font-bold text-myWhite">
            {{
              locale === "pt"
                ? "Pronto para o próximo desafio"
                : "Ready for the next challenge"
            }}
          </h4>
          <p class="text-myWhite/70">
            {{
              locale === "pt"
                ? "Busco oportunidades para aplicar minha expertise em projetos desafiadores."
                : "Looking for opportunities to apply my expertise in challenging projects."
            }}
          </p>
          <a
            :href="locale === 'pt' ? contactLinks.pt : contactLinks.en"
            target="_blank"
            class="mt-4 px-6 py-3 rounded-lg gradient-btn text-navBlack font-medium hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            <Icon name="heroicons:envelope" class="w-5 h-5" />
            {{ locale === "pt" ? "Vamos conversar" : "Let's talk" }}
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

const exp = computed(() => {
  return tm("experiencia.experiencias") as Array<{
    titulo: string;
    empresa: string;
    desc: string;
    ano: number;
    direction: string;
  }>;
});

// Links de contato
const contactLinks = {
  pt:
    "https://wa.me/5581997052877?text=" +
    encodeURIComponent(
      "Olá Jairo, gostaria de conversar sobre uma oportunidade.",
    ),
  en:
    "https://t.me/Lopes_93?text=" +
    encodeURIComponent("Hello Jairo, I'd like to discuss an opportunity."),
};

// Função para obter ícone baseado no tipo de experiência
const getExperienceIcon = (titulo: string) => {
  const iconMap: Record<string, string> = {
    "Front-end Developer": "heroicons:code-bracket",
    "Desenvolvedor Front-end": "heroicons:code-bracket",
    "Front-end Programmer": "heroicons:computer-desktop",
    "Programador Front-end": "heroicons:computer-desktop",
    "Information Security Technician": "heroicons:shield-check",
    "Técnico em segurança da informação": "heroicons:shield-check",
    "Help Desk": "heroicons:chat-bubble-left-right",
  };
  return iconMap[titulo] || "heroicons:briefcase";
};

// Função para obter ícone baseado na tecnologia
function retornaLogo(icone: string): string {
  if (icone.toLowerCase() === "vue.js") return "vscode-icons:file-type-vue";
  if (icone.toLowerCase() === "nuxt") return "material-icon-theme:nuxt";
  if (icone.toLowerCase() === "tailwind")
    return "vscode-icons:file-type-tailwind";
  if (icone.toLowerCase() === "typescript")
    return "vscode-icons:file-type-typescript-official";
  if (icone.toLowerCase() === "vue router") return "simple-icons:powerpages";
  if (icone.toLowerCase() === "api rest")
    return "streamline-ultimate:coding-apps-website-web-dev-api-cloud-bold";
  if (icone.toLowerCase() === "react") return "material-icon-theme:react";
  if (icone.toLowerCase() === "nuxt ui") return "devicon:nuxtjs";
  if (icone.toLowerCase() === "security") return "heroicons:shield-exclamation";
  if (icone.toLowerCase() === "troubleshooting")
    return "heroicons:wrench-screwdriver";
  if (icone.toLowerCase() === "security") return "heroicons:shield-exclamation";
  if (icone.toLowerCase() === "javascript") return "openmoji:javascript";
  if (icone.toLowerCase() === "python") return "devicon:python";
  if (icone.toLowerCase() === "pinia") return "logos:pinia";

  return "";
}

// Função para obter tags de tecnologia baseadas no título
const getTechTags = (titulo: string) => {
  const tagsMap: Record<string, string[]> = {
    "Front-end Developer": [
      "Vue.js",
      "Nuxt",
      "Nuxt ui",
      "Pinia",
      "TypeScript",
      "Tailwind",
    ],
    "Desenvolvedor Front-end": [
      "Vue.js",
      "Nuxt",
      "Nuxt ui",
      "Pinia",
      "TypeScript",
      "Tailwind",
    ],
    "Front-end Programmer": ["JavaScript", "vue.js", "Support"],
    "Programador Front-end": ["JavaScript", "vue.js", "tailwind"],
    "Information Security Technician": [
      "Python",
      "Security",
      "Troubleshooting",
    ],
    "Técnico em segurança da informação": [
      "Python",
      "Security",
      "Troubleshooting",
    ],
    "Help Desk": ["Support", "Troubleshooting", "Technical"],
  };
  return tagsMap[titulo] || ["Web Development", "Technology"];
};

// Função para obter texto de duração
const getDurationText = (ano: number) => {
  const currentYear = new Date().getFullYear();
  const yearsDiff = currentYear - ano;

  if (yearsDiff === 0) return locale.value === "pt" ? "Atual" : "Present";
  if (yearsDiff === 1)
    return `1 ${locale.value === "pt" ? "ano atrás" : "year ago"}`;
  return `${yearsDiff} ${locale.value === "pt" ? "anos atrás" : "years ago"}`;
};
</script>

<style scoped>
/* Efeito de reflexo nos cards */
.group:hover .group-hover\:shadow-2xl {
  box-shadow: 0 25px 50px -12px rgba(45, 212, 191, 0.15);
}

/* Ajuste para a timeline */
@media (min-width: 1024px) {
  .lg\:pr-1\/2 {
    padding-right: 50%;
  }
  .lg\:pl-1\/2 {
    padding-left: 50%;
  }
}

/* Efeito de entrada suave para os cards */
.v-motion-scaleIn-enter-active {
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.v-motion-scaleIn-enter-from {
  opacity: 0;
  transform: scale(0.95) translateY(20px);
}

/* Melhoria na legibilidade */
.text-myWhite\/80 {
  color: rgba(226, 230, 233, 0.8);
}

/* Gradiente sutil para o fundo da seção */
#experiencia {
  background: linear-gradient(
    180deg,
    rgba(5, 5, 5, 0) 0%,
    rgba(5, 5, 5, 0.3) 50%,
    rgba(5, 5, 5, 0) 100%
  );
}
</style>
