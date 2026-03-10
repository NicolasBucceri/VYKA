<template>
  <section class="hero">
    <!-- 🎥 Video -->
    <video class="hero-video" autoplay muted loop playsinline>
      <source src="@/assets/Hero/VideoHero.webm" type="video/mp4" />
    </video>

    <!-- 🌑 Overlay -->
    <div class="hero-overlay"></div>

    <!-- 🧠 Contenido -->
    <div class="hero-content">
      <p class="hero-subtitle">{{ t("hero.subtitle") }}</p>

      <h1 class="hero-title">
        <span class="hero-line">
          {{ t("hero.titleLine1") }}
          <span class="hero-accent">
            {{ t("hero.titleAccent") }}
          </span>
        </span>
      </h1>

      <ButtonPrimary class="hero-cta" @click="openWhatsApp('proyecto')">
        {{ t("hero.cta") }}
      </ButtonPrimary>
    </div>
  </section>
</template>

<script setup>
import { useLang } from "@/composables/useLang";
import ButtonPrimary from "@/components/ui/BotonPrimario.vue";
import { openWhatsApp } from "@/utils/whatsapp";

const { t } = useLang();
</script>

<style scoped>

/* Fonts */
@import url("https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100..1000&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800&display=swap");

/* Variables */
:global(:root) {
  --font-body: "Roboto Flex", system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
  --font-accent: "Space Grotesk", "Inter", sans-serif;
  --font-accent2: "Montserrat", sans-serif;

  --vyka-blue-1: #a7dbff;
  --vyka-blue-2: #4aa8ff;
  --vyka-blue-3: #1e6fff;
}

/* Layout */
.hero {
  position: relative;
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 18px;
  text-align: center;
  overflow: hidden;
}

/* Video */
.hero-video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;

  object-fit: cover;
  object-position: center top;

  z-index: 0;
}

/* Overlay */
.hero-overlay {
  position: absolute;
  inset: 0;

  background:
    radial-gradient(circle at 70% 55%, rgba(0,0,0,0.35), rgba(0,0,0,0.85) 60%, rgba(0,0,0,0.95)),
    linear-gradient(to bottom, rgba(0,0,0,0.32), rgba(0,0,0,0.32));

  z-index: 1;
}

/* Contenido */
.hero-content {
  position: relative;
  z-index: 2;

  width: 100%;
  max-width: 1100px;

  color: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Subtitulo */
.hero-subtitle {
  font-family: var(--font-body);
  font-size: clamp(0.95rem, 1.2vw, 1.05rem);
  font-weight: 350;

  opacity: 0.85;
  letter-spacing: 0.3px;

  margin-bottom: 14px;
  text-transform: uppercase;
}

/* Titulo */
.hero-title {
  font-family: var(--font-body);
  font-size: clamp(1.7rem, 6vw, 3.2rem);
  font-weight: 400;

  letter-spacing: 0.8px;
  line-height: 1.2;

  text-transform: uppercase;
  margin: 0;
}

/* ESTA ES LA CLAVE */
.hero-line {
  white-space: nowrap;
}

/* Texto azul */
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
    0 0 8px rgba(74,168,255,0.25),
    0 0 18px rgba(74,168,255,0.15);
}

/* CTA */
.hero-cta {
  margin-top: 34px;
}

/* ======================
   RESPONSIVE
====================== */

@media (max-width: 1024px) {

  .hero-title {
    font-size: clamp(2rem, 5vw, 2.8rem);
  }

  .hero-subtitle {
    font-size: clamp(0.9rem, 1.1vw, 1rem);
  }

}

@media (max-width: 768px) {

  .hero {
    padding: 0 14px;
  }

  .hero-title {
    font-size: clamp(1.8rem, 6vw, 2.4rem);
  }

  /* En mobile permitimos que rompa línea */
  .hero-line {
    white-space: normal;
  }

  .hero-cta {
    margin-top: 24px;
  }

}

@media (max-width: 520px) {

  .hero {
    padding: 0 12px;
  }

  .hero-title {
    font-size: clamp(1.5rem, 7vw, 2rem);
  }

  .hero-subtitle {
    font-size: clamp(0.8rem, 2.5vw, 0.9rem);
  }

  .hero-cta {
    width: 100%;
    font-size: 0.95rem;
  }

}
</style>