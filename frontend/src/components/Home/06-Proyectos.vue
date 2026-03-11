<template>
  <Vyka>
    <section class="proyectos" id="proyectos" :aria-label="t('projectsSection.ariaLabel')">
      <div class="proyectos-inner">
        <!-- HEADER -->
<p>{{ t("projectsSection.kicker") }}</p>
<h1>
  <span>{{ t("projectsSection.title") }}</span>
  <span>{{ t("projectsSection.titleAccent") }}</span>
</h1>
<p>{{ t("projectsSection.triad.strategy") }}</p>

        <!-- CARDS -->
        <div class="cards">
          <ProjectCard v-for="(p, i) in proyectos" :key="p.slug" :data="p" :active="activeIndex === i" :index="i"
            :is-mobile="isMobile" @enter="setActive(i)" @toggle="toggleCard(i)" />
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
  padding: 90px 0 110px;
}

.proyectos-inner {
  width: min(1180px, 92%);
  margin: 0 auto;
}

.proyectos-head .kicker {
  color: rgba(255, 255, 255, 0.55);
  letter-spacing: 0.18em;
  font-size: 12px;
  margin-bottom: 10px;
}

.proyectos-head .title {
  color: rgba(255, 255, 255, 0.92);
  font-size: clamp(28px, 3.2vw, 44px);
  line-height: 1.1;
  margin: 0 0 26px;
}

.cards {
  display: flex;
  gap: 18px;
  align-items: stretch;
}

.cta-row {
  display: flex;
  justify-content: center;
  margin-top: 32px;
}

@media (max-width: 980px) {
  .cards {
    flex-direction: column;
  }
}
</style>