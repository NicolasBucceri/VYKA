<template>
  <Background>
    <section v-if="plan" class="plan-detalle">
      <div class="bg-orb orb-1"></div>
      <div class="bg-orb orb-2"></div>
      <div class="grid-noise"></div>

      <div class="wrap">
        <PlanHero :plan="plan" />

        <LineaDeTiempo :proceso="plan.proceso" />

        <section class="info-grid">
<PlanInfo
  class="card-alcance"
  :titulo="t('planDetail.info.scope.title')"
  :descripcion="t('planDetail.info.scope.desc')"
  :items="plan.alcance"
  tipo="check-grid"
/>

<PlanInfo
  class="card-para-quien"
  :titulo="t('planDetail.info.forWho.title')"
  :descripcion="t('planDetail.info.forWho.desc')"
  :items="plan.paraQuien"
  tipo="chips"
/>

<PlanInfo
  class="card-estructura"
  :titulo="t('planDetail.info.structure.title')"
  :descripcion="t('planDetail.info.structure.desc')"
  :items="plan.estructura"
  tipo="steps"
/>

<PlanInfo
  class="card-tiempos"
  :titulo="t('planDetail.info.times.title')"
  :descripcion="t('planDetail.info.times.desc')"
  :items="plan.tiempos"
  tipo="timeline"
/>

<PlanInfo
  class="card-revisiones"
  :titulo="t('planDetail.info.revisions.title')"
  :descripcion="t('planDetail.info.revisions.desc')"
  :items="plan.revisiones"
  tipo="mini-cards"
/>
        </section>

        <PlanCTA :plan="plan" />
      </div>
    </section>

    <section v-else class="plan-detalle not-found">
      <div class="wrap">
        <div class="not-found-card">
          <p class="eyebrow">{{ t("planDetalleUI.errorEyebrow") }}</p>
          <h1 class="title">{{ t("planDetalleUI.errorTitulo") }}</h1>
          <p class="desc">
            {{ t("planDetalleUI.errorDescripcion") }}
          </p>

          <router-link to="/" class="cta-btn">
            {{ t("planDetalleUI.volverInicio") }}
          </router-link>
        </div>
      </div>
    </section>
  </Background>
</template>

<script setup>
import { computed } from "vue";
import { useLang } from "@/composables/useLang";
import { getPlanBySlug } from "@/data/planesDetalle";

import Background from "@/components/ui/Background.vue";
import PlanHero from "@/components/Planes/01-PlanHero.vue";
import LineaDeTiempo from "@/components/Planes/02-LineaDeTiempo.vue";
import PlanInfo from "@/components/Planes/03-PlanInfo.vue";
import PlanCTA from "@/components/Planes/04-PlanCTA.vue";

const props = defineProps({
  slug: {
    type: String,
    required: true,
  },
});

const { t } = useLang();

const planesDetalle = computed(() => {
  const data = t("planesDetalle");
  return Array.isArray(data) ? data : [];
});

const plan = computed(() => {
  return getPlanBySlug(planesDetalle.value, props.slug);
});
</script>

<style scoped>
.plan-detalle {
  position: relative;
  min-height: 100vh;
  padding: 108px 0 72px;
  color: #fff;
  overflow: hidden;
}

.wrap {
  position: relative;
  z-index: 2;
  width: min(1320px, 92%);
  margin: 0 auto;
}

/* fondo */
.bg-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  pointer-events: none;
  z-index: 0;
}

.orb-1 {
  width: 320px;
  height: 320px;
  left: -80px;
  top: 120px;
  background: rgba(109, 93, 246, 0.18);
}

.orb-2 {
  width: 340px;
  height: 340px;
  right: -100px;
  top: 420px;
  background: rgba(45, 140, 255, 0.14);
}

.grid-noise {
  position: absolute;
  inset: 0;
  z-index: 0;
  opacity: 0.08;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px);
  background-size: 32px 32px;
  mask-image: radial-gradient(circle at center, black 30%, transparent 85%);
  -webkit-mask-image: radial-gradient(circle at center, black 30%, transparent 85%);
}

/* =========================
   INFO GRID
========================= */
.info-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 22px;
  margin-bottom: 28px;
  align-items: start;
}

/* Alcance primero y full width */
.card-alcance {
  grid-column: 1 / -1;
}

/* Segunda fila */
.card-para-quien {
  grid-column: span 1;
}

.card-estructura {
  grid-column: span 1;
}

/* Tercera fila */
.card-tiempos {
  grid-column: span 1;
}

.card-revisiones {
  grid-column: span 1;
}

/* Tablet / mobile */
@media (max-width: 980px) {
  .info-grid {
    grid-template-columns: 1fr;
  }

  .card-alcance,
  .card-para-quien,
  .card-estructura,
  .card-tiempos,
  .card-revisiones {
    grid-column: auto;
  }

  .plan-detalle {
    padding: 96px 0 68px;
  }
}

.not-found {
  display: flex;
  align-items: center;
}

.not-found-card {
  max-width: 760px;
  border-radius: 28px;
  padding: 30px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

.eyebrow {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: #8f93a8;
  margin-bottom: 14px;
}

.title {
  font-size: clamp(2.3rem, 5vw, 4rem);
  line-height: 1.02;
  margin-bottom: 12px;
}

.desc {
  color: #cfd2e3;
  line-height: 1.75;
  margin-bottom: 20px;
}

.cta-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 220px;
  padding: 14px 22px;
  border-radius: 999px;
  text-decoration: none;
  color: #fff;
  font-weight: 600;
  background: linear-gradient(135deg, #6d5df6, #2d8cff);
  box-shadow: 0 10px 30px rgba(109, 93, 246, 0.28);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.cta-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 16px 36px rgba(109, 93, 246, 0.38);
}

@media (max-width: 700px) {
  .wrap {
    width: min(1320px, 94%);
  }

  .not-found-card {
    padding: 22px;
    border-radius: 22px;
  }
}
</style>