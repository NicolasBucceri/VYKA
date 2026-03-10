<template>
  <Vyka>
    <section class="faq" id="faq">
      <div class="faq-inner">
        <!-- HEADER -->
        <header class="faq-header">
          <h2 class="faq-title">
            {{ t("faq.titleLine") }} <span>{{ t("faq.titleAccent") }}</span>
          </h2>

          <p class="faq-sub">
            <span class="faq-sub-accent">{{ t("faq.subAccent") }}</span>
            <span class="faq-sub-rest">{{ t("faq.subRest") }}</span>
          </p>
        </header>

        <!-- LIST -->
        <div class="faq-list">
          <FaqItem
            v-for="(item, i) in faqs"
            :key="i"
            :title="item.title"
            :content="item.content"
            :isOpen="activeIndex === i"
            @toggle="toggleItem(i)"
          />
        </div>

        <!-- CTA -->
        <div class="faq-cta">
          <h3 class="cta-title">{{ t("faq.cta.title") }}</h3>

          <p class="cta-sub">
            {{ t("faq.cta.subLine1") }}
            <br />
            {{ t("faq.cta.subLine2") }}
          </p>

          <div class="cta-buttons">
            <BotonPrimario
              class="cta-btn"
              @click="openWhatsApp('diagnostico')"
            >
              {{ t("faq.cta.btnPrimary") }}
            </BotonPrimario>

            <BotonSecundario
              class="cta-btn"
              @click="openWhatsApp('soporte')"
            >
              {{ t("faq.cta.btnSecondary") }}
            </BotonSecundario>
          </div>
        </div>
      </div>
    </section>
  </Vyka>
</template>

<script setup>
import { ref, computed } from "vue";
import Vyka from "@/components/ui/Background.vue";
import FaqItem from "@/components/ui/FaqItem.vue";
import BotonPrimario from "@/components/ui/BotonPrimario.vue";
import BotonSecundario from "@/components/ui/BotonSecundario.vue";
import { useLang } from "@/composables/useLang";
import { openWhatsApp } from "@/utils/whatsapp";

const { t } = useLang();

const activeIndex = ref(0);

const faqs = computed(() => {
  const items = t("faq.items");
  return Array.isArray(items) ? items : [];
});

function toggleItem(index) {
  activeIndex.value = activeIndex.value === index ? null : index;
}
</script>

<style scoped>
.faq {
  padding: 100px 0;
}

.faq-inner {
  width: min(980px, 92%);
  margin: 0 auto;
}

/* HEADER */
.faq-header {
  margin-bottom: 28px;
}

.faq-title {
  font-size: clamp(26px, 2.8vw, 40px);
  font-weight: 500;
  color: rgba(255, 255, 255, 0.92);
  letter-spacing: -0.02em;
}

.faq-title span {
  color: #6d5df6;
}

.faq-sub {
  margin-top: 14px;
  font-size: 16px;
  line-height: 1.4;
  letter-spacing: -0.01em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.faq-sub-accent {
  color: #2d8cff;
  font-weight: 500;
}

.faq-sub-rest {
  color: rgba(255, 255, 255, 0.72);
  font-weight: 400;
}

/* LIST */
.faq-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

/* CTA */
.faq-cta {
  margin-top: 34px;
  padding: 40px;
  border-radius: 22px;
  text-align: center;
  background:
    radial-gradient(900px 320px at 50% 0%, rgba(45, 140, 255, 0.18), transparent 62%),
    radial-gradient(700px 420px at 0% 100%, rgba(109, 93, 246, 0.16), transparent 60%),
    radial-gradient(700px 420px at 100% 100%, rgba(45, 140, 255, 0.10), transparent 60%),
    rgba(10, 10, 14, 0.62);

  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow:
    0 18px 60px rgba(0, 0, 0, 0.55),
    0 0 0 1px rgba(255,255,255,0.03) inset;

  backdrop-filter: blur(12px);
  overflow: hidden;
  position: relative;
}

.faq-cta::before {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    linear-gradient(180deg, rgba(255,255,255,0.06), transparent 35%);
  opacity: 0.35;
}

.cta-title {
  font-size: 20px;
  color: rgba(255, 255, 255, 0.92);
  margin: 0 0 8px;
}

.cta-sub {
  color: rgba(255, 255, 255, 0.6);
  margin: 0 auto 18px;
  max-width: 720px;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 14px;
  flex-wrap: wrap;
}

.cta-btn {
  display: inline-flex;
}

@media (max-width: 720px) {
  .faq {
    padding: 80px 0;
  }

  .faq-sub {
    white-space: normal;
  }

  .faq-cta {
    padding: 26px;
  }
}
</style>