<template>
  <Vyka>
    <section class="proyectos" id="proyectos" :aria-label="t('projectsSection.ariaLabel')">
      <div class="proyectos-inner">

        <!-- HEADER -->
        <div class="proyectos-head">
          <p class="kicker">
            {{ t("projectsSection.kicker") }}
          </p>

          <h1 class="title">
            <span class="title-line">{{ t("projectsSection.title") }}</span>
            <span class="title-line accent">{{ t("projectsSection.titleAccent") }}</span>
          </h1>

          <div class="triad">
            <span>{{ t("projectsSection.triad.strategy") }}</span>
            <span>{{ t("projectsSection.triad.design") }}</span>
            <span>{{ t("projectsSection.triad.development") }}</span>
            <span>{{ t("projectsSection.triad.results") }}</span>
          </div>
        </div>

        <!-- CARDS -->
        <div class="cards">
          <ProjectCard
            v-for="(p, i) in proyectos"
            :key="p.slug"
            :data="p"
            :active="activeIndex === i"
            :index="i"
            :is-mobile="isMobile"
            @enter="setActive(i)"
            @toggle="toggleCard(i)"
          />
        </div>

        <!-- CTA -->
        <div class="cta-row">
          <BotonPrimario size="lg" icon="→" @click="goToProyectos">
            {{ t("proyectosHome.cta") }}
          </BotonPrimario>
        </div>

      </div>
    </section>
  </Vyka>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import { useRouter } from "vue-router";

import Vyka from "@/components/ui/Background.vue";
import ProjectCard from "@/components/ui/AcordeonCard.vue";
import BotonPrimario from "@/components/ui/BotonPrimario.vue";

import { useLang } from "@/composables/useLang";
import { getProyectos } from "@/content/projects.master";

const { t } = useLang();
const router = useRouter();

const activeIndex = ref(0);
const isMobile = ref(false);

const proyectos = computed(() => {
  return getProyectos()
    .filter((p) => ["plego", "fralo", "baviera"].includes(p.slug))
    .map((p) => {
      const tr = t(`proyectosHome.items.${p.slug}`) || {};

      return {
        ...p,
        accent: p.slug === "plego" ? "orange" : "violet",
        image: p.media?.posterUrl || p.imagen,
        tipo: tr.tipo || p.tag || p.tipo || "",
        nombre: tr.nombre || p.nombre,
        desc: tr.desc || p.resumen || ""
      };
    });
});

function goToProyectos() {
  router.push({ name: "Proyectos" });
}

function updateViewportState() {
  isMobile.value = window.innerWidth <= 980;

  if (activeIndex.value === null || activeIndex.value === undefined) {
    activeIndex.value = 0;
  }
}

function setActive(i) {
  if (!isMobile.value) {
    activeIndex.value = i;
  }
}

function toggleCard(i) {
  if (isMobile.value) {
    activeIndex.value = activeIndex.value === i ? null : i;
  } else {
    activeIndex.value = i;
  }
}

onMounted(() => {
  updateViewportState();
  window.addEventListener("resize", updateViewportState);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateViewportState);
});
</script>

<style scoped>
.proyectos {
  padding: 110px 0 120px;
}

.proyectos-inner {
  width: min(1180px, 92%);
  margin: 0 auto;
}

/* HEADER */

.proyectos-head {
  margin-bottom: 48px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.proyectos-head .kicker {
  color: rgba(255, 255, 255, 0.58);
  letter-spacing: 0.24em;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 18px;
  position: relative;
}

.proyectos-head .kicker::before,
.proyectos-head .kicker::after {
  content: "";
  position: absolute;
  top: 50%;
  width: 70px;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent);
}

.proyectos-head .kicker::before {
  right: calc(100% + 16px);
}

.proyectos-head .kicker::after {
  left: calc(100% + 16px);
}

.proyectos-head .title {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 14px;
  flex-wrap: wrap;
}

.proyectos-head .title-line {
  display: block;
  font-size: clamp(2.3rem, 5vw, 4.4rem);
  font-weight: 700;
  letter-spacing: -0.04em;
  color: rgba(255, 255, 255, 0.95);
}

.proyectos-head .accent {
  background: linear-gradient(90deg, #6D5DF6 0%, #2D8CFF 45%, #8A7CFF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 30px rgba(109, 93, 246, 0.18);
}

.proyectos-head .triad {
  margin-top: 18px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  color: rgba(255, 255, 255, 0.62);
  font-size: 13px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.proyectos-head .triad span {
  position: relative;
  padding: 0 10px;
}

.proyectos-head .triad span:not(:last-child)::after {
  content: "•";
  position: absolute;
  right: -6px;
  color: rgba(255, 255, 255, 0.28);
}

/* CARDS */

.cards {
  display: flex;
  gap: 18px;
  align-items: stretch;
}

/* CTA */

.cta-row {
  display: flex;
  justify-content: center;
  margin-top: 36px;
}

/* RESPONSIVE */

@media (max-width: 980px) {
  .proyectos {
    padding: 90px 0 100px;
  }

  .proyectos-head {
    margin-bottom: 34px;
  }

  .proyectos-head .kicker::before,
  .proyectos-head .kicker::after {
    display: none;
  }

  .proyectos-head .title-line {
    font-size: clamp(2rem, 9vw, 3rem);
  }

  .proyectos-head .triad {
    gap: 8px;
    font-size: 11px;
    line-height: 1.6;
  }

  .proyectos-head .triad span {
    padding: 0 6px;
  }

  .cards {
    flex-direction: column;
  }
}
</style>