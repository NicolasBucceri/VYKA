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

        <BotonSecundario size="lg" icon="→" @click="goToEmpresa">
          {{ t("nosotrosCard.button") }}
        </BotonSecundario>

      </div>
    </div>
  </article>
</template>

<script setup>
import { useLang } from "@/composables/useLang";
import BotonSecundario from "@/components/ui/BotonSecundario.vue";
import { useRouter } from "vue-router";

const router = useRouter();

function goToEmpresa() {
  router.push({ name: "Empresa" });
}

const { t } = useLang();
</script>

<style scoped>
/* Import solo para la comilla */
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600&display=swap");

/* =========================
   CARD
========================= */

.card {
  position: relative;
  border-radius: 22px;
  overflow: hidden;
  background: #0b0b10;
  border: 1px solid rgba(255, 255, 255, 0.10);
  backdrop-filter: blur(16px);

  box-shadow:
    0 0 0 1px rgba(255, 255, 255, 0.03) inset,
    0 26px 85px rgba(0, 0, 0, 0.65);
}

.card::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  border: 1px solid rgba(45, 140, 255, 0.14);
  pointer-events: none;
}

/* =========================
   GRID
========================= */

.content {
  position: relative;
  z-index: 3;

  padding: clamp(70px, 5vw, 110px);

  display: grid;
  grid-template-columns: 1.15fr 1fr;
  gap: clamp(28px, 4vw, 60px);
  align-items: center;
}

.col {
  position: relative;
}

.content::before {
  content: "";
  position: absolute;
  top: 18%;
  bottom: 18%;
  left: 55%;
  width: 1px;

  background: linear-gradient(to bottom,
      transparent,
      rgba(255, 255, 255, 0.10),
      transparent);
}

/* =========================
   OVERLAYS
========================= */

.grid {
  position: absolute;
  inset: 0;
  opacity: 0.38;

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

  background: linear-gradient(to right,
      transparent 0%,
      rgba(255, 255, 255, 0.06) 22%,
      transparent 22.2%,
      transparent 74%,
      rgba(255, 255, 255, 0.06) 74.2%,
      transparent 74.4%);
}

.glow {
  position: absolute;
  inset: -45%;

  background:
    radial-gradient(circle at 70% 30%, rgba(45, 140, 255, 0.08), transparent 60%),
    radial-gradient(circle at 30% 70%, rgba(255, 255, 255, 0.04), transparent 60%);

  filter: blur(80px);
}

.bottom-accent {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2px;

  background: linear-gradient(to right, #2D8CFF, rgba(45, 140, 255, 0.28), transparent);
}

/* =========================
   TITLE
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
}

.t1 {
  color: #fff;
}

.t2,
.t3 {
  color: #2D8CFF;
}

.title-beam {
  position: absolute;
  left: -4%;
  right: -18%;
  top: 86px;
  height: 2px;

  background: linear-gradient(to right,
      rgba(255, 255, 255, 0.20),
      rgba(45, 140, 255, 0.55),
      rgba(255, 255, 255, 0.10),
      transparent);
}

/* =========================
   RIGHT
========================= */

.right {
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.quote-wrap {
  position: relative;
  padding-left: 62px;
}

.quote {
  position: absolute;
  left: -15px;
  top: -50px;

  font-family: "Playfair Display", serif;
  font-weight: 600;

  font-size: 156px;
  line-height: 1;
  color: #b4b4b47a;
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
}

.brand {
  color: #2D8CFF;
  font-weight: 800;
}

.card-btn {
  align-self: center;
  width: min(540px, 100%);
}

/* =========================
   RESPONSIVE
========================= */

@media (max-width:980px) {

  .content {
    grid-template-columns: 1fr;
  }

  .content::before {
    display: none;
  }

  .title-beam {
    top: 120px;
  }

  .card-btn {
    width: 100%;
  }

}
</style>
```
