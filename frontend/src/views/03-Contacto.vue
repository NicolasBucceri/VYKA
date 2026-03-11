<template>
  <Vyka>
    <section class="contacto" id="contacto" ref="sectionRef">
      <div class="bg-orb orb-1" aria-hidden="true"></div>
      <div class="bg-orb orb-2" aria-hidden="true"></div>
      <div class="bg-grid" aria-hidden="true"></div>

      <div class="wrap">
        <header class="head" :class="{ in: inView }">
          <p class="eyebrow">{{ t("contact.eyebrow") }}</p>

          <h2 class="headline">
            <span class="headline-white">{{ t("contact.title1") }}</span>
            <span class="headline-grad">{{ t("contact.title2") }}</span>
          </h2>

          <p class="sub">
            {{ t("contact.subtitle") }}
          </p>
        </header>

        <div class="layout solo">
          <article class="card" :class="{ in: inView }">
            <div class="card-glow" aria-hidden="true"></div>
            <div class="card-noise" aria-hidden="true"></div>

            <p class="kicker">{{ t("contact.direct") }}</p>

            <h3 class="title">
              {{ t("contact.whatsappTitle") }}
            </h3>

            <p class="desc">
              {{ t("contact.desc") }}
              <span class="muted">{{ t("contact.descMuted") }}</span>
            </p>

            <div class="actions">
              <a
                class="action primary"
                href="#"
                @click.prevent="abrirWhatsapp"
                rel="noopener noreferrer"
              >
                <span class="action-shine" aria-hidden="true"></span>

                <span class="ico">
                  <i class="fa-brands fa-whatsapp"></i>
                </span>

                <span class="txt">
                  <span class="main">{{ WA_NUMBER_DISPLAY }}</span>
                  <span class="meta">{{ t("contact.replyTime") }}</span>
                </span>

                <span class="arrow">
                  <i class="fa-solid fa-arrow-right"></i>
                </span>
              </a>

              <div class="action">
                <span class="ico">
                  <i class="fa-solid fa-location-dot"></i>
                </span>

                <span class="txt">
                  <span class="main">{{ t("contact.location") }}</span>
                  <span class="meta">{{ t("contact.workArea") }}</span>
                </span>
              </div>

              <a class="action" :href="mailLink">
                <span class="ico">
                  <i class="fa-solid fa-envelope"></i>
                </span>

                <span class="txt">
                  <span class="main">contacto@vyka.dev</span>
                  <span class="meta">{{ t("contact.emailMeta") }}</span>
                </span>

                <span class="arrow">
                  <i class="fa-solid fa-arrow-right"></i>
                </span>
              </a>
            </div>

            <div class="mapBox">
              <iframe
                class="mapFrame"
                src="https://www.google.com/maps?q=Devoto%20CABA%20Buenos%20Aires&output=embed"
                loading="lazy"
              ></iframe>

              <div class="mapOverlay">
                <div class="mapTag">
                  <i class="fa-solid fa-location-dot"></i>
                  <span>{{ t("contact.location") }}</span>
                </div>

                <a
                  class="mapBtn"
                  href="https://www.google.com/maps?q=Devoto%20CABA%20Buenos%20Aires"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {{ t("contact.openMaps") }}
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>

            <button class="cta" @click="abrirWhatsapp">
              <span>{{ t("contact.cta") }}</span>
              <i class="fa-solid fa-arrow-right"></i>
            </button>
          </article>
        </div>
      </div>
    </section>
  </Vyka>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import { useLang } from "@/composables/useLang";
import Vyka from "@/components/ui/Background.vue";
import { openWhatsApp } from "@/utils/whatsapp";

const { t } = useLang();

const WA_NUMBER_DISPLAY = "+54 9 11 2615-4277";

const abrirWhatsapp = () => openWhatsApp("proyecto");

const mailLink = computed(() => {
  const subject = encodeURIComponent(t("contact.mailSubject"));
  return `mailto:vykastudio@hotmail.com?subject=${subject}`;
});

const sectionRef = ref(null);
const inView = ref(false);
let observer = null;

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) inView.value = true;
    },
    { threshold: 0.2 }
  );

  if (sectionRef.value) {
    observer.observe(sectionRef.value);
  }
});

onBeforeUnmount(() => {
  if (observer && sectionRef.value) {
    observer.unobserve(sectionRef.value);
  }
});
</script>

<style scoped>
/* =========================
   SECTION
========================= */
.contacto {
  position: relative;
  padding: 120px 0;
  overflow: hidden;
}

.wrap {
  position: relative;
  z-index: 2;
  width: min(1100px, 92%);
  margin: 0 auto;
}

/* =========================
   FONDO VYKA
========================= */
.bg-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  pointer-events: none;
  opacity: 0.5;
}

.orb-1 {
  top: 40px;
  left: -80px;
  width: 260px;
  height: 260px;
  background: rgba(109, 93, 246, 0.18);
}

.orb-2 {
  right: -120px;
  bottom: 40px;
  width: 300px;
  height: 300px;
  background: rgba(45, 140, 255, 0.14);
}

