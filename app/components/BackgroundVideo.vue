<template>
  <!-- Video de fundo com efeitos -->
  <div class="absolute inset-0 -z-10 overflow-hidden">
    <video
      autoplay
      muted
      loop
      class="absolute inset-0 w-full h-full object-cover opacity-20"
    >
      <source src="/video/bg2.mp4" type="video/mp4" />
    </video>

    <!-- Gradiente sobreposto -->
    <div
      class="absolute inset-0 bg-gradient-to-b from-deepBlue/10 via-navBlack/30 to-navBlack/80"
    ></div>
  </div>
</template>

<script setup lang="ts">
// Este componente não requer lógica específica, apenas o template
</script>
