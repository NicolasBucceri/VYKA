<!-- src/components/Empresa/03-Equipo.vue -->
<template>
  <section
    class="empresa-equipo"
    id="equipo"
    :aria-label="t('empresa.equipo.aria')"
    ref="rootRef"
  >
    <div class="wrap">
      <header class="head">
        <p class="kicker" data-reveal style="--d: 0ms">
          {{ t("empresa.equipo.kicker") }}
        </p>

        <h2 class="title" data-reveal style="--d: 80ms">
          {{ t("empresa.equipo.titleWhite") }}
          <span class="grad">{{ t("empresa.equipo.titleGrad") }}</span>
        </h2>

        <p class="subtitle" data-reveal style="--d: 160ms">
          {{ t("empresa.equipo.subtitle") }}
        </p>
      </header>

      <div
        class="grid"
        role="list"
        :aria-label="t('empresa.equipo.membersAria')"
      >
        <a
          v-for="(m, i) in team"
          :key="m.name"
          class="card"
          role="listitem"
          :href="m.linkedin"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="`${t('empresa.equipo.openLinkedin')} ${m.name}`"
          data-reveal
          :style="`--d:${220 + i * 90}ms`"
        >
          <span class="card-grid" aria-hidden="true"></span>
          <span class="card-glow" aria-hidden="true"></span>

          <div class="top">
            <img class="avatar" :src="m.avatar" :alt="`${t('empresa.equipo.photoOf')} ${m.name}`" />
            <span class="li" aria-hidden="true">
              <i class="fa-brands fa-linkedin-in"></i>
            </span>
          </div>

          <div class="info">
            <p class="name">{{ m.name }}</p>
            <p class="role">{{ m.role }}</p>
            <p class="desc">{{ m.description }}</p>
          </div>

          <div class="footer" :aria-label="t('empresa.equipo.mainAreasAria')">
            <span class="pill">{{ m.focus1 }}</span>
            <span class="pill">{{ m.focus2 }}</span>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted, onBeforeUnmount, ref } from "vue";
import { useLang } from "@/composables/useLang";

const { t } = useLang();

const team = computed(() => [
  {
    name: "Nico",
    role: t("empresa.equipo.team.nico.role"),
    description: t("empresa.equipo.team.nico.description"),
    focus1: t("empresa.equipo.team.nico.focus1"),
    focus2: t("empresa.equipo.team.nico.focus2"),
    avatar: new URL("@/assets/Empresa/Nico.webp", import.meta.url).href,
    linkedin: "https://www.linkedin.com/in/nicolasbucceri/",
  },
  {
    name: "Caro",
    role: t("empresa.equipo.team.caro.role"),
    description: t("empresa.equipo.team.caro.description"),
    focus1: t("empresa.equipo.team.caro.focus1"),
    focus2: t("empresa.equipo.team.caro.focus2"),
    avatar: new URL("@/assets/Empresa/Caro.webp", import.meta.url).href,
    linkedin: "https://www.linkedin.com/in/carolina-yael-sosa-1ba4a91b5/",
  },
  {
    name: "Alan",
    role: t("empresa.equipo.team.alan.role"),
    description: t("empresa.equipo.team.alan.description"),
    focus1: t("empresa.equipo.team.alan.focus1"),
    focus2: t("empresa.equipo.team.alan.focus2"),
    avatar: new URL("@/assets/Empresa/Alan.webp", import.meta.url).href,
    linkedin: "https://www.linkedin.com/in/tu-linkedin-alan",
  },
]);

const rootRef = ref(null);
let io;

onMounted(() => {
  const root = rootRef.value;
  if (!root) return;

  const els = root.querySelectorAll("[data-reveal]");

  io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      }
    },
    { threshold: 0.18, rootMargin: "0px 0px -10% 0px" }
  );

  els.forEach((el) => io.observe(el));
});

onBeforeUnmount(() => {
  if (io) io.disconnect();
});
</script>

<style scoped>
/* =========================
   BRAND TOKENS (VYKA)
========================= */
.empresa-equipo {
  --negro: #181818;
  --blanco: #f0eeef;
  --gris: #b4b4b4;
  --violeta: #6d5df6;
  --azul: #2d8cff;

  --stroke: rgba(240, 238, 239, 0.12);
  --stroke2: rgba(240, 238, 239, 0.08);

  background: var(--negro);
  color: var(--blanco);
  padding: clamp(72px, 7vw, 112px) 0;
}

/* ⬇️ Más ancho para que el header “respire” */
.wrap {
  width: min(1400px, 94%);
  margin: 0 auto;
}

/* =========================
   HEADER
========================= */
.head {
  margin: 0 auto 34px;
  max-width: none;
  text-align: center;
}

.kicker {
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-size: 0.78rem;
  color: rgba(180, 180, 180, 0.92);
  margin: 0 0 12px;
}

.title {
  margin: 0 0 12px;
  font-weight: 850;
  letter-spacing: -0.02em;
  line-height: 1.06;
  font-size: clamp(2.1rem, 4.2vw, 3.3rem);
}

.grad {
  background: linear-gradient(90deg, var(--violeta), var(--azul));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.subtitle {
  margin: 0 auto;
  max-width: 72ch;
  color: rgba(180, 180, 180, 0.95);
  line-height: 1.65;
  font-size: 1.05rem;
}

/* =========================
   GRID
========================= */
.grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  margin-top: 18px;
}

