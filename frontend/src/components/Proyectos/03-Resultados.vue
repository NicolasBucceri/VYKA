<template>
  <section class="resultados" v-if="proyecto" aria-label="Resultados del proyecto" ref="sectionEl">
    <!-- bg sutil -->
    <div class="bg" aria-hidden="true">
      <span class="glow g1"></span>
      <span class="glow g2"></span>
      <span class="gridLines"></span>
    </div>

    <div class="wrap">
      <!-- Head -->
      <header class="head" data-reveal="up">
        <p class="kicker">{{ ui.kicker }}</p>

        <h2 class="title">
          <span class="tWhite">{{ ui.titleWhite }}</span> <br>
          <span class="grad">{{ ui.titleGrad }}</span>
        </h2>

        <p class="sub">
          {{ ui.sub }}
        </p>
      </header>

      <!-- Metrics -->
      <div class="grid" v-if="metricas.length" data-reveal="up">
        <div class="card" v-for="(m, i) in metricas" :key="i" :style="{ '--d': i }">
          <span class="number">{{ m.valor }}</span>
          <p class="label">{{ m.label }}</p>
          <p class="time" v-if="m.tiempo">{{ m.tiempo }}</p>
        </div>
      </div>

      <!-- Fallback -->
      <p class="empty" v-else data-reveal="up">
        {{ ui.empty }}
      </p>

      <!-- ✅ Ficha (hijo) -->
      <div class="fichaWrap" data-reveal="up">
        <FichaEntrega :ficha="proyecto?.ficha" />
      </div>

      <!-- Descripción -->
      <p class="desc" v-if="metricas.length" data-reveal="up">
        {{ ui.desc }}
      </p>
    </div>
  </section>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import FichaEntrega from "@/components/Proyectos/04-FichaEntrega.vue";

const props = defineProps({
  proyecto: { type: Object, required: true },
});

/* -----------------------
   Métricas por proyecto
------------------------ */
const metricas = computed(() => props.proyecto?.resultados ?? []);

/* -----------------------
   Textos (por proyecto si querés)
   - Si no existen, usa defaults.
   - Si los querés custom por proyecto:
     proyecto.resultadosUI = { ... }
------------------------ */
const DEFAULT_UI = {
  kicker: "RESULTADOS",
  titleWhite: "Impacto real.",
  titleGrad: "Resultados medibles.",
  sub:
    "Cada proyecto busca algo simple: mejorar presencia, generar más consultas y construir una base digital sólida.",
  empty: "Resultados en proceso de medición.",
  desc:
    "El objetivo no es solo tener una web visualmente atractiva. El objetivo es construir una presencia digital clara, profesional y preparada para generar oportunidades reales.",
};

const ui = computed(() => {
  const cfg = props.proyecto?.resultadosUI || {};
  return {
    kicker: cfg.kicker || DEFAULT_UI.kicker,
    titleWhite: cfg.titleWhite || DEFAULT_UI.titleWhite,
    titleGrad: cfg.titleGrad || DEFAULT_UI.titleGrad,
    sub: cfg.sub || DEFAULT_UI.sub,
    empty: cfg.empty || DEFAULT_UI.empty,
    desc: cfg.desc || DEFAULT_UI.desc,
  };
});

/* -----------------------
   Reveal on scroll (nativo)
------------------------ */
const sectionEl = ref(null);
let io = null;

onMounted(() => {
  const root = sectionEl.value;
  if (!root) return;

  const targets = root.querySelectorAll("[data-reveal]");

  io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-in");
          io?.unobserve(e.target);
        }
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -12% 0px",
    }
  );

  targets.forEach((t) => io.observe(t));
});

onBeforeUnmount(() => {
  io?.disconnect();
  io = null;
});
</script>

<style scoped>
/* =========================
   RESULTADOS — VYKA
========================= */

.resultados {
  position: relative;
  padding: clamp(88px, 10vw, 150px) 0;
  isolation: isolate;
}

/* BG sutil (sin “bloques”) */
.bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
}

.glow {
  position: absolute;
  filter: blur(52px);
  opacity: .85;
  transform: translateZ(0);
}

.glow.g1 {
  width: 520px;
  height: 520px;
  left: -160px;
  top: -140px;
  background: radial-gradient(circle at 35% 35%, rgba(109, 93, 246, 0.55), transparent 62%);
}

.glow.g2 {
  width: 640px;
  height: 640px;
  right: -240px;
  bottom: -260px;
  background: radial-gradient(circle at 35% 35%, rgba(45, 140, 255, 0.45), transparent 64%);
}

/* líneas de fondo (muy suaves) */
.gridLines {
  position: absolute;
  inset: -2px;
  opacity: .35;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 44px 44px;
  mask-image: radial-gradient(60% 60% at 50% 35%, black, transparent 78%);
}

.wrap {
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 clamp(24px, 5vw, 80px);
  position: relative;
  z-index: 1;
}

