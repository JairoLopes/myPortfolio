// app/router.options.ts

// arquivo para remover a rolagem do scroll ao trocar de rota

import type { RouterOptions } from "@nuxt/schema";

export default <RouterOptions>{
  scrollBehavior(to, from, savedPosition) {
    // preserva a posição atual (nenhum scroll automático)
    if (savedPosition) return savedPosition;
    return false;
  },
};
