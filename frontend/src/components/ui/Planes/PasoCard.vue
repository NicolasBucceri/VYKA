<template>
  <article class="paso-card">
    <div class="paso-icono">
      <span class="icon">{{ icono }}</span>
    </div>

    <div class="paso-body">
      <h4 class="paso-titulo">
        {{ paso.titulo }}
      </h4>

      <p class="paso-desc">
        {{ paso.descripcion }}
      </p>
    </div>

    <div class="paso-footer">
      <span class="paso-tag">
        {{ paso.tag }}
      </span>
    </div>
  </article>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  paso: Object,
});

const iconMap = {
  Base: "⌘",
  UI: "✦",
  Control: "✓",
  Validación: "↺",
  Arquitectura: "⌗",
  UX: "◎",
  Código: "⚡",
  Responsive: "▣",
  Launch: "↗",
  CMS: "▤",
  "UX/UI": "◈",
  Flujo: "⇄",
  Estructura: "◩",
  Discovery: "◌",
  Roadmap: "↘",
  Proto: "◍",
  Roles: "◐",
  Stack: "⬢",
  QA: "⬣",
  Sprint: "⟲",
  Auditoría: "◔",
  Técnico: "⬡",
  Scope: "◇",
  Performance: "⬘",
  Pagos: "◈",
};

const icono = computed(() => iconMap[props.paso.tag] || "✦");
</script>

<style scoped>
.paso-card {
  position: relative;
  min-height: 290px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.25rem;
  padding: 1.6rem 1.3rem;
  border-radius: 22px;
  background:
    radial-gradient(circle at top center, rgba(109, 93, 246, 0.16), transparent 58%),
    linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02)),
    #0f1117;
  border: 1px solid rgba(255,255,255,0.08);
  backdrop-filter: blur(10px);
  box-shadow:
    0 18px 40px rgba(0,0,0,0.34),
    inset 0 1px 0 rgba(255,255,255,0.04);
  scroll-snap-align: start;
  transition:
    transform .3s ease,
    border-color .3s ease,
    box-shadow .3s ease;
}

.paso-card:hover {
  transform: translateY(-6px);
  border-color: rgba(109, 93, 246, 0.38);
  box-shadow:
    0 24px 55px rgba(0,0,0,0.42),
    0 0 24px rgba(109, 93, 246, 0.18);
}

.paso-icono {
  width: 58px;
  height: 58px;
  margin: 0 auto;
  border-radius: 16px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, #6D5DF6, #2D8CFF);
  color: #fff;
  font-size: 1.35rem;
  font-weight: 700;
  box-shadow: 0 10px 26px rgba(109, 93, 246, 0.35);
}

.paso-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  text-align: center;
}

.paso-titulo {
  margin: 0;
  font-size: 1.08rem;
  line-height: 1.3;
  font-weight: 700;
  color: #f5f7ff;
}

.paso-desc {
  margin: 0;
  max-width: 24ch;
  font-size: 0.92rem;
  line-height: 1.65;
  color: rgba(255,255,255,0.68);
}

.paso-footer {
  display: flex;
  justify-content: center;
  align-items: center;
}

.paso-tag {
  padding: 0.42rem 0.82rem;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  color: #8d7cff;
  border: 1px solid rgba(109,93,246,0.28);
  background: rgba(109,93,246,0.08);
}
</style>