.bg-grid {
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0.06;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px);
  background-size: 34px 34px;
  mask-image: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.25),
    rgba(0, 0, 0, 0.9) 25%,
    rgba(0, 0, 0, 0.95) 75%,
    rgba(0, 0, 0, 0.15)
  );
}

/* =========================
   HEAD
========================= */
.head {
  text-align: center;
  margin-bottom: 64px;
  opacity: 0;
  transform: translateY(16px);
  transition:
    opacity 0.7s ease,
    transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
}

.head.in {
  opacity: 1;
  transform: translateY(0);
}

.eyebrow {
  margin: 0 0 16px;
  font-size: 11px;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.42);
}

.headline {
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: baseline;
  gap: 12px 18px;
  font-family: "Average Sans", sans-serif;
  font-size: clamp(34px, 5.2vw, 68px);
  line-height: 1;
  letter-spacing: -0.05em;
  text-transform: uppercase;
}

.headline-white {
  color: rgba(240, 240, 239, 0.96);
  text-shadow: 0 10px 34px rgba(0, 0, 0, 0.2);
}

.headline-grad {
  background: linear-gradient(
    90deg,
    #d8d3ff 0%,
    #8b7dff 22%,
    #4f7dff 62%,
    #2d8cff 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow:
    0 0 18px rgba(109, 93, 246, 0.14),
    0 0 26px rgba(45, 140, 255, 0.1);
}

.sub {
  margin: 18px auto 0;
  max-width: 760px;
  color: rgba(255, 255, 255, 0.64);
  font-size: 1rem;
  line-height: 1.75;
}

/* =========================
   LAYOUT
========================= */
.layout.solo {
  display: grid;
  grid-template-columns: 1fr;
}

/* =========================
   CARD
========================= */
.card {
  position: relative;
  overflow: hidden;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.01)),
    linear-gradient(135deg, rgba(109, 93, 246, 0.05), rgba(45, 140, 255, 0.03) 45%, rgba(12, 12, 17, 0.92));
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 26px;
  padding: 40px;
  backdrop-filter: blur(18px);
  box-shadow:
    0 28px 80px rgba(0, 0, 0, 0.55),
    0 0 0 1px rgba(255, 255, 255, 0.02) inset,
    0 0 40px rgba(109, 93, 246, 0.06),
    0 0 60px rgba(45, 140, 255, 0.04);

  opacity: 0;
  transform: translateY(20px);
  transition:
    opacity 0.7s ease,
    transform 0.7s cubic-bezier(0.22, 1, 0.36, 1),
    border-color 0.35s ease,
    box-shadow 0.35s ease;
}

.card.in {
  opacity: 1;
  transform: translateY(0);
}

.card:hover {
  border-color: rgba(109, 93, 246, 0.18);
  box-shadow:
    0 32px 88px rgba(0, 0, 0, 0.58),
    0 0 0 1px rgba(255, 255, 255, 0.02) inset,
    0 0 48px rgba(109, 93, 246, 0.08),
    0 0 72px rgba(45, 140, 255, 0.05);
}

.card-glow {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    radial-gradient(90% 80% at 0% 0%, rgba(109, 93, 246, 0.12), transparent 42%),
    radial-gradient(70% 70% at 100% 100%, rgba(45, 140, 255, 0.09), transparent 46%);
  opacity: 0.95;
}

.card-noise {
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0.04;
  background-image: radial-gradient(rgba(255, 255, 255, 0.9) 0.6px, transparent 0.6px);
  background-size: 10px 10px;
  mix-blend-mode: soft-light;
}

.card > * {
  position: relative;
  z-index: 1;
}

.kicker {
  margin: 0;
  font-size: 12px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #b4b4b4;
}

.title {
  margin: 14px 0 0;
  font-size: clamp(28px, 3vw, 34px);
  line-height: 1.08;
  color: #f0f0ef;
  letter-spacing: -0.03em;
}

.grad {
  background: linear-gradient(90deg, #6d5df6 0%, #2d8cff 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.desc {
  margin: 14px 0 0;
  max-width: 760px;
  color: #b4b4b4;
  line-height: 1.7;
  font-size: 1rem;
}

.muted {
  color: rgba(255, 255, 255, 0.62);
}

/* =========================
   ACTIONS
========================= */
.actions {
  margin-top: 24px;
  display: grid;
  gap: 14px;
}

.action {
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 15px 16px;
  border-radius: 18px;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.02)),
    rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #f0f0ef;
  text-decoration: none;
  transition:
    transform 0.28s ease,
    border-color 0.28s ease,
    background 0.28s ease,
    box-shadow 0.28s ease;
}

.action:hover {
  transform: translateY(-2px);
  border-color: rgba(109, 93, 246, 0.28);
  background:
    linear-gradient(180deg, rgba(109, 93, 246, 0.07), rgba(45, 140, 255, 0.04)),
    rgba(255, 255, 255, 0.02);
  box-shadow:
    0 14px 34px rgba(0, 0, 0, 0.22),
    0 0 24px rgba(109, 93, 246, 0.08);
}

