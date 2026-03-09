<!-- src/components/NosotrosCard.vue -->
<template>
  <article class="card">
    <!-- overlays -->
    <span class="grid"></span>
    <span class="v-lines"></span>
    <span class="glow"></span>
    <span class="bottom-accent"></span>

    <div class="content">
      <!-- LEFT -->
      <div class="col left">
        <p class="kicker">{{ t("nosotrosCard.kicker") }}</p>

        <h2 class="title">
          <span class="t1">{{ t("nosotrosCard.title.line1") }}</span>
          <span class="t2">{{ t("nosotrosCard.title.line2") }}</span>
          <span class="t3">{{ t("nosotrosCard.title.line3") }}</span>
        </h2>

        <!-- beam horizontal que cruza -->
        <span class="title-beam"></span>
      </div>

      <!-- RIGHT -->
      <div class="col right">
        <div class="quote-wrap">
          <span class="quote">“</span>

          <div class="text">
            <p>
              {{ t("nosotrosCard.text.p1a") }}
              <span class="brand">{{ t("nosotrosCard.text.brand") }}</span>
              {{ " " + t("nosotrosCard.text.p1b") }}
            </p>

            <p>
              {{ t("nosotrosCard.text.p2") }}
            </p>
          </div>
        </div>

        <button class="btn" type="button">
          {{ t("nosotrosCard.button") }}
        </button>
      </div>
    </div>
  </article>
</template>

<script setup>
import { useLang } from "@/composables/useLang";
const { t } = useLang();
</script>

<style scoped>
/* ✅ Import SOLO para la comilla (editorial premium) */
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600&display=swap");

/* ... TODO tu CSS queda igual ... */
</style>
<style scoped>
/* ✅ Import SOLO para la comilla (editorial premium) */
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600&display=swap");

/* =========================
   CARD (CONTENEDOR)
========================= */

.card {
  position: relative;
  border-radius: 22px;
  overflow: hidden;

  background: #0b0b10; /* sólido */
  border: 1px solid rgba(255, 255, 255, 0.10);
  backdrop-filter: blur(16px);

  box-shadow:
    0 0 0 1px rgba(255, 255, 255, 0.03) inset,
    0 26px 85px rgba(0, 0, 0, 0.65);
}

/* Borde exterior sutil */
.card::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  border: 1px solid rgba(45, 140, 255, 0.14);
  pointer-events: none;
}

/* =========================
   GRID LAYOUT
========================= */

.content {
  position: relative;
  z-index: 3;

  /* ✅ clamp corregido (min < max) */
  padding: clamp(70px, 5vw, 110px);

  display: grid;
  grid-template-columns: 1.15fr 1fr;
  gap: clamp(28px, 4vw, 60px);
  align-items: center;
}

.col {
  position: relative;
}

/* divisor vertical suave */
.content::before {
  content: "";
  position: absolute;
  top: 18%;
  bottom: 18%;
  left: 55%;
  width: 1px;

  background: linear-gradient(
    to bottom,
    transparent,
    rgba(255, 255, 255, 0.10),
    transparent
  );

  pointer-events: none;
  opacity: 0.7;
}

/* =========================
   OVERLAYS (GRID + LINES + GLOW + ACCENT)
========================= */

