<!-- src/views/05-ProyectoDetalle.vue -->
<template>
  <main class="page">
    <template v-if="proyecto">
      <HeroProyecto :proyecto="proyecto" />
      <ExplicacionProyecto :proyecto="proyecto" />
      <ResultadosProyecto
        v-if="proyecto.resultados?.length"
        :proyecto="proyecto"
      />
    </template>

    <template v-else>
      <section class="notFound">
        <div class="wrap">
          <p class="kicker">PROYECTO</p>
          <h1 class="title">No encontrado.</h1>
          <p class="sub">
            El slug <span class="chip">{{ slug }}</span> no existe en tu master.
            Revisa que esté en <span class="chip">projects.master.js</span>.
          </p>

          <router-link class="btn" to="/proyectos">
            Volver a proyectos <span class="arrow">↩</span>
          </router-link>
        </div>
      </section>
    </template>
  </main>
</template>

<script setup>
import { computed, watchEffect } from "vue";
import { useRoute } from "vue-router";

import { getProyectoBySlug } from "@/content/projects.master";

import HeroProyecto from "@/components/Proyectos/01-Hero.vue";
import ExplicacionProyecto from "@/components/Proyectos/02-Explicacion.vue";
import ResultadosProyecto from "@/components/Proyectos/03-Resultados.vue";

const route = useRoute();

const slug = computed(() => String(route.params.slug || ""));
const proyecto = computed(() => getProyectoBySlug(slug.value));

watchEffect(() => {
  if (!slug.value) return;
  console.log("[ProyectoDetalle] slug:", slug.value);
  console.log("[ProyectoDetalle] proyecto:", proyecto.value);
  console.log("[ProyectoDetalle] bullets:", proyecto.value?.explicacion?.bullets);
});
</script>

<style scoped>
.page{
  min-height: 100vh;
  background: #0b0c10;
}

.notFound{
  padding: clamp(80px, 8vw, 120px) 0;
}

.wrap{
  width: min(1100px, 92%);
  margin: 0 auto;
}

.kicker{
  margin: 0 0 10px;
  font-size: 0.78rem;
  letter-spacing: 0.18em;
  font-weight: 800;
  color: rgba(255,255,255,0.62);
}

.title{
  margin: 0 0 10px;
  font-size: clamp(2rem, 4vw, 3.2rem);
  font-weight: 950;
  letter-spacing: -0.02em;
  color: rgba(255,255,255,0.95);
}

.sub{
  margin: 0 0 20px;
  color: rgba(255,255,255,0.72);
  line-height: 1.6;
}

.chip{
  display: inline-block;
  padding: 3px 10px;
  border-radius: 999px;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.12);
  color: rgba(255,255,255,0.85);
  font-size: 0.9rem;
}

.btn{
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  border-radius: 14px;
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.14);
  color: rgba(255,255,255,0.92);
  text-decoration: none;
  transition: transform .18s ease, background .18s ease;
}

.btn:hover{
  transform: translateY(-1px);
  background: rgba(255,255,255,0.10);
}

.arrow{
  opacity: .8;
}
</style>