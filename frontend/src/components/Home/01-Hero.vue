<template>
  <section class="hero">
    <!-- 🎥 Video -->
    <video class="hero-video" autoplay muted loop playsinline>
      <source src="@/assets/Hero/VideoHero.mp4" type="video/mp4" />
    </video>

    <!-- 🌑 Overlay -->
    <div class="hero-overlay"></div>

    <!-- 🧠 Contenido -->
    <div class="hero-content">
      <p class="hero-subtitle">{{ t("hero.subtitle") }}</p>

      <h1 class="hero-title">
        {{ t("hero.titleLine1") }}
        <span class="hero-accent">{{ t("hero.titleAccent") }}</span>
      </h1>

      <ButtonPrimary class="hero-cta">
        {{ t("hero.cta") }}
      </ButtonPrimary>
    </div>
  </section>
</template>
 <!-- ashahsahsahsashashashashasahsahsahsahsahsahsahsahsas -->
<script setup>
import { useLang } from "@/composables/useLang";
import ButtonPrimary from "@/components/ui/BotonPrimario.vue";

const { t } = useLang();
</script>

<style scoped>
/* ✅ Google Font */
@import url("https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100..1000&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800&display=swap");

/* ✅ Average Sans (si la tenés) */


/* 🔥 IMPORTANTE: variables globales (fix scoped) */
:global(:root) {
  --font-body: "Roboto Flex", system-ui, -apple-system, "Segoe UI", Roboto,
    Arial, sans-serif;
  --font-accent: "Space Grotesk", "Inter", sans-serif;
  --font-accent: "Sora", "Inter", sans-serif;
  --font-accent2: "Montserrat", sans-serif;

  /* 🎯 degradé EXACTO estilo tu diseño */
  --vyka-blue-1: #a7dbff;
  --vyka-blue-2: #4aa8ff;
  --vyka-blue-3: #1e6fff;
}

/* 🧱 Layout */
.hero {
  position: relative;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 18px;
  text-align: center;
}

/* 🎥 Video */
.hero-video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
}

/* 🌑 Overlay */
.hero-overlay {
  position: absolute;
  inset: 0;
  background: radial-gradient(
      circle at 70% 55%,
      rgba(0, 0, 0, 0.35),
      rgba(0, 0, 0, 0.85) 60%,
      rgba(0, 0, 0, 0.95)
    ),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.322), rgba(0, 0, 0, 0.315));
  z-index: 1;
}

/* 🧠 Content */
.hero-content {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1100px;
  color: #fff;
}

/* Subtítulo */
.hero-subtitle {
  font-family: var(--font-title);
  font-size: clamp(0.95rem, 1.2vw, 1.05rem);
  font-weight: 350;
  opacity: 0.85;
  letter-spacing: 0.3px;
  margin-bottom: 14px;
  text-transform: uppercase;
}

/* Título */
.hero-title {
  font-family: var(--font-title);
  font-size: clamp(1.7rem, 3.4vw, 2.6rem);
  font-weight: 400;
  letter-spacing: 0.8px;
  line-height: 1.25;
  text-transform: uppercase;
  margin: 0;
  white-space: nowrap;
}

/* 🔥 ACÁ está el degradé correcto */
.hero-accent {
  display: inline-block;
  font-family: var(--font-accent2);
  font-weight: 700;
  letter-spacing: 1.4px;

  background: linear-gradient(
    90deg,
    var(--vyka-blue-1) 0%,
    var(--vyka-blue-2) 45%,
    var(--vyka-blue-3) 100%
  );

  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;

  text-shadow:
    0 0 8px rgba(74, 168, 255, 0.25),
    0 0 18px rgba(74, 168, 255, 0.15);

  transform: translateZ(0);
}

/* CTA: solo separación externa */
.hero-cta {
  margin-top: 34px;
}

/* Mobile fix */
@media (max-width: 520px) {
  .hero-title {
    white-space: normal;
  }
}
</style>