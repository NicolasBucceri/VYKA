<template>
  <section class="exp" aria-label="Explicación del proyecto" ref="sectionEl">
    <div class="wrap">
      <div class="grid">
        <!-- TEXTO ARRIBA -->
        <header class="copy" data-reveal="left">
          <p class="kicker">{{ ui.kicker }}</p>

          <h2 class="title">
            {{ ui.title }}
            <span class="grad">{{ ui.highlight }}</span>
          </h2>

          <p class="lead">{{ ui.lead }}</p>

          <ul class="bullets" v-if="ui.bullets.length">
            <li
              v-for="(b, i) in ui.bullets"
              :key="i"
              class="bullet"
              :style="{ '--d': i }"
            >
              <span class="dot" aria-hidden="true"></span>
              <span class="txt">{{ b }}</span>
            </li>
          </ul>
        </header>

        <!-- MEDIA DEBAJO -->
        <aside class="media" aria-label="Vista del proyecto" data-reveal="right">
          <div class="frame">
            <video
              v-if="mediaVideo"
              class="video"
              autoplay
              muted
              loop
              playsinline
              preload="metadata"
            >
              <source :src="mediaVideo" type="video/webm" />
            </video>

            <img
              v-else-if="proyecto?.imagen"
              class="video"
              :src="proyecto.imagen"
              :alt="`Vista previa del proyecto ${proyecto?.nombre}`"
              loading="lazy"
              decoding="async"
            />

            <div class="shade"></div>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from "vue";

/* VIDEOS */
import PlegoVideo from "@/assets/Proyectos/Plego/PlegoVideo.webm";
import FraloVideo from "@/assets/Proyectos/Fralo/FraloVideo.webm";
import DolceMattinaVideo from "@/assets/Proyectos/DolceMattina/LandingCompleta.webm";

const props = defineProps({
  proyecto: { type: Object, default: null },
});

const ui = computed(() => {
  const exp = props.proyecto?.explicacion || {};
  const bullets = Array.isArray(exp.bullets) ? exp.bullets : [];

  return {
    kicker: exp.kicker || "EXPLICACIÓN",
    title: exp.title || "Decisiones claras.",
    highlight: exp.highlight || "Ejecución limpia.",
    lead:
      exp.lead ||
      props.proyecto?.resumen ||
      "Sitio orientado a confianza, servicios y contacto directo.",
    bullets: bullets.length
      ? bullets
      : [
          "Arquitectura de información clara.",
          "Diseño modular para escalar sin romper.",
          "Performance y consistencia visual.",
        ],
  };
});

/* MAPA DE VIDEOS */
const projectVideos = {
  plego: PlegoVideo,
  fralo: FraloVideo,
  dolcemattina: DolceMattinaVideo,
};

const projectKey = computed(() => {
  const raw =
    props.proyecto?.slug ||
    props.proyecto?.id ||
    props.proyecto?.nombre ||
    "";

  return String(raw)
    .toLowerCase()
    .trim()
    .replace(/[\s-_]+/g, "");
});

const mediaVideo = computed(() => {
  return projectVideos[projectKey.value] || null;
});

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
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
}

.grid {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(32px, 4vw, 56px);
  text-align: center;
  width: 100%;
}

/* TEXTO */
.copy {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.kicker {
  margin: 0 0 10px;
  font-size: 0.78rem;
  letter-spacing: 0.18em;
  font-weight: 800;
  color: rgba(255, 255, 255, 0.62);
}

.title {
  margin: 0 0 16px;
  font-size: clamp(2.2rem, 5vw, 4.4rem);
  line-height: 1.05;
  font-weight: 950;
  letter-spacing: -0.04em;
  color: rgba(255, 255, 255, 0.96);
  white-space: nowrap;
  text-align: center;
}

.grad {
  display: inline;
  margin-left: 0.12em;
  background: linear-gradient(90deg, rgba(109, 93, 246, 1), rgba(45, 140, 255, 1));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.lead {
  max-width: 760px;
  margin: 0 auto 24px;
  font-size: 1.1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.74);
}

/* BULLETS */
.bullets {
  margin: 0 auto;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 16px;
  max-width: 600px;
  justify-content: center;
}

.bullet {
  display: grid;
  grid-template-columns: 12px auto;
  gap: 12px;
  align-items: start;
  justify-content: center;
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
  text-align: left;
}

/* MEDIA */
.media {
  width: 100%;
  display: flex;
  justify-content: center;
}

.frame {
  position: relative;
  width: 100%;
  max-width: 900px;
  border-radius: 26px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.10);
  box-shadow: 0 34px 110px rgba(0, 0, 0, 0.60);
}

.video {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  filter: contrast(1.06) saturate(1.05);
  transform: scale(1.01);
}

.shade {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    radial-gradient(900px 520px at 50% 20%, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.28)),
    linear-gradient(180deg, rgba(24, 24, 24, 0.06), rgba(24, 24, 24, 0.40));
}

/* ANIMACIONES ON-SCROLL */
[data-reveal] {
  opacity: 0;
  transform: translate3d(0, 18px, 0);
  filter: blur(6px);
  transition:
    opacity 520ms cubic-bezier(.22, .9, .18, 1),
    transform 650ms cubic-bezier(.22, .9, .18, 1),
    filter 650ms cubic-bezier(.22, .9, .18, 1);
}

[data-reveal].is-in {
  opacity: 1;
  transform: translate3d(0, 0, 0);
  filter: blur(0);
}

@media (prefers-reduced-motion: reduce) {
  [data-reveal] {
    transition: none !important;
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
    filter: none !important;
  }
}

/* RESPONSIVE */
@media (max-width: 980px) {
  .grid {
    gap: 28px;
  }

  .copy {
    max-width: 100%;
  }

  .title {
    font-size: clamp(2rem, 8vw, 3rem);
    white-space: normal;
  }

  .grad {
    display: block;
    margin-left: 0;
  }

  .lead {
    font-size: 1rem;
    margin-bottom: 22px;
  }

  .bullets {
    max-width: 100%;
    justify-content: center;
  }

  .bullet {
    grid-template-columns: 12px 1fr;
    justify-content: start;
  }

  .frame {
    width: 100%;
    max-width: 100%;
    height: auto;
  }
}
</style>