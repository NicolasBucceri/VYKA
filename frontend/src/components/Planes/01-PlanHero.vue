<template>
  <section class="plan-hero">
    <div class="hero-inner">
      <div class="hero-copy">
        <p class="eyebrow">{{ plan.numeroPlan || `PLAN ${plan.id}` }}</p>

        <p v-if="plan.subtitulo" class="subtitle">
          {{ plan.subtitulo }}
        </p>

        <h1 class="title">
          {{ plan.titulo }}
        </h1>

        <p class="desc">
          {{ plan.descripcion }}
        </p>
      </div>

      <div class="hero-cards">
        <article class="info-card">
          <span class="info-label">{{ t("planDetail.hero.focusLabel") }}</span>
          <p class="info-text">{{ plan.enfoque }}</p>
        </article>

        <article class="info-card">
          <span class="info-label">{{ t("planDetail.hero.modeLabel") }}</span>
          <p class="info-text">{{ plan.modalidad }}</p>
        </article>

        <article class="info-card">
          <span class="info-label">{{ t("planDetail.hero.basePriceLabel") }}</span>

          <p class="info-price">
            <span class="price-from">{{ t("planDetail.hero.from") }}</span>
            <span class="price-value">{{ plan.precio }}</span>
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useLang } from "@/composables/useLang";

defineProps({
  plan: {
    type: Object,
    required: true,
  },
});

const { t } = useLang();
</script>

<style scoped>
.plan-hero {
  margin-bottom: 56px;
}

.hero-inner {
  position: relative;
  width: 100%;
  max-width: 1460px;
  margin: 0 auto;
  padding: 0;
}

.hero-copy {
  position: relative;
  z-index: 1;
  max-width: 1240px;
  margin: 0 auto;
  text-align: center;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 30px;
  padding: 0 14px;
  margin: 0 0 16px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #d7dcf7;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.subtitle {
  margin: 0 0 14px;
  color: #6f86ff;
  font-size: clamp(1.15rem, 2vw, 1.55rem);
  font-weight: 500;
  line-height: 1.3;
  letter-spacing: -0.02em;
}

.title {
  margin: 0 0 20px;
  color: #ffffff;
  font-size: clamp(3.4rem, 6.6vw, 6.4rem);
  line-height: 0.94;
  letter-spacing: -0.065em;
  font-weight: 700;
  text-wrap: balance;
}

.desc {
  max-width: 1100px;
  margin: 0 auto;
  color: #c8d0e6;
  font-size: clamp(1rem, 1.35vw, 1.18rem);
  line-height: 1.75;
}

.hero-cards {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
  max-width: 1340px;
  margin: 40px auto 0;
}

.info-card {
  min-height: 180px;
  padding: 28px 24px 24px;
  border-radius: 24px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.028),
    rgba(255, 255, 255, 0.012)
  );
  border: 1px solid rgba(255, 255, 255, 0.06);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.025),
    0 18px 38px rgba(0, 0, 0, 0.18);
  text-align: left;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.info-label {
  display: inline-block;
  margin-bottom: 18px;
  color: #6d7798;
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.22em;
  text-transform: uppercase;
}

.info-text {
  margin: 0;
  color: #f2f5ff;
  font-size: 1.08rem;
  font-weight: 600;
  line-height: 1.7;
  letter-spacing: -0.015em;
  max-width: 340px;
}

.info-price {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0;
  max-width: 360px;
}

.price-from {
  color: #ffffff;
  font-size: 1.1rem;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.02em;
}

.price-value {
  color: #ffffff;
  font-size: clamp(2rem, 2.9vw, 3.1rem);
  font-weight: 700;
  line-height: 1.02;
  letter-spacing: -0.06em;
}

@media (max-width: 1200px) {
  .hero-inner {
    max-width: 100%;
  }

  .hero-copy {
    max-width: 1080px;
  }

  .hero-cards {
    max-width: 100%;
    gap: 18px;
  }

  .info-card {
    min-height: 165px;
    padding: 24px 20px 20px;
  }

  .info-text,
  .info-price {
    max-width: none;
  }
}

@media (max-width: 980px) {
  .plan-hero {
    margin-bottom: 48px;
  }

  .title {
    font-size: clamp(2.8rem, 9vw, 5rem);
  }

  .desc {
    font-size: 1rem;
    line-height: 1.72;
  }

  .hero-cards {
    grid-template-columns: 1fr;
    margin-top: 32px;
  }

  .info-card {
    min-height: auto;
  }
}

@media (max-width: 560px) {
  .eyebrow {
    min-height: 28px;
    padding: 0 12px;
    margin-bottom: 14px;
    font-size: 0.58rem;
  }

  .subtitle {
    margin-bottom: 12px;
    font-size: 1rem;
  }

  .title {
    margin-bottom: 16px;
    font-size: clamp(2.35rem, 12vw, 3.6rem);
  }

  .desc {
    font-size: 0.96rem;
    line-height: 1.68;
  }

  .hero-cards {
    gap: 14px;
    margin-top: 28px;
  }

  .info-card {
    padding: 22px 18px;
    border-radius: 18px;
  }

  .info-label {
    margin-bottom: 14px;
    font-size: 0.62rem;
  }

  .info-text {
    font-size: 1rem;
    line-height: 1.62;
  }

  .price-from {
    font-size: 1rem;
  }

  .price-value {
    font-size: clamp(1.8rem, 8vw, 2.5rem);
  }
}
</style>