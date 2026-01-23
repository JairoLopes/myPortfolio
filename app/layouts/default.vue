<template>
  <!-- Layout principal-->
  <div class="relative">
    <!-- CONTAINER ONDE ESTÃO TODOS OS COMPONENTES -->
    <div class="overflow-x-hidden min-h-screen text-myWhite">
      <!-- NavBar e MobileMenu -->
      <NavBar :menu-open="menuOpen" @update:menu-open="menuOpen = $event" />
      <MobileMenu :menu-open="menuOpen" @update:menu-open="menuOpen = $event" />

      <!-- Componente Home -->
      <Home />

      <!-- Componente About -->
      <About />

      <!-- Componente Templates -->
      <HydrationTemplates :hydrate-on-visible="{ rootMargin: '200px' }" />

      <!-- Componente Projects -->
      <HydrationProjects :hydrate-on-visible="{ rootMargin: '200px' }" />

      <!-- Componente Performance, nao recebe lazy hydration por que tem duas rotas que dependem dele -->
      <Performance />

      <!-- Componente Exp -->
      <HydrationExp :hydrate-on-visible="{ rootMargin: '200px' }" />

      <!-- Componente Footer -->
      <HydrationFooter :hydrate-on-visible="{ rootMargin: '200px' }" />

      <!-- Componente da seta que leva ao topo -->
      <ArrowTop />
    </div>
  </div>
</template>

<script setup lang="ts">
// Define o estado reativo para controlar a abertura/fechamento do menu mobile.
const menuOpen = ref(false);

// APLICANDO LAZY HYDRATION NOS COMPONENTE PARA MELHORAR A PERFORMANCE
// Footer
const HydrationFooter = defineLazyHydrationComponent(
  "visible",
  () => import("@/components/Footer.vue"),
);

// EXPERIENCIA
const HydrationExp = defineLazyHydrationComponent(
  "visible",
  () => import("@/components/Exp.vue"),
);

// PROJECTS
const HydrationProjects = defineLazyHydrationComponent(
  "visible",
  () => import("@/components/Projects.vue"),
);

// TEMPLATES
const HydrationTemplates = defineLazyHydrationComponent(
  "visible",
  () => import("@/components/Templates.vue"),
);
</script>