/* =========================
   CARD
========================= */
.card {
  position: relative;
  display: grid;
  grid-template-rows: auto 1fr auto;
  gap: 14px;

  padding: 16px;
  border-radius: 22px;
  overflow: hidden;

  text-decoration: none;
  color: inherit;

  background: rgba(240, 238, 239, 0.03);
  border: 1px solid var(--stroke);
  backdrop-filter: blur(14px);

  transition: transform 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease;
  box-shadow:
    0 0 0 1px rgba(240, 238, 239, 0.03) inset,
    0 26px 85px rgba(0, 0, 0, 0.45);
}

.card:hover {
  transform: translateY(-2px);
  border-color: rgba(240, 238, 239, 0.18);
  box-shadow:
    0 0 0 1px rgba(240, 238, 239, 0.04) inset,
    0 30px 95px rgba(0, 0, 0, 0.58);
}

.card:focus-visible {
  outline: 2px solid rgba(109, 93, 246, 0.7);
  outline-offset: 3px;
}

.card-grid {
  position: absolute;
  inset: 0;
  opacity: 0.18;
  background:
    linear-gradient(to right, rgba(180, 180, 180, 0.08) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(180, 180, 180, 0.08) 1px, transparent 1px);
  background-size: 44px 44px;
  mask-image: radial-gradient(circle at 30% 20%, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  pointer-events: none;
}

/* Glow: aparece en hover + “respira” cuando entra */
.card-glow {
  position: absolute;
  inset: -2px;
  background:
    radial-gradient(520px 180px at 20% 20%, rgba(109, 93, 246, 0.14), transparent 60%),
    radial-gradient(520px 180px at 85% 75%, rgba(45, 140, 255, 0.12), transparent 60%);
  opacity: 0;
  transition: opacity 0.18s ease;
  pointer-events: none;
}

.card:hover .card-glow {
  opacity: 1;
}

.top {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.avatar {
  width: 72px;
  height: 72px;
  border-radius: 18px;
  object-fit: cover;
  border: 1px solid rgba(240, 238, 239, 0.12);
  filter: saturate(0.95) contrast(1.03);
}

.li {
  width: 42px;
  height: 42px;
  border-radius: 16px;
  display: grid;
  place-items: center;
  background: rgba(0, 0, 0, 0.18);
  border: 1px solid rgba(240, 238, 239, 0.10);
  color: rgba(240, 238, 239, 0.9);
}

.info {
  position: relative;
  z-index: 1;
}

.name {
  margin: 0 0 4px;
  font-weight: 900;
  letter-spacing: -0.01em;
  font-size: 1.2rem;
  color: rgba(240, 238, 239, 0.95);
}

.role {
  margin: 0 0 10px;
  color: rgba(180, 180, 180, 0.95);
  font-weight: 650;
  font-size: 0.98rem;
}

.desc {
  margin: 0;
  color: rgba(240, 238, 239, 0.84);
  line-height: 1.65;
  font-size: 1rem;
}

.footer {
  position: relative;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.pill {
  padding: 8px 10px;
  border-radius: 999px;
  border: 1px solid var(--stroke2);
  background: rgba(0, 0, 0, 0.16);
  color: rgba(180, 180, 180, 0.95);
  font-size: 0.86rem;
}

/* =========================
   REVEAL ANIMATIONS (WOW SUTIL)
========================= */
[data-reveal] {
  opacity: 0;
  transform: translateY(14px);
  filter: blur(6px);
  transition:
    opacity 700ms cubic-bezier(.2, .8, .2, 1),
    transform 700ms cubic-bezier(.2, .8, .2, 1),
    filter 700ms cubic-bezier(.2, .8, .2, 1);
  transition-delay: var(--d, 0ms);
  will-change: transform, opacity, filter;
}

[data-reveal].is-in {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0);
}

/* “Entrada” más premium para las cards */
.card[data-reveal] {
  transform: translateY(18px) scale(.985);
}

.card[data-reveal].is-in {
  transform: translateY(0) scale(1);
}

/* Cuando entran, un micro-glow respirando (sutil) */
.card.is-in .card-glow {
  animation: glowBreath 5.6s ease-in-out infinite;
  opacity: 0.75;
}

@keyframes glowBreath {
  0%,
  100% {
    filter: blur(0px);
    opacity: .7;
  }

  50% {
    filter: blur(1.2px);
    opacity: .95;
  }
}

/* Pills: aparecen en cascada */
.card.is-in .pill {
  opacity: 0;
  transform: translateY(8px);
  transition:
    opacity 520ms cubic-bezier(.2, .8, .2, 1),
    transform 520ms cubic-bezier(.2, .8, .2, 1);
}

.card.is-in .pill:nth-child(1) {
  transition-delay: 140ms;
}

.card.is-in .pill:nth-child(2) {
  transition-delay: 210ms;
}

.card.is-in .pill {
  opacity: 1;
  transform: translateY(0);
}

/* Accesibilidad */
@media (prefers-reduced-motion: reduce) {
  [data-reveal] {
    opacity: 1 !important;
    transform: none !important;
    filter: none !important;
    transition: none !important;
  }

  .card.is-in .card-glow {
    animation: none !important;
  }
}

/* =========================
   RESPONSIVE
========================= */
@media (max-width: 980px) {
  .grid {
    grid-template-columns: 1fr;
  }

  .avatar {
    width: 64px;
    height: 64px;
  }

  .title {
    font-size: clamp(2rem, 7vw, 2.6rem);
  }
}
</style>