.grid {
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0.38;

  /* 2 capas: grilla grande + chica */
  background:
    linear-gradient(to right, rgba(255, 255, 255, 0.06) 1px, transparent 1px) 0 0 / 120px 120px,
    linear-gradient(to bottom, rgba(255, 255, 255, 0.06) 1px, transparent 1px) 0 0 / 120px 120px,
    linear-gradient(to right, rgba(255, 255, 255, 0.035) 1px, transparent 1px) 0 0 / 60px 60px,
    linear-gradient(to bottom, rgba(255, 255, 255, 0.035) 1px, transparent 1px) 0 0 / 60px 60px;

  mask-image: radial-gradient(circle 820px at 42% 38%, #000 64%, transparent 92%);
}

.v-lines {
  position: absolute;
  inset: 0;
  opacity: 0.18;
  pointer-events: none;

  background: linear-gradient(
    to right,
    transparent 0%,
    rgba(255, 255, 255, 0.06) 22%,
    transparent 22.2%,
    transparent 74%,
    rgba(255, 255, 255, 0.06) 74.2%,
    transparent 74.4%
  );

  mask-image: radial-gradient(circle 760px at 55% 40%, #000 58%, transparent 92%);
}

.glow {
  position: absolute;
  inset: -45%;
  pointer-events: none;

  /* ✅ glow sutil (mantiene fondo sólido pero con profundidad) */
  background:
    radial-gradient(circle at 70% 30%, rgba(45,140,255,0.08), transparent 60%),
    radial-gradient(circle at 30% 70%, rgba(255,255,255,0.04), transparent 60%);

  filter: blur(80px);
}

.bottom-accent {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;

  background: linear-gradient(to right, #2D8CFF, rgba(45, 140, 255, 0.28), transparent);
}

/* =========================
   LEFT (TÍTULO)
========================= */

.kicker {
  font-size: 12px;
  letter-spacing: 0.2em;
  color: rgba(255, 255, 255, 0.55);
  margin-bottom: 18px;
}

.title {
  line-height: 1.02;
  display: grid;
  gap: 12px;
}

.t1,
.t2,
.t3 {
  font-size: clamp(32px, 3.6vw, 56px);
  font-weight: 900;
  letter-spacing: -0.02em;
}

.t1 { color: #ffffff; }
.t2, .t3 { color: #2D8CFF; }

/* Beam */
.title-beam {
  position: absolute;
  left: -4%;
  right: -18%;
  top: 86px;
  height: 2px;

  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.20),
    rgba(45, 140, 255, 0.55),
    rgba(255, 255, 255, 0.10),
    transparent
  );

  opacity: 0.9;
}

/* =========================
   RIGHT (QUOTE + TEXTO + BOTÓN)
========================= */

.right {
  display: flex;
  flex-direction: column;
  gap: 28px;
  justify-content: flex-start;
}

.quote-wrap {
  position: relative;
  padding-left: 62px;
}

/* ✅ ACÁ está el cambio: tipografía de la comilla */
.quote {
  position: absolute;
  left: -15px;
  top: -50px;

  font-family: "Playfair Display", serif; /* <-- NUEVO */
  font-weight: 600;                       /* <-- NUEVO */

  font-size: 156px;
  line-height: 1;
  color: #b4b4b47a;

  /* microajuste visual para que se sienta “de imprenta” */
  transform: translateY(2px);
}

.text {
  max-width: 520px;
  display: grid;
  gap: 18px;
}

.text p {
  margin: 0;
  font-size: 15px;
  line-height: 1.85;
  color: rgba(255, 255, 255, 0.80);
  letter-spacing: 0.01em;
}

.brand {
  color: #2D8CFF;
  font-weight: 800;
}

/* Botón (✅ una sola definición, ancho como referencia) */
.btn {
  align-self: center;
  margin-top: 10px;

  width: min(540px, 100%);
  height: 48px;

  border-radius: 999px;
  border: 1px solid rgba(45, 140, 255, 0.45);
  background: rgba(0, 0, 0, 0.12);
  color: #fff;
  font-weight: 800;

  cursor: pointer;
  transition: transform 0.25s ease, background 0.25s ease, border-color 0.25s ease;

  box-shadow:
    0 10px 30px rgba(0, 0, 0, 0.35),
    0 0 0 1px rgba(255, 255, 255, 0.03) inset;
}

.btn:hover {
  background: rgba(45, 140, 255, 0.10);
  border-color: rgba(45, 140, 255, 0.75);
  transform: translateY(-1px);
}

/* =========================
   RESPONSIVE
========================= */

@media (max-width: 980px) {
  .content {
    grid-template-columns: 1fr;
  }

  .content::before {
    display: none;
  }

  .title-beam {
    top: 120px;
    right: -6%;
  }

  .btn {
    width: 100%;
  }
}
</style>