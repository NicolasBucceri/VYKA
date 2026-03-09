<!-- src/components/Empresa/02-Historia.vue -->
<template>
  <section
    class="empresa-historia"
    id="historia"
    aria-label="Quiénes somos y por qué nació VYKA"
    ref="rootRef"
  >
    <div class="wrap">
      <div class="grid">
        <!-- LEFT -->
        <header class="left">
          <p class="kicker" data-reveal style="--d: 0ms">QUIÉNES SOMOS</p>

          <h2 class="title" data-reveal style="--d: 80ms">
            <span>Proceso claro.</span>
            <span class="grad">Impacto real.</span>
          </h2>

          <p class="lead" data-reveal style="--d: 160ms">
            Diseñamos y desarrollamos productos digitales con una metodología definida.
            Cada proyecto parte de una estructura, un objetivo y un proceso de validación.
          </p>

          <div class="chips" role="list" aria-label="Pilares de VYKA" data-reveal style="--d: 240ms">
            <span class="chip" role="listitem">Planificación</span>
            <span class="chip" role="listitem">Diseño premium</span>
            <span class="chip" role="listitem">Desarrollo profesional</span>
            <span class="chip" role="listitem">Resultados</span>
          </div>
        </header>

        <!-- RIGHT -->
        <article class="right" data-reveal style="--d: 220ms">
          <div class="card" aria-label="Por qué nació VYKA">
            <span class="card-grid" aria-hidden="true"></span>
            <span class="card-glow" aria-hidden="true"></span>

            <p class="card-kicker">POR QUÉ VYKA</p>

            <h3 class="card-title">
              No todo proyecto necesita más diseño.
              <br />
              Necesita dirección.
            </h3>

            <ul class="bullets" aria-label="Enfoque de trabajo">
              <li>Base estratégica clara.</li>
              <li>Sistema definido.</li>
              <li>Objetivo concreto.</li>
            </ul>

            <p class="card-text">
              En VYKA empezamos por la estructura.
              <span class="strong">Después desarrollamos.</span>
            </p>

            <div class="card-tags" aria-label="Enfoques">
              <span class="tag">Estrategia</span>
              <span class="tag">Experiencia</span>
              <span class="tag">Desarrollo</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";

const rootRef = ref(null);
let io;

onMounted(() => {
  const root = rootRef.value;
  if (!root) return;

  const els = root.querySelectorAll("[data-reveal]");

  io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      }
    },
    { threshold: 0.18, rootMargin: "0px 0px -10% 0px" }
  );

  els.forEach((el) => io.observe(el));
});

onBeforeUnmount(() => {
  if (io) io.disconnect();
});
</script>

<style scoped>
/* =========================
   BRAND TOKENS (VYKA)
========================= */
.empresa-historia {
  --negro: #181818;
  --blanco: #f0eeef;
  --gris: #b4b4b4;
  --violeta: #6d5df6;
  --azul: #2d8cff;

  --stroke: rgba(240, 238, 239, 0.12);
  --stroke2: rgba(240, 238, 239, 0.08);

  background: var(--negro);
  color: var(--blanco);
  padding: clamp(72px, 7vw, 112px) 0;
}

.wrap {
  width: min(1180px, 92%);
  margin: 0 auto;
}

/* =========================
   LAYOUT
========================= */
.grid {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: clamp(18px, 4vw, 48px);
  align-items: start;
}

/* =========================
   LEFT
========================= */
.kicker {
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-size: 0.78rem;
  color: rgba(180, 180, 180, 0.92);
  margin: 0 0 12px;
}

.title {
  margin: 0 0 14px;
  font-weight: 850;
  letter-spacing: -0.02em;
  line-height: 1.06;
  font-size: clamp(2.05rem, 3.4vw, 2.85rem);
}

.title span {
  display: block;
}

.grad {
  background: linear-gradient(90deg, var(--violeta), var(--azul));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.lead {
  margin: 0 0 18px;
  font-size: 1.08rem;
  line-height: 1.65;
  color: rgba(240, 238, 239, 0.9);
  max-width: 56ch;
}

.muted {
  color: rgba(180, 180, 180, 0.95);
}

/* chips */
.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 14px;
}

.chip {
  padding: 9px 12px;
  border-radius: 999px;
  border: 1px solid var(--stroke2);
  background: rgba(240, 238, 239, 0.04);
  color: rgba(240, 238, 239, 0.9);
  font-size: 0.92rem;
}

/* =========================
   CARD
========================= */
.card {
  position: relative;
  border-radius: 22px;
  overflow: hidden;
  padding: clamp(18px, 2.6vw, 26px);

  background: rgba(240, 238, 239, 0.03);
  border: 1px solid var(--stroke);
  backdrop-filter: blur(14px);

  box-shadow:
    0 0 0 1px rgba(240, 238, 239, 0.03) inset,
    0 26px 85px rgba(0, 0, 0, 0.55);
}

