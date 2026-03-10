<template>
  <section class="plan-cta">
    <div class="cta-card">
      <div class="cta-copy">
        <p class="cta-kicker">{{ t("planDetail.cta.kicker") }}</p>
        <h2 class="cta-title">{{ t("planDetail.cta.title") }}</h2>
        <p class="cta-text">
          {{ t("planDetail.cta.text") }}
        </p>
      </div>

      <div class="cta-side">
        <p class="price">{{ plan.precio }}</p>
        <p class="mode">{{ plan.modalidad }}</p>

        <router-link to="/contacto" class="cta-btn">
          {{ t("planDetail.cta.button") }}
        </router-link>
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
.plan-cta {
  margin-top: 34px;
}

.cta-card {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 26px;
  border-radius: 28px;
  padding: 30px;
  background:
    linear-gradient(135deg, rgba(109, 93, 246, 0.14), rgba(45, 140, 255, 0.10)),
    rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(109, 93, 246, 0.24);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 18px 50px rgba(0, 0, 0, 0.28);
}

.cta-kicker {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: #a09cff;
  margin-bottom: 12px;
}

.cta-title {
  font-size: clamp(1.6rem, 3vw, 2.5rem);
  line-height: 1.05;
  color: #fff;
  margin-bottom: 12px;
}

.cta-text {
  color: #d4d8ea;
  line-height: 1.75;
  max-width: 680px;
}

.price {
  font-size: clamp(1.9rem, 4vw, 3rem);
  font-weight: 700;
  color: #fff;
  margin-bottom: 10px;
}

.mode {
  color: #d5d9ea;
  line-height: 1.7;
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

@media (max-width: 980px) {
  .cta-card {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 700px) {
  .cta-card {
    padding: 22px;
    border-radius: 22px;
  }
}
</style>