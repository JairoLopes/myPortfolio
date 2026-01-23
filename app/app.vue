<template>
  <NuxtLayout />
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { locale } = useI18n();

// SEO Dinâmico baseado no idioma
useHead({
  titleTemplate: (title) => {
    return title
      ? `${title} | Jairo Lopes`
      : "Jairo Lopes - Frontend Developer";
  },
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    {
      name: "description",
      content:
        locale.value === "pt"
          ? "Desenvolvedor Frontend especializado em Vue.js, Nuxt, Tailwind CSS e TypeScript. Criação de interfaces modernas e de alto desempenho."
          : "Frontend Developer specialized in Vue.js, Nuxt, Tailwind CSS, and TypeScript. Creating modern and high-performance interfaces.",
    },
    {
      name: "keywords",
      content:
        "Vue.js, Nuxt, Frontend, Developer, TypeScript, Tailwind CSS, Portfolio",
    },
  ],
  link: [
    { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
    { rel: "canonical", href: "https://jairolopes.dev" },
  ],
  htmlAttrs: {
    lang: locale.value,
  },
});

useSeoMeta({
  title: () =>
    locale.value === "pt"
      ? "Jairo Lopes - Desenvolvedor Frontend"
      : "Jairo Lopes - Frontend Developer",
  ogTitle: () =>
    locale.value === "pt"
      ? "Jairo Lopes - Desenvolvedor Frontend"
      : "Jairo Lopes - Frontend Developer",
  description: () =>
    locale.value === "pt"
      ? "Desenvolvedor Frontend especializado em Vue.js, Nuxt, Tailwind CSS e TypeScript"
      : "Frontend Developer specialized in Vue.js, Nuxt, Tailwind CSS, and TypeScript",
  ogDescription: () =>
    locale.value === "pt"
      ? "Portfólio de Jairo Lopes - Desenvolvedor Frontend especializado em tecnologias modernas"
      : "Jairo Lopes Portfolio - Frontend Developer specialized in modern technologies",
  ogImage: "/img/perfil.jpeg",
  ogImageAlt: "Jairo Lopes - Frontend Developer",
  twitterCard: "summary_large_image",
  twitterTitle: () =>
    locale.value === "pt"
      ? "Jairo Lopes - Desenvolvedor Frontend"
      : "Jairo Lopes - Frontend Developer",
  twitterDescription: () =>
    locale.value === "pt"
      ? "Portfólio de desenvolvimento frontend com Vue.js, Nuxt e TypeScript"
      : "Frontend development portfolio with Vue.js, Nuxt and TypeScript",
  twitterImage: "/img/perfil.jpeg",
});
</script>
