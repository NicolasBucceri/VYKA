<!-- src/views/Proyectos.vue -->
<template>
  <Vyka>
    <section
      class="proyectos"
      id="proyectos"
      :aria-label="t('projectsPage.aria')"
    >
      <div class="wrap">
        <!-- Head -->
        <header class="head headCenter">
          <p class="kicker">{{ t("projectsPage.kicker") }}</p>

          <h2 class="title">
            {{ t("projectsPage.titleWhite") }}
            <span class="grad">{{ t("projectsPage.titleGrad") }}</span>
          </h2>

          <p class="subTriad" :aria-label="t('projectsPage.triadAria')">
            {{ t("projectsPage.triad1") }}
            <span class="dot">·</span>
            {{ t("projectsPage.triad2") }}
            <span class="dot">·</span>
            {{ t("projectsPage.triad3") }}
            <span class="dot">·</span>
            {{ t("projectsPage.triad4") }}
          </p>
        </header>

        <!-- Grid -->
        <div class="projectsGrid" role="list">
          <button
            v-for="p in proyectos"
            :key="p.slug"
            class="projectCard"
            type="button"
            role="listitem"
            :aria-label="`${t('projectsPage.openProject')} ${p.nombre}`"
            @click="abrirProyecto(p)"
          >
            <img
              class="projectMedia"
              :src="p.imagen"
              :alt="`${t('projectsPage.previewOf')} ${p.nombre}`"
              :style="{ objectPosition: p.focus || '50% 25%' }"
              loading="lazy"
              decoding="async"
            />

            <div class="projectOverlay" aria-hidden="true"></div>

            <div class="projectHover" aria-hidden="true">
              <h3 class="projectHoverTitle">{{ p.nombre }}</h3>
              <p class="projectHoverTag">{{ p.tag }}</p>

              <span class="projectHoverBtn" aria-hidden="true">
                {{ t("projectsPage.viewProject") }}
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </span>
            </div>
          </button>
        </div>
      </div>
    </section>
  </Vyka>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import Vyka from "@/components/ui/Background.vue";
import { useLang } from "@/composables/useLang";

// ✅ Single Source of Truth
import { getProyectos } from "@/content/projects.master";

const router = useRouter();
const { t, lang } = useLang();

// ✅ ahora depende del idioma actual
const proyectos = computed(() => getProyectos(lang.value));

const abrirProyecto = (p) => {
  router.push({ name: "ProyectoDetalle", params: { slug: p.slug } });
};
</script>

<style scoped>
.proyectos {
  padding: clamp(82px, 8vw, 120px) 0;
}

.wrap {
  width: min(1400px, 92%);
  margin: 0 auto;
}

.head {
  margin-bottom: clamp(22px, 3vw, 38px);
}

.headCenter {
  text-align: center;
  display: grid;
  justify-items: center;
}

.kicker {
  letter-spacing: 0.22em;
  font-size: 12px;
  font-weight: 800;
  opacity: 0.82;
  margin-bottom: 10px;
  color: rgba(255, 255, 255, 0.72);
  transform: translateY(6px);
  opacity: 0;
  animation: fadeUp 700ms cubic-bezier(.2, .8, .2, 1) 80ms forwards;
}

.title {
  margin: 0;
  font-size: clamp(28px, 3.4vw, 48px);
  line-height: 1.05;
  font-weight: 900;
  color: rgba(255, 255, 255, 0.92);
  transform: translateY(10px);
  opacity: 0;
  animation: fadeUp 820ms cubic-bezier(.2, .8, .2, 1) 140ms forwards;
}

.grad {
  background: linear-gradient(90deg, #6d5df6, #2d8cff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.subTriad {
  margin: 36px 0 0;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.24em;
  color: rgba(255, 255, 255, 0.84);
  text-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
  transform: translateY(10px);
  opacity: 0;
  animation: fadeUp 900ms cubic-bezier(.2, .8, .2, 1) 220ms forwards;
}

.dot {
  display: inline-block;
  margin: 0 10px;
  opacity: 0.45;
  transform: translateY(-1px);
}

.projectsGrid {
  display: grid;
  gap: clamp(18px, 2vw, 24px);
  grid-template-columns: repeat(3, minmax(0, 1fr));
  align-items: stretch;
  position: relative;
  z-index: 0;
  margin-top: clamp(18px, 2.2vw, 28px);
}

@media (min-width: 1101px) {
  .projectsGrid .projectCard:nth-child(4):last-child {
    grid-column: 2;
  }
}

.projectCard {
  position: relative;
  display: block;
  width: 100%;
  text-align: left;
  border: 0;
  padding: 0;
  cursor: pointer;
  border-radius: 22px;
  overflow: hidden;
  background: rgba(10, 10, 14, 0.55);
  border: 1px solid rgba(255, 255, 255, 0.10);
  backdrop-filter: blur(14px);
  box-shadow:
    0 0 0 1px rgba(255, 255, 255, 0.03) inset,
    0 30px 95px rgba(0, 0, 0, 0.65);
  aspect-ratio: 16 / 10;
  min-height: 320px;
  isolation: isolate;
  z-index: 0;
  transform: translateY(14px);
  opacity: 0;
  animation: cardIn 900ms cubic-bezier(.2, .8, .2, 1) forwards;
}

.projectCard:nth-child(1) {
  animation-delay: 120ms;
}

.projectCard:nth-child(2) {
  animation-delay: 180ms;
}

.projectCard:nth-child(3) {
  animation-delay: 240ms;
}

.projectCard:nth-child(4) {
  animation-delay: 300ms;
}

.projectCard::after {
  content: "";
  position: absolute;
  inset: -2px;
  border-radius: 24px;
  pointer-events: none;
  opacity: 0;
  transition: opacity 260ms cubic-bezier(.2, .8, .2, 1);
  background:
    radial-gradient(circle at 26% 18%, rgba(255, 255, 255, 0.10), transparent 60%),
    radial-gradient(circle at 80% 62%, rgba(255, 255, 255, 0.06), transparent 58%);
}

.projectCard::before {
  content: "";
  position: absolute;
  inset: -30% -15%;
  pointer-events: none;
  opacity: 0;
  transform: translateY(18px);
  transition:
    opacity 520ms cubic-bezier(.2, .8, .2, 1),
    transform 650ms cubic-bezier(.2, .8, .2, 1);
  background:
    radial-gradient(circle at 50% 115%, rgba(255, 255, 255, 0.14), transparent 58%);
}

.projectMedia {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transform: scale(1.02);
  transition:
    transform 700ms cubic-bezier(.2, .8, .2, 1),
    filter 700ms cubic-bezier(.2, .8, .2, 1);
  filter: saturate(0.98) contrast(1.05);
}

.projectOverlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(10, 10, 14, 0.40), rgba(10, 10, 14, 0.92)),
    radial-gradient(circle at 50% 35%, rgba(255, 255, 255, 0.05), transparent 62%);
  opacity: 0.72;
  transition:
    opacity 520ms cubic-bezier(.2, .8, .2, 1),
    transform 520ms cubic-bezier(.2, .8, .2, 1);
  transform: translateY(8px);
}