.card-grid {
  position: absolute;
  inset: 0;
  opacity: 0.22;
  background:
    linear-gradient(to right, rgba(180, 180, 180, 0.08) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(180, 180, 180, 0.08) 1px, transparent 1px);
  background-size: 44px 44px;
  mask-image: radial-gradient(circle at 30% 20%, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  pointer-events: none;
}

.card-glow {
  position: absolute;
  inset: -2px;
  background:
    radial-gradient(520px 180px at 18% 25%, rgba(109, 93, 246, 0.16), transparent 60%),
    radial-gradient(520px 180px at 88% 70%, rgba(45, 140, 255, 0.12), transparent 60%);
  pointer-events: none;
}

.card-kicker {
  position: relative;
  z-index: 1;
  margin: 0 0 10px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-size: 0.78rem;
  color: rgba(180, 180, 180, 0.92);
}

.card-title {
  position: relative;
  z-index: 1;
  margin: 0 0 14px;
  font-size: 1.22rem;
  line-height: 1.25;
  letter-spacing: -0.01em;
  color: rgba(240, 238, 239, 0.95);
}

/* bullets */
.bullets {
  position: relative;
  z-index: 1;
  list-style: none;
  padding: 0;
  margin: 0 0 16px;
  display: grid;
  gap: 10px;
}

.bullets li {
  color: rgba(180, 180, 180, 0.95);
  font-size: 1.02rem;
  padding-left: 18px;
  position: relative;
}

.bullets li::before {
  content: "";
  width: 8px;
  height: 8px;
  border-radius: 999px;
  position: absolute;
  left: 0;
  top: 0.55em;
  background: linear-gradient(90deg, var(--violeta), var(--azul));
  opacity: 0.9;
}

.card-text {
  position: relative;
  z-index: 1;
  margin: 0 0 16px;
  color: rgba(240, 238, 239, 0.88);
  line-height: 1.65;
  font-size: 1.02rem;
}

.strong {
  color: rgba(240, 238, 239, 0.98);
  font-weight: 850;
}

.card-tags {
  position: relative;
  z-index: 1;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 4px;
}

.tag {
  padding: 8px 10px;
  border-radius: 999px;
  border: 1px solid var(--stroke2);
  background: rgba(0, 0, 0, 0.18);
  color: rgba(180, 180, 180, 0.95);
  font-size: 0.86rem;
}

/* =========================
   REVEAL ANIMATIONS (WOW SUTIL)
========================= */

/* Estado base (oculto) */
[data-reveal] {
  opacity: 0;
  transform: translateY(14px);
  filter: blur(6px);
  transition:
    opacity 700ms cubic-bezier(.2,.8,.2,1),
    transform 700ms cubic-bezier(.2,.8,.2,1),
    filter 700ms cubic-bezier(.2,.8,.2,1);
  transition-delay: var(--d, 0ms);
  will-change: transform, opacity, filter;
}

/* Entra */
[data-reveal].is-in {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0);
}

/* Card: entra con un toque de “depth” */
.right[data-reveal] {
  transform: translateY(16px) scale(.985);
}
.right[data-reveal].is-in {
  transform: translateY(0) scale(1);
}

/* Stagger elegante: chips */
.chips.is-in .chip {
  opacity: 0;
  transform: translateY(10px);
  transition:
    opacity 520ms cubic-bezier(.2,.8,.2,1),
    transform 520ms cubic-bezier(.2,.8,.2,1),
    border-color 520ms ease;
}
.chips.is-in .chip:nth-child(1) { transition-delay: 80ms; }
.chips.is-in .chip:nth-child(2) { transition-delay: 140ms; }
.chips.is-in .chip:nth-child(3) { transition-delay: 200ms; }
.chips.is-in .chip:nth-child(4) { transition-delay: 260ms; }

.chips.is-in .chip {
  opacity: 1;
  transform: translateY(0);
}

/* Stagger elegante: bullets */
.right.is-in .bullets li {
  opacity: 0;
  transform: translateY(10px);
  transition:
    opacity 520ms cubic-bezier(.2,.8,.2,1),
    transform 520ms cubic-bezier(.2,.8,.2,1);
}
.right.is-in .bullets li:nth-child(1) { transition-delay: 120ms; }
.right.is-in .bullets li:nth-child(2) { transition-delay: 180ms; }
.right.is-in .bullets li:nth-child(3) { transition-delay: 240ms; }

.right.is-in .bullets li {
  opacity: 1;
  transform: translateY(0);
}

/* Glow sutil “respira” cuando ya entró */
.right.is-in .card-glow {
  animation: glowBreath 5.6s ease-in-out infinite;
  opacity: 1;
}

@keyframes glowBreath {
  0%, 100% { filter: blur(0px); opacity: .9; }
  50% { filter: blur(1.5px); opacity: 1; }
}

/* Hover premium */
@media (hover: hover) {
  .right.is-in .card {
    transition: transform 260ms ease, box-shadow 260ms ease, border-color 260ms ease;
  }
  .right.is-in .card:hover {
    transform: translateY(-2px);
    border-color: rgba(240, 238, 239, 0.18);
    box-shadow:
      0 0 0 1px rgba(240, 238, 239, 0.04) inset,
      0 34px 110px rgba(0, 0, 0, 0.62);
  }
}

/* Accesibilidad */
@media (prefers-reduced-motion: reduce) {
  [data-reveal] {
    opacity: 1 !important;
    transform: none !important;
    filter: none !important;
    transition: none !important;
  }
  .right.is-in .card-glow {
    animation: none !important;
  }
}

/* =========================
   RESPONSIVE
========================= */
@media (max-width: 980px) {
  .grid {
    grid-template-columns: 1fr;
  }
  .card {
    margin-top: 6px;
  }
}
</style>