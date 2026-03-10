<template>
  <Vyka>
    <section class="metodos" id="metodo" :aria-label="t('metodo.aria')">
      <div class="container-metodos">

        <header class="metodos-header">
          <h2 class="metodos-title">{{ t("metodo.title") }}</h2>
        </header>

        <div class="metodos-card">

          <!-- TABS -->
          <div class="tabs" role="tablist" ref="tabsWrapRef">
            <button
              v-for="(p, i) in pasos"
              :key="p.id"
              class="tab"
              :class="{ active: activeIndex === i }"
              @click="setActive(i)"
              ref="tabRefs"
              type="button"
            >
              {{ p.label }}
            </button>

            <span class="tabs-line"></span>
            <span class="tabs-progress" :style="progressStyle"></span>
            <span class="tabs-cap" :style="capStyle"></span>
          </div>

          <!-- PANEL -->
          <Transition name="panel" mode="out-in">
            <div :key="active.id" class="panel">
              <h3 class="panel-title">{{ active.title }}</h3>
              <p class="panel-text">{{ active.text }}</p>

              <div class="media">
                <div class="media-box">
                  <video
                    v-if="activeVideo"
                    :key="activeVideo"
                    class="media-video"
                    :src="activeVideo"
                    autoplay
                    muted
                    loop
                    playsinline
                    preload="metadata"
                  ></video>

                  <div v-else class="media-placeholder">
                    Video no disponible
                  </div>
                </div>

                <p class="media-foot">{{ active.mediaFoot }}</p>
              </div>
            </div>
          </Transition>

        </div>
      </div>
    </section>
  </Vyka>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount, nextTick, watch } from "vue";
import Vyka from "@/components/ui/Background.vue";
import { useLang } from "@/composables/useLang";

const { t, lang } = useLang();

/**
 * Pasos traducibles
 */
const pasos = computed(() => {
  const steps = t("metodo.steps");
  if (!Array.isArray(steps)) return [];
  return steps.map((s, idx) => ({ id: idx + 1, ...s }));
});

const activeIndex = ref(0);

const active = computed(() =>
  pasos.value[activeIndex.value] || {
    id: 0,
    label: "",
    title: "",
    text: "",
    mediaFoot: ""
  }
);

/**
 * Videos
 * Asegurate de tener:
 * src/assets/Metodos/Paso1.mp4
 * src/assets/Metodos/Paso2.mp4
 * ...
 */
const videos = import.meta.glob("@/assets/Metodos/*.webm", {
  eager: true,
  import: "default"
});

const activeVideo = computed(() => {
  const stepNumber = active.value.id;
  return videos[`/src/assets/Metodos/paso${stepNumber}.webm`] || "";
});

const tabRefs = ref([]);
const tabsWrapRef = ref(null);

const progressWidth = ref(0);
const capX = ref(0);

const progressStyle = computed(() => ({
  width: `${progressWidth.value}px`
}));

const capStyle = computed(() => ({
  transform: `translateX(${capX.value}px)`
}));

function updateProgress() {
  const wrap = tabsWrapRef.value;
  const el = tabRefs.value?.[activeIndex.value];
  if (!wrap || !el) return;

  const wrapRect = wrap.getBoundingClientRect();
  const rect = el.getBoundingClientRect();

  const lineLeft = 14;
  const capSize = 12;
  const capHalf = capSize / 2;

  const lineW = wrap.clientWidth - lineLeft * 2;

  const xCenter =
    rect.left - wrapRect.left + wrap.scrollLeft + rect.width / 2;

  let xFromLine = xCenter - lineLeft;

  if (activeIndex.value === pasos.value.length - 1) {
    xFromLine = lineW;
  }

  xFromLine = Math.max(0, Math.min(lineW, xFromLine));

  progressWidth.value = xFromLine;
  capX.value = xFromLine - capHalf;
}

async function setActive(i) {
  activeIndex.value = i;
  await nextTick();
  updateProgress();
}

const onResize = () => updateProgress();

onMounted(async () => {
  await nextTick();
  updateProgress();
  window.addEventListener("resize", onResize);
});

watch(lang, async () => {
  if (activeIndex.value > pasos.value.length - 1) activeIndex.value = 0;
  await nextTick();
  updateProgress();
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", onResize);
});
</script>

<style scoped>
/* =========================
   BASE
========================= */
.metodos {
  padding: 80px 0;
  color: #fff;
}

.container-metodos {
  width: min(1100px, 90%);
  margin: auto;
}

.metodos-title {
  text-align: center;
  margin-bottom: 40px;
  font-size: 32px;
  letter-spacing: 2px;
}

/* =========================
   CARD
========================= */
.metodos-card {
  padding: 30px;
  border-radius: 16px;
  border: 1px solid rgba(109, 93, 246, 0.5);
  background: rgba(0, 0, 0, 0.2);
  box-shadow:
    0 0 0 1px rgba(255,255,255,0.03) inset,
    0 20px 50px rgba(0,0,0,0.35);
  backdrop-filter: blur(10px);
}

