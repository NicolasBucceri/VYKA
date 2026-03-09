<template>
  <Vyka>
    <section class="proyectos" id="proyectos" :aria-label="t('proyectosHome.aria')">
      <div class="proyectos-inner">
        <header class="proyectos-head">
          <p class="kicker">{{ t("proyectosHome.kicker") }}</p>

          <h2 class="title">
            {{ t("proyectosHome.titleLine1") }}<br />
            {{ t("proyectosHome.titleLine2") }}
          </h2>
        </header>

        <div class="cards" @mouseleave="onLeave">
          <ProjectCard
            v-for="(p, i) in proyectos"
            :key="p.id"
            :data="p"
            :active="activeIndex === i"
            :index="i"
            @enter="setActive(i)"
            @toggle="toggleActive(i)"
          />
        </div>

        <div class="cta-row">
          <button class="cta" type="button">
            {{ t("proyectosHome.cta") }}
          </button>
        </div>
      </div>
    </section>
  </Vyka>
</template>

<script setup>
import { ref, computed } from "vue";
import Vyka from "@/components/ui/Background.vue";
import ProjectCard from "@/components/ui/AcordeonCard.vue";
import { useLang } from "@/composables/useLang";

// ✅ imágenes: poné las tuyas en src/assets/Proyectos/...
import imgPlego from "@/assets/Proyectos/Plego/PlegoHero.png";
import imgBaviera from "@/assets/Proyectos/Baviera/BavieraHero.png";
import imgFralo from "@/assets/Proyectos/Fralo/FraloHero.png";

const { t } = useLang();

const proyectosBase = [
  { id: "plego", accent: "orange", image: imgPlego },
  { id: "baviera", accent: "violet", image: imgBaviera },
  { id: "fralo", accent: "violet", image: imgFralo },
];

const proyectos = computed(() => {
  return proyectosBase.map((p) => {
    const tr = t(`proyectosHome.items.${p.id}`) || {};
    return {
      ...p,
      tipo: tr.tipo || p.id,
      nombre: tr.nombre || p.id,
      desc: tr.desc || ""
    };
  });
});

const activeIndex = ref(0);

// Desktop: hover activa; mobile: click toggle
function setActive(i) {
  activeIndex.value = i;
}

function toggleActive(i) {
  activeIndex.value = activeIndex.value === i ? null : i;
}

function onLeave() {
  activeIndex.value = 0;
}
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
  color: rgba(255,255,255,0.55);
  letter-spacing: 0.18em;
  font-size: 12px;
  margin-bottom: 10px;
}

.proyectos-head .title {
  color: rgba(255,255,255,0.92);
  font-size: clamp(28px, 3.2vw, 44px);
  line-height: 1.1;
  margin: 0 0 26px;
}

/* Acordeón horizontal */
.cards {
  display: flex;
  gap: 18px;
  align-items: stretch;
}

/* CTA */
.cta-row {
  display: flex;
  justify-content: center;
  margin-top: 26px;
}

.cta {
  height: 48px;
  padding: 0 28px;
  border-radius: 999px;
  border: 1px solid rgba(45,140,255,0.35);
  background: rgba(10,10,14,0.35);
  color: rgba(255,255,255,0.9);
  backdrop-filter: blur(10px);
  cursor: pointer;
  transition: 0.25s ease;
}

.cta:hover {
  border-color: rgba(45,140,255,0.7);
  background: rgba(45,140,255,0.10);
}

@media (max-width: 980px) {
  .cards {
    flex-direction: column;
  }
}
</style>