/* HEAD */
.head {
  text-align: center;
  max-width: 820px;
  margin: 0 auto clamp(56px, 6vw, 78px);
}

.kicker {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  margin: 0 0 16px;

  font-size: 0.72rem;
  letter-spacing: .26em;
  text-transform: uppercase;
  font-weight: 800;
  color: rgba(255, 255, 255, 0.58);
}

.kicker::before,
.kicker::after {
  content: "";
  width: 40px;
  height: 1px;
  opacity: .85;
  background: linear-gradient(90deg,
      transparent,
      rgba(109, 93, 246, 0.55),
      rgba(45, 140, 255, 0.55),
      transparent);
}

.title {
  font-size: clamp(2.35rem, 4.2vw, 3.25rem);
  font-weight: 950;
  line-height: 1.04;
  letter-spacing: -0.03em;
  margin: 0 0 16px;
}

.tWhite {
  color: rgba(255, 255, 255, 0.96);
}

.grad {
  background: linear-gradient(90deg, #6D5DF6, #2D8CFF);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.sub {
  color: rgba(255, 255, 255, 0.66);
  line-height: 1.7;
  font-size: 1.03rem;
}

/* METRICS GRID */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: clamp(16px, 2.8vw, 26px);
  margin-bottom: clamp(34px, 4.8vw, 56px);
}

.card {
  position: relative;
  border-radius: 18px;
  padding: 26px 22px;

  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);

  box-shadow:
    0 12px 34px rgba(0, 0, 0, 0.40),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);

  transition: transform .2s ease, border-color .2s ease, box-shadow .2s ease;
  overflow: hidden;
}

.card::after {
  content: "";
  position: absolute;
  inset: -40px -40px auto -40px;
  height: 160px;
  pointer-events: none;
  background: radial-gradient(380px 170px at 28% 10%, rgba(109, 93, 246, 0.20), transparent 62%);
  opacity: 0;
  transition: opacity .2s ease;
}

.card:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 255, 255, 0.14);
  box-shadow:
    0 18px 48px rgba(0, 0, 0, 0.50),
    inset 0 1px 0 rgba(255, 255, 255, 0.06);
}

.card:hover::after {
  opacity: 1;
}

.number {
  display: block;
  font-size: clamp(1.95rem, 2.7vw, 2.55rem);
  font-weight: 950;
  letter-spacing: -0.02em;
  margin-bottom: 8px;

  background: linear-gradient(90deg, #6D5DF6, #2D8CFF);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.label {
  font-size: 0.98rem;
  color: rgba(255, 255, 255, 0.88);
  font-weight: 650;
}

.time {
  font-size: 0.78rem;
  color: rgba(255, 255, 255, 0.52);
  margin-top: 14px;
}

/* DESC */
.desc {
  margin-top: clamp(26px, 3.8vw, 44px);
  max-width: 780px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  color: rgba(255, 255, 255, 0.62);
  line-height: 1.7;
}

/* EMPTY */
.empty {
  text-align: center;
  color: rgba(255, 255, 255, 0.58);
  line-height: 1.65;
  margin: 0 0 10px;
}

/* Wrapper para animar el hijo sin tocar su componente */
.fichaWrap {
  margin-top: clamp(22px, 3.2vw, 34px);
}

/* -----------------------
   Animaciones on-scroll
------------------------ */
[data-reveal] {
  opacity: 0;
  transform: translate3d(0, 18px, 0);
  filter: blur(7px);
  transition:
    opacity 520ms cubic-bezier(.22, .9, .18, 1),
    transform 650ms cubic-bezier(.22, .9, .18, 1),
    filter 650ms cubic-bezier(.22, .9, .18, 1);
  will-change: opacity, transform, filter;
}

/* cuando entra */
[data-reveal].is-in {
  opacity: 1;
  transform: translate3d(0, 0, 0);
  filter: blur(0);
}

/* stagger SOLO para las cards cuando el grid ya entró */
.grid[data-reveal].is-in .card {
  opacity: 0;
  transform: translate3d(0, 14px, 0) scale(0.99);
  filter: blur(6px);
  animation: cardIn 560ms cubic-bezier(.22, .9, .18, 1) forwards;
  animation-delay: calc(90ms + (var(--d) * 90ms));
}

@keyframes cardIn {
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0) scale(1);
    filter: blur(0);
  }
}

/* micro-movimiento de glows cuando entra (sutil y caro) */
.resultados:has([data-reveal].is-in) .glow {
  animation: glowFloat 6.5s ease-in-out infinite;
}

@keyframes glowFloat {

  0%,
  100% {
    transform: translate3d(0, 0, 0);
  }

  50% {
    transform: translate3d(0, -10px, 0);
  }
}

/* Accesibilidad */
@media (prefers-reduced-motion: reduce) {

  [data-reveal],
  .grid[data-reveal].is-in .card,
  .resultados:has([data-reveal].is-in) .glow {
    transition: none !important;
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
    filter: none !important;
  }
}
</style>