.action.primary {
  border-color: rgba(109, 93, 246, 0.22);
  background:
    linear-gradient(180deg, rgba(109, 93, 246, 0.1), rgba(45, 140, 255, 0.05)),
    rgba(255, 255, 255, 0.03);
}

.action-shine {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(
    110deg,
    transparent 0%,
    rgba(255, 255, 255, 0.07) 38%,
    transparent 60%
  );
  transform: translateX(-120%);
  transition: transform 0.7s ease;
}

.action.primary:hover .action-shine {
  transform: translateX(120%);
}

.ico {
  width: 46px;
  height: 46px;
  flex: 0 0 46px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02)),
    rgba(0, 0, 0, 0.34);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
}

.ico i {
  color: #6d5df6;
  font-size: 1rem;
}

.txt {
  display: flex;
  flex-direction: column;
  min-width: 0;
  flex: 1;
}

.main {
  font-weight: 700;
  color: #f0f0ef;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.meta {
  font-size: 12px;
  color: #b4b4b4;
  line-height: 1.4;
}

.arrow {
  color: rgba(255, 255, 255, 0.6);
  transition: transform 0.24s ease, color 0.24s ease;
}

.action:hover .arrow {
  transform: translateX(3px);
  color: #f0f0ef;
}

/* =========================
   MAP
========================= */
.mapBox {
  margin-top: 20px;
  border-radius: 22px;
  overflow: hidden;
  height: 260px;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(8, 8, 14, 0.7);
  box-shadow:
    0 18px 46px rgba(0, 0, 0, 0.28),
    0 0 0 1px rgba(255, 255, 255, 0.02) inset;
}

.mapFrame {
  width: 100%;
  height: 100%;
  border: 0;
  filter: grayscale(100%) contrast(1.08) brightness(0.72);
}

.mapBox::after {
  content: "";
  position: absolute;
  inset: 0;
  background:
    linear-gradient(to top, rgba(8, 8, 14, 0.86), rgba(8, 8, 14, 0.2)),
    radial-gradient(circle at 20% 20%, rgba(109, 93, 246, 0.18), transparent 55%),
    radial-gradient(circle at 85% 70%, rgba(45, 140, 255, 0.14), transparent 45%);
  pointer-events: none;
}

.mapOverlay {
  position: absolute;
  inset: 0;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  z-index: 2;
}

.mapTag,
.mapBtn {
  padding: 10px 14px;
  border-radius: 999px;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.03)),
    rgba(12, 12, 17, 0.84);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #f0f0ef;
  font-size: 13px;
  text-decoration: none;
  display: inline-flex;
  gap: 8px;
  align-items: center;
  backdrop-filter: blur(10px);
}

.mapBtn {
  transition:
    transform 0.24s ease,
    border-color 0.24s ease,
    background 0.24s ease;
}

.mapBtn:hover {
  transform: translateY(-2px);
  border-color: rgba(109, 93, 246, 0.26);
  background:
    linear-gradient(180deg, rgba(109, 93, 246, 0.14), rgba(45, 140, 255, 0.06)),
    rgba(12, 12, 17, 0.88);
}

/* =========================
   CTA
========================= */
.cta {
  margin-top: 22px;
  width: 100%;
  min-height: 56px;
  padding: 14px 18px;
  border-radius: 18px;
  border: 1px solid rgba(109, 93, 246, 0.18);
  font-weight: 700;
  font-size: 0.98rem;
  background: linear-gradient(90deg, #6d5df6 0%, #2d8cff 100%);
  color: white;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition:
    transform 0.24s ease,
    box-shadow 0.24s ease,
    filter 0.24s ease;
}

.cta:hover {
  transform: translateY(-2px);
  box-shadow:
    0 20px 60px rgba(109, 93, 246, 0.34),
    0 0 28px rgba(45, 140, 255, 0.18);
  filter: brightness(1.04);
}

/* =========================
   RESPONSIVE
========================= */
@media (max-width: 768px) {
  .contacto {
    padding: 90px 0;
  }

  .head {
    margin-bottom: 42px;
  }

  .headline {
    font-size: clamp(28px, 9vw, 42px);
    gap: 8px 12px;
  }

  .sub {
    font-size: 0.95rem;
    line-height: 1.65;
  }

  .card {
    padding: 24px;
    border-radius: 22px;
  }

  .title {
    font-size: 26px;
  }

  .desc {
    font-size: 0.96rem;
  }

  .action {
    align-items: flex-start;
    padding: 14px;
  }

  .main {
    white-space: normal;
    overflow: visible;
    text-overflow: unset;
  }

  .mapBox {
    height: 220px;
    border-radius: 18px;
  }

  .mapOverlay {
    padding: 12px;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
  }

  .mapTag,
  .mapBtn {
    font-size: 12px;
    padding: 9px 12px;
  }

  .cta {
    min-height: 52px;
    border-radius: 16px;
  }
}
</style>