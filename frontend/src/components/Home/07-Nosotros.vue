<template>
  <Vyka>
    <section class="nosotros" id="nosotros">
      <div class="wrap">
        <NosotrosCard />
      </div>

      <!-- CTA BANNER -->
      <section
        class="cta-banner"
        :aria-label="t('nosotros.ctaBanner.aria')"
      >
        <div class="cta-banner-inner">
          <h3 class="cta-banner-title">
            {{ t("nosotros.ctaBanner.titleLine1") }}<br />
            {{ t("nosotros.ctaBanner.titleLine2") }}
          </h3>

          <BotonPrimario
            size="lg"
            class="cta-banner-btn"
            @click="openWhatsApp('diagnostico')"
          >
            {{ t("nosotros.ctaBanner.button") }}
          </BotonPrimario>
        </div>
      </section>
    </section>
  </Vyka>
</template>

<script setup>
import Vyka from "@/components/ui/Background.vue";
import NosotrosCard from "@/components/ui/NosotrosCard.vue";
import BotonPrimario from "@/components/ui/BotonPrimario.vue";
import { useLang } from "@/composables/useLang";
import { openWhatsApp } from "@/utils/whatsapp";

const { t } = useLang();
</script>

<style scoped>
/* =========================
   BASE
========================= */

.nosotros {
  background: #0b0b10;
  padding: 90px 0 0;
}

.wrap {
  width: min(1300px, 94%);
  margin: 0 auto;
  padding-bottom: 70px;
}

/* =========================
   CTA BANNER
========================= */

.cta-banner {
  position: relative;
  overflow: hidden;

  width: 100%;
  padding: clamp(56px, 5vw, 32px) 0;
}

.cta-banner::before {
  content: "";
  position: absolute;
  left: 50%;
  top: -260px;
  transform: translateX(-50%);

  width: 980px;
  height: 520px;

  filter: blur(85px);
  pointer-events: none;
  z-index: 0;
}

.cta-banner-inner {
  position: relative;
  z-index: 1;

  width: min(1300px, 94%);
  margin: 0 auto;

  display: grid;
  place-items: center;
  text-align: center;
  gap: 18px;
}

.cta-banner-title {
  margin: 0;

  font-size: clamp(26px, 3.6vw, 44px);
  line-height: 1.06;
  font-weight: 300;
  letter-spacing: 0.06em;
  text-transform: uppercase;

  color: rgba(255,255,255,0.92);
}

/* ancho del botón */
.cta-banner-btn {
  width: min(420px, 92%);
}

/* mobile */
@media (max-width: 520px) {
  .cta-banner-title {
    letter-spacing: 0.04em;
  }
}
</style>