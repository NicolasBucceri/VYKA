<!-- src/components/Proyectos/02-Explicacion.vue -->
<template>
  <section class="exp" aria-label="Explicación del proyecto" ref="sectionEl">
    <div class="wrap">
      <div class="grid">
        <!-- LEFT -->
        <header class="copy" data-reveal="left">
          <p class="kicker">{{ ui.kicker }}</p>

          <h2 class="title">
            {{ ui.title }} <br>
            <span class="grad">{{ ui.highlight }}</span>
          </h2>

          <p class="lead">{{ ui.lead }}</p>

          <!-- ✅ Bullets -->
          <ul class="bullets" v-if="ui.bullets.length">
            <li v-for="(b, i) in ui.bullets" :key="i" class="bullet" :style="{ '--d': i }">
              <span class="dot" aria-hidden="true"></span>
              <span class="txt">{{ b }}</span>
            </li>
          </ul>
        </header>

        <!-- RIGHT -->
        <aside class="media" aria-label="Vista del proyecto" data-reveal="right">
          <div class="frame">
            <img v-if="proyecto?.imagen" class="video" :src="proyecto.imagen"
              :alt="`Vista previa del proyecto ${proyecto?.nombre}`" loading="lazy" decoding="async" />

            <div class="shade"></div>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import DefaultPoster from "@/assets/Proyectos/Plego/PlegoPortada.png";

const props = defineProps({
  proyecto: { type: Object, default: null },
});

/* -----------------------
   UI texts (desde content)
------------------------ */
const ui = computed(() => {
  const exp = props.proyecto?.explicacion || {};
  const bullets = Array.isArray(exp.bullets) ? exp.bullets : [];

  return {
    kicker: exp.kicker || "EXPLICACIÓN",
    title: exp.title || "Decisiones claras.",
    highlight: exp.highlight || "Ejecución limpia.",
    lead: exp.lead || props.proyecto?.resumen || "Sitio orientado a confianza, servicios y contacto directo.",
    // ✅ fallback bullets (para que nunca quede vacío)
    bullets: bullets.length
      ? bullets
      : [
        "Arquitectura de información clara.",
        "Diseño modular para escalar sin romper.",
        "Performance y consistencia visual.",
      ],
  };
});

/* -----------------------
   Media (desde content)
------------------------ */
const videoSrc = computed(() => props.proyecto?.media?.videoUrl || "");
const poster = computed(
  () => props.proyecto?.media?.posterUrl || props.proyecto?.posterUrl || props.proyecto?.imagen || DefaultPoster
);
const usePosterOnly = computed(() => !videoSrc.value);

/* -----------------------
   Reveal on scroll
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
    { threshold: 0.18, rootMargin: "0px 0px -12% 0px" }
  );

  targets.forEach((t) => io.observe(t));
});

onBeforeUnmount(() => {
  io?.disconnect();
  io = null;
});
</script>

<style scoped>
.exp {
  position: relative;
  padding: clamp(58px, 7vw, 110px) 0;
}

.wrap {
  width: min(1200px, 92%);
  margin: 0 auto;
}

.grid {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: clamp(22px, 4vw, 56px);
  align-items: center;
}

/* LEFT */
.kicker {
  margin: 0 0 10px;
  font-size: 0.78rem;
  letter-spacing: 0.18em;
  font-weight: 800;
  color: rgba(255, 255, 255, 0.62);
}

.title {
  margin: 0 0 14px;
  font-size: clamp(2.0rem, 3.6vw, 2.7rem);
  line-height: 1.05;
  font-weight: 950;
  letter-spacing: -0.02em;
  color: rgba(255, 255, 255, 0.96);
}

.grad {
  background: linear-gradient(90deg, rgba(109, 93, 246, 1), rgba(45, 140, 255, 1));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.lead {
  margin: 0 0 18px;
  font-size: 1.05rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.74);
}

.bullets {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 12px;
}

.bullet {
  display: grid;
  grid-template-columns: 12px 1fr;
  gap: 12px;
  align-items: start;
}

.dot {
  width: 10px;
  height: 10px;
  margin-top: 7px;
  border-radius: 99px;
  background: linear-gradient(180deg, rgba(109, 93, 246, 1), rgba(45, 140, 255, 1));
  box-shadow: 0 10px 22px rgba(109, 93, 246, 0.22);
}

.txt {
  color: rgba(255, 255, 255, 0.72);
  line-height: 1.55;
}

/* RIGHT */
.frame {
  position: relative;
  border-radius: 26px;
  overflow: hidden;

  width: 130%;
  margin-left: -10%;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.10);
  box-shadow: 0 34px 110px rgba(0, 0, 0, 0.60);
}

.video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: contrast(1.06) saturate(1.05);
  transform: scale(1.01);
}

.shade {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    radial-gradient(900px 520px at 50% 20%, rgba(0, 0, 0, 0.00), rgba(0, 0, 0, 0.28)),
    linear-gradient(180deg, rgba(24, 24, 24, 0.06), rgba(24, 24, 24, 0.40));
}

.frame.isPoster .video {
  object-fit: contain;
  object-position: center;
  background: rgba(0, 0, 0, 0.35);
  transform: none;
}

/* Animaciones on-scroll */
[data-reveal] {
  opacity: 0;
  transform: translate3d(0, 18px, 0);
  filter: blur(6px);
  transition:
    opacity 520ms cubic-bezier(.22, .9, .18, 1),
    transform 650ms cubic-bezier(.22, .9, .18, 1),
    filter 650ms cubic-bezier(.22, .9, .18, 1);
  will-change: opacity, transform, filter;
}

[data-reveal="left"] {
  transform: translate3d(-18px, 14px, 0);
}

[data-reveal="right"] {
  transform: translate3d(18px, 14px, 0);
}

[data-reveal].is-in {
  opacity: 1;
  transform: translate3d(0, 0, 0);
  filter: blur(0);
}

.copy[data-reveal].is-in .bullet {
  opacity: 0;
  transform: translate3d(0, 10px, 0);
  filter: blur(4px);
  animation: bulletIn 520ms cubic-bezier(.22, .9, .18, 1) forwards;
  animation-delay: calc(140ms + (var(--d) * 90ms));
}

.media[data-reveal].is-in .frame {
  animation: mediaIn 750ms cubic-bezier(.22, .9, .18, 1) both;
  animation-delay: 60ms;
}

@keyframes bulletIn {
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    filter: blur(0);
  }
}

@keyframes mediaIn {
  from {
    transform: translate3d(0, 8px, 0) scale(0.985);
    filter: blur(6px);
  }

  to {
    transform: translate3d(0, 0, 0) scale(1);
    filter: blur(0);
  }
}

@media (prefers-reduced-motion: reduce) {

  [data-reveal],
  .copy[data-reveal].is-in .bullet,
  .media[data-reveal].is-in .frame {
    transition: none !important;
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
    filter: none !important;
  }
}

@media (max-width: 980px) {
  .grid {
    grid-template-columns: 1fr;
  }

  .frame {
    height: 56vh;
    min-height: 420px;
    width: 100%;
    margin-left: 0;
  }
}
</style>