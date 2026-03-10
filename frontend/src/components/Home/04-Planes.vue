<template>
  <section class="planes" id="planes">
    <div class="planes-inner">
      <!-- HEADER -->
      <header class="planes-header">
        <h2 class="planes-title">
          {{ t("planes.title") }} <span>{{ t("planes.titleAccent") }}</span>
          {{ t("planes.titleEnd") }}
        </h2>
      </header>

      <!-- GRID -->
      <div class="planes-grid">
<CardPlan
  v-for="plan in planes"
  :key="plan.plan"
  :plan="plan.plan"
  :slug="plan.slug"
  :titulo="plan.titulo"
  :precio="formatearPrecio(plan)"
  :moneda="moneda"
  :features="plan.features"
  :recomendado="plan.recomendado"
  :video="plan.recomendado ? videoPlan : null"
/>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import CardPlan from "@/components/ui/CardPlan.vue";
import videoPlan from "@/assets/Planes/PlanRecomendado.webm";
import { useLang } from "@/composables/useLang";

const { t, lang } = useLang();

const planes = computed(() => t("planes.items"));

const moneda = computed(() => {
  return lang.value === "en" ? "USD" : "ARS";
});

const formatearPrecio = (plan) => {
  const isEnglish = lang.value === "en";
  const amount = isEnglish ? plan.precioUSD : plan.precioARS;

  return new Intl.NumberFormat(isEnglish ? "en-US" : "es-AR", {
    maximumFractionDigits: 0,
  }).format(amount);
};
</script>

<style scoped>
/* =========================
   SECTION
========================= */
.planes {
  position: relative;
  overflow: hidden;
  padding: 90px 0 110px;
  background: #0b0b0f;
}

.planes::before {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    radial-gradient(
      900px 500px at 0% 100%,
      rgba(109, 93, 246, 0.2),
      transparent 60%
    ),
    radial-gradient(
      900px 500px at 100% 100%,
      rgba(45, 140, 255, 0.12),
      transparent 60%
    );
}

.planes-inner {
  position: relative;
  z-index: 1;
  width: min(1180px, 92%);
  margin: auto;
}

.planes-header {
  margin-bottom: 40px;
}

.planes-title {
  font-size: clamp(2rem, 3vw, 2.25rem);
  color: #fff;
  line-height: 1.1;
}

.planes-title span {
  color: #6d5df6;
}

/* =========================
   GRID DESKTOP
========================= */
.planes-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 26px;
  align-items: stretch;
}

/* centra la última card si queda sola */
.planes-grid > *:last-child:nth-child(odd) {
  grid-column: span 2;
  justify-self: center;
  width: min(100%, 50%);
}

/* =========================
   TABLET / SMALL DESKTOP
   (todavía pueden entrar 2)
========================= */
@media (max-width: 1024px) and (min-width: 861px) {
  .planes {
    padding: 80px 0 95px;
  }

  .planes-header {
    margin-bottom: 30px;
  }

  .planes-title {
    font-size: clamp(1.8rem, 4vw, 2.1rem);
  }

  .planes-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 18px;
  }

  .planes-grid > *:last-child:nth-child(odd) {
    grid-column: span 2;
    justify-self: center;
    width: min(100%, 48%);
  }
}

/* =========================
   TABLET CHICA + MOBILE
   (1 card debajo de la otra)
========================= */
@media (max-width: 860px) {
  .planes {
    padding: 70px 0 85px;
  }

  .planes-inner {
    width: min(100%, 92%);
  }

  .planes-header {
    margin-bottom: 24px;
  }

  .planes-title {
    font-size: clamp(1.6rem, 7vw, 2rem);
    line-height: 1.15;
  }

  .planes-grid {
    grid-template-columns: 1fr;
    gap: 18px;
  }

  .planes-grid > *:last-child:nth-child(odd) {
    grid-column: auto;
    justify-self: stretch;
    width: 100%;
  }
}

/* =========================
   MOBILE CHICO
========================= */
@media (max-width: 520px) {
  .planes {
    padding: 60px 0 75px;
  }

  .planes-title {
    font-size: clamp(1.45rem, 8vw, 1.8rem);
  }
}
</style>