/* =========================
   TABS
========================= */
.tabs {
  --line-left: 14px;
  --cap-size: 12px;
  --cap-bottom: 2px;

  --cap-half: calc(var(--cap-size) / 2);
  --track-h: 2px;
  --line-y: calc(var(--cap-bottom) + var(--cap-half));

  position: relative;
  display: flex;
  justify-content: center;
  gap: 40px;
  padding-bottom: 24px;
  flex-wrap: wrap;
}

.tabs-line {
  position: absolute;
  left: var(--line-left);
  right: var(--line-left);
  height: var(--track-h);
  background: rgba(255, 255, 255, 0.25);
  border-radius: 999px;
  bottom: calc(var(--line-y) - (var(--track-h) / 2));
}

.tabs-progress {
  position: absolute;
  left: var(--line-left);
  height: var(--track-h);
  background: #6D5DF6;
  border-radius: 999px;
  bottom: calc(var(--line-y) - (var(--track-h) / 2));
  transition: width 0.3s ease;
  box-shadow: 0 0 12px rgba(109, 93, 246, 0.45);
}

.tabs-cap {
  position: absolute;
  left: var(--line-left);
  bottom: var(--cap-bottom);
  width: var(--cap-size);
  height: var(--cap-size);
  border-radius: 50%;
  background: #6D5DF6;
  box-shadow:
    0 0 8px rgba(109, 93, 246, 0.55),
    0 0 18px rgba(109, 93, 246, 0.25);
  transition: transform 0.3s ease;
  will-change: transform;
}

.tab {
  background: none;
  border: none;
  color: #aaa;
  cursor: pointer;
  font-size: 14px;
  letter-spacing: 2px;
  transition: color 0.25s ease;
}

.tab:hover {
  color: #d8d8d8;
}

.tab.active {
  color: #6D5DF6;
}

/* =========================
   PANEL
========================= */
.panel {
  margin-top: 30px;
  text-align: center;
}

.panel-title {
  font-size: clamp(28px, 3vw, 42px);
  margin-bottom: 10px;
  font-weight: 800;
  color: #f4f4f4;
}

.panel-text {
  color: #bbb;
  margin: 0 auto 14px;
  font-size: 1.05rem;
  max-width: 760px;
  line-height: 1.7;
}

/* =========================
   MEDIA
========================= */
/* =========================
   MEDIA
========================= */
.media {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.media-box {
  position: relative;
  width: min(860px, 100%);
  height: clamp(280px, 42vw, 470px); /* controla el alto visible */
  margin: auto;
  border-radius: 16px;
  overflow: hidden;
  background: transparent;
  border: 1px solid rgba(255,255,255,0.08);
  box-shadow:
    0 18px 50px rgba(0, 0, 0, 0.45),
    0 0 0 1px rgba(255,255,255,0.03) inset,
    0 0 28px rgba(109, 93, 246, 0.16);
  isolation: isolate;
}

/* Overlay general sutil */
.media-box::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;
  background:
    linear-gradient(
      180deg,
      rgba(8, 8, 14, 0.10) 0%,
      rgba(8, 8, 14, 0.03) 30%,
      rgba(8, 8, 14, 0.14) 100%
    );
}

/* máscara inferior súper sutil */
.media-box::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 18px;
  z-index: 3;
  pointer-events: none;
  background: linear-gradient(
    180deg,
    rgba(8, 8, 14, 0) 0%,
    rgba(8, 8, 14, 0.42) 100%
  );
}

.media-video {
  position: absolute;
  inset: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: block;

  /* recorta barras negras internas */
  object-fit: cover;

  /* ajusta qué parte del video priorizás */
  object-position: center center;

  /* zoom leve para esconder más borde negro arriba/abajo */
  transform: scale(1.06);

  filter: contrast(1.03) brightness(0.95) saturate(0.96);
  animation: videoFade 0.45s ease;
  background: #0d0d12;
}

.media-placeholder {
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  color: #8d8d8d;
  font-size: 1rem;
  background: #0d0d12;
}

.media-foot {
  margin-top: 12px;
  color: #888;
  font-size: 0.98rem;
}

/* =========================
   TRANSITION
========================= */
.panel-enter-active,
.panel-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.panel-enter-from,
.panel-leave-to {
  opacity: 0;
  transform: translateY(8px);
}

@keyframes videoFade {
  from {
    opacity: 0;
    transform: scale(1.09);
  }
  to {
    opacity: 1;
    transform: scale(1.06);
  }
}

/* =========================
   RESPONSIVE
========================= */
@media (max-width: 768px) {
  .metodos {
    padding: 60px 0;
  }

  .metodos-card {
    padding: 20px;
  }

  .tabs {
    gap: 18px;
  }

  .tab {
    font-size: 12px;
    letter-spacing: 1.5px;
  }

  .panel-title {
    font-size: 2rem;
  }

  .panel-text {
    font-size: 0.96rem;
    line-height: 1.6;
  }

  .media-box {
    border-radius: 14px;
    max-width: 100%;
  }

  .media-video {
    max-height: 52vh;
  }

  .media-box::after {
    height: 20px;
  }

  .media-placeholder {
    min-height: 220px;
  }
}
</style>