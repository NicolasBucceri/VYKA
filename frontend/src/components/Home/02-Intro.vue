<template>
  <section class="intro">
    <Vyka>
      <div class="intro__wrap">
        <div class="intro__topline" />

        <div class="intro__grid">
          <!-- LEFT -->
          <div class="intro__left">
            <p class="intro__eyebrow">{{ t("intro.eyebrow") }}</p>

            <h1 class="intro__title">
              {{ t("intro.title") }}
            </h1>

            <div class="intro__accentline" />

            <h2 class="intro__subtitle">
              {{ t("intro.subtitleLine") }}
              <span class="intro__accent">{{ t("intro.subtitleAccent") }}</span>
            </h2>

            <p class="intro__desc">
              {{ t("intro.desc") }}
            </p>

            <div class="intro__ctaRow">
              <ButtonPrimary class="intro__cta" href="#metodo" :aria-label="t('intro.ariaMetodo')">
                {{ t("intro.ctaMetodo") }}
                <span class="btnIcon">↓</span>
              </ButtonPrimary>

              <ButtonSecondary class="intro__cta" href="#proyectos" :aria-label="t('intro.ariaProyectos')">
                {{ t("intro.ctaProyectos") }}
              </ButtonSecondary>
            </div>
          </div>

          <!-- RIGHT / EARTH CANVAS -->
          <div class="intro__right">
            <EarthCanvas />
          </div>
        </div>
      </div>
    </Vyka>
  </section>
</template>

<script setup>
import Vyka from "@/components/ui/Background.vue";
import EarthCanvas from "@/components/ui/EarthCanvas.vue";
import ButtonPrimary from "@/components/ui/BotonPrimario.vue";
import ButtonSecondary from "@/components/ui/BotonSecundario.vue";
import { useLang } from "@/composables/useLang";

const { t } = useLang();
</script>

<style scoped>
.intro {
  --vyka-bg: #181818;
  --vyka-white: #E0EEEF;
  --vyka-gray: #B4B4B4;
  --vyka-violet: #6D5DF6;
  --vyka-blue: #2D8CFF;

  --glass: rgba(255, 255, 255, 0.04);
  --stroke: rgba(255, 255, 255, 0.08);
  --shadow: 0 18px 60px rgba(0, 0, 0, 0.45);
}

.intro__wrap {
  max-width: 1200px;
  margin: 0 auto;
  padding: clamp(28px, 4vw, 60px) clamp(18px, 3vw, 28px);
}

.intro__topline {
  height: 1px;
  background: linear-gradient(90deg,
      rgba(45, 140, 255, 0.35),
      rgba(255, 255, 255, 0.06),
      transparent);
  margin-bottom: clamp(18px, 3vw, 28px);
}

/* =========================
   GRID LAYOUT
========================= */
.intro__grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  grid-template-areas: 
    "left right";
  gap: clamp(24px, 4vw, 56px);
  align-items: start;
}

/* Reasignar áreas */
.intro__left {
  grid-area: left;
}

.intro__right {
  grid-area: right;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-height: 320px; /* tamaño del canvas */
}

/* =========================
   TIPOGRAFÍA Y ESTILO
========================= */
.intro__eyebrow {
  letter-spacing: 0.22em;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 12px;
  color: rgba(224, 238, 239, 0.65);
  margin: 0 0 10px;
}

.intro__title {
  margin: 0;
  font-size: clamp(28px, 3.6vw, 44px);
  line-height: 1.05;
  color: var(--vyka-white);
  font-weight: 600;
}

.intro__accentline {
  width: 100%;
  height: 2px;
  margin: 14px 0 18px;
  background: linear-gradient(90deg,
      rgba(45, 140, 255, 0.7),
      rgba(109, 93, 246, 0.25),
      transparent);
  opacity: 0.9;
}

.intro__subtitle {
  margin: 0 0 12px;
  font-size: clamp(18px, 2vw, 26px);
  line-height: 1.25;
  font-weight: 500;
  color: rgba(224, 238, 239, 0.92);
}

.intro__accent {
  color: var(--vyka-blue);
}

.intro__desc {
  margin: 0 0 18px;
  max-width: 56ch;
  color: rgba(180, 180, 180, 0.9);
  font-size: 15px;
  line-height: 1.6;
}

.intro__ctaRow {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 22px;
}

.intro__cta {
  display: inline-flex;
}

.btnIcon {
  opacity: 0.95;
  margin-left: 6px;
}

/* =========================
   RESPONSIVE
========================= */
@media (max-width: 980px) {
  .intro__grid {
    grid-template-columns: 1fr;
    grid-template-areas:
      "left"
      "right";
  }

  .intro__right {
    min-height: 280px;
    margin-top: 24px;
  }

  .intro__desc {
    max-width: 100%;
  }
}

@media (max-width: 520px) {
  .intro__right {
    min-height: 200px;
  }
}
</style>