.projectHover {
  position: absolute;
  inset: 0;
  display: grid;
  place-content: center;
  justify-items: center;
  gap: 14px;
  text-align: center;
  padding: 30px;
  opacity: 0;
  transform: translateY(18px);
  filter: blur(10px);
  transition:
    opacity 520ms cubic-bezier(.2, .8, .2, 1),
    transform 620ms cubic-bezier(.2, .8, .2, 1),
    filter 620ms cubic-bezier(.2, .8, .2, 1);
}

.projectHoverTitle {
  margin: 0;
  font-size: clamp(24px, 2.2vw, 34px);
  font-weight: 900;
  letter-spacing: 0.01em;
  color: rgba(255, 255, 255, 0.98);
  text-shadow: 0 18px 46px rgba(0, 0, 0, 0.65);
}

.projectHoverTag {
  margin: 0;
  font-size: 13px;
  letter-spacing: 0.20em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.72);
}

.projectHoverBtn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 18px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 900;
  background: linear-gradient(90deg, #6d5df6, #2d8cff);
  color: rgba(255, 255, 255, 0.98);
  border: 1px solid rgba(255, 255, 255, 0.14);
  box-shadow:
    0 22px 60px rgba(0, 0, 0, 0.55),
    0 0 0 1px rgba(255, 255, 255, 0.06) inset;
  transition:
    transform 240ms cubic-bezier(.2, .8, .2, 1),
    filter 240ms cubic-bezier(.2, .8, .2, 1);
}

.projectCard:hover,
.projectCard:focus-visible {
  transform: translateY(-8px);
  border-color: rgba(255, 255, 255, 0.18);
  box-shadow:
    0 0 0 1px rgba(255, 255, 255, 0.06) inset,
    0 54px 160px rgba(0, 0, 0, 0.82);
  outline: none;
  z-index: 3;
}

.projectCard:hover::after,
.projectCard:focus-visible::after {
  opacity: 1;
}

.projectCard:hover::before,
.projectCard:focus-visible::before {
  opacity: 1;
  transform: translateY(-10px);
}

.projectCard:hover .projectMedia,
.projectCard:focus-visible .projectMedia {
  transform: scale(1.12);
  filter: brightness(0.52) saturate(1.02) contrast(1.12);
}

.projectCard:hover .projectOverlay,
.projectCard:focus-visible .projectOverlay {
  opacity: 0.99;
  transform: translateY(0);
  background:
    linear-gradient(180deg, rgba(7, 7, 10, 0.86), rgba(7, 7, 10, 0.99)),
    radial-gradient(circle at 50% 35%, rgba(255, 255, 255, 0.06), transparent 62%);
}

.projectCard:hover .projectHover,
.projectCard:focus-visible .projectHover {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0);
}

.projectCard:hover .projectHoverBtn,
.projectCard:focus-visible .projectHoverBtn {
  transform: translateY(-2px) scale(1.01);
  filter: brightness(1.05);
}

@media (max-width: 1100px) {
  .projectsGrid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .projectCard {
    aspect-ratio: 16 / 11;
    min-height: 300px;
  }
}

@media (max-width: 640px) {
  .projectsGrid {
    grid-template-columns: 1fr;
  }

  .projectCard {
    aspect-ratio: 16 / 12;
    min-height: 260px;
  }

  .subTriad {
    letter-spacing: 0.18em;
    font-size: 11px;
  }

  .dot {
    margin: 0 8px;
  }
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes cardIn {
  from {
    opacity: 0;
    transform: translateY(18px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .kicker,
  .title,
  .subTriad,
  .projectCard {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
  }

  .projectCard,
  .projectMedia,
  .projectOverlay,
  .projectHover,
  .projectHoverBtn,
  .projectCard::before,
  .projectCard::after {
    transition: none !important;
  }
}
</style>