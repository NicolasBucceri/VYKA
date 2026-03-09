<template>
  <article
    class="pcard"
    :class="[
      active ? 'is-active' : 'is-idle',
      `accent-${data.accent}`
    ]"
    @mouseenter="onEnter"
  >
    <!-- lado info (tapa del libro) -->
    <div class="panel-info">
      <p class="tipo">{{ data.tipo }}</p>
      <h3 class="nombre">{{ data.nombre }}</h3>
      <p class="desc">{{ data.desc }}</p>

      <button class="btn" type="button" @click.stop="onToggle">
        Saber más
      </button>
    </div>

    <!-- lado imagen (página del libro) -->
    <div class="panel-media" aria-hidden="true">
      <div class="media-wrap">
        <img class="img" :src="data.image" :alt="`Vista de ${data.nombre}`" />
        <div class="media-overlay"></div>
      </div>
    </div>
  </article>
</template>

<script setup>
const props = defineProps({
  data: Object,
  active: Boolean,
  index: Number
});

const emit = defineEmits(["enter", "toggle"]);

function onEnter() {
  // Hover desktop: activa
  emit("enter");
}

function onToggle() {
  // Click mobile/desktop: toggle
  emit("toggle");
}
</script>

<style scoped>
/* =========================
   BASE CARD
========================= */
.pcard {
  position: relative;
  height: 240px;
  border-radius: 20px;
  overflow: hidden;

  display: grid;
  grid-template-columns: 1fr 0fr; /* idle */
  align-items: stretch;

  background: rgba(10, 10, 14, 0.55);
  border: 1px solid rgba(255, 255, 255, 0.10);
  backdrop-filter: blur(10px);

  flex: 1;
  min-width: 220px;

  transition:
    grid-template-columns 620ms cubic-bezier(0.22, 1, 0.36, 1),
    flex 620ms cubic-bezier(0.22, 1, 0.36, 1),
    transform 420ms cubic-bezier(0.22, 1, 0.36, 1),
    border-color 320ms ease,
    box-shadow 420ms ease,
    filter 420ms ease;

  will-change: grid-template-columns, transform, flex;
}

/* estado idle más refinado */
.pcard.is-idle {
  transform: translateY(0);
  filter: saturate(0.94) brightness(0.96);
}

/* activa: expansión más sutil */
.pcard.is-active {
  grid-template-columns: 1fr 1fr;
  flex: 1.45;
  transform: translateY(-2px);
  filter: saturate(1) brightness(1);
}

/* hover general suave */
.pcard:hover {
  border-color: rgba(255, 255, 255, 0.16);
}

/* =========================
   GLOW / ACCENT
========================= */
.pcard.accent-orange {
  border-color: rgba(230, 106, 39, 0.22);
  box-shadow:
    0 10px 30px rgba(0, 0, 0, 0.18),
    0 0 32px rgba(230, 106, 39, 0.06);
}

.pcard.accent-orange.is-active {
  border-color: rgba(230, 106, 39, 0.34);
  box-shadow:
    0 18px 42px rgba(0, 0, 0, 0.24),
    0 0 40px rgba(230, 106, 39, 0.10);
}

.pcard.accent-violet {
  border-color: rgba(109, 93, 246, 0.22);
  box-shadow:
    0 10px 30px rgba(0, 0, 0, 0.18),
    0 0 32px rgba(109, 93, 246, 0.06);
}

.pcard.accent-violet.is-active {
  border-color: rgba(109, 93, 246, 0.34);
  box-shadow:
    0 18px 42px rgba(0, 0, 0, 0.24),
    0 0 40px rgba(109, 93, 246, 0.10);
}

/* =========================
   INFO PANEL
========================= */
.panel-info {
  padding: 22px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  min-width: 0;

  transition:
    transform 480ms cubic-bezier(0.22, 1, 0.36, 1),
    opacity 360ms ease;
}

.pcard.is-idle .panel-info {
  transform: translateY(4px);
  opacity: 0.92;
}

.pcard.is-active .panel-info {
  transform: translateY(0);
  opacity: 1;
}

.tipo {
  margin: 0;
  font-size: 11px;
  letter-spacing: 0.18em;
  color: rgba(255, 255, 255, 0.55);
  transition: color 280ms ease, opacity 280ms ease;
}

.nombre {
  margin: 0;
  font-size: 22px;
  color: rgba(255, 255, 255, 0.92);
  line-height: 1.1;
  transition:
    transform 420ms cubic-bezier(0.22, 1, 0.36, 1),
    color 280ms ease,
    opacity 320ms ease;
}

.desc {
  margin: 0;
  max-width: 30ch;
  color: rgba(255, 255, 255, 0.65);
  font-size: 13px;
  line-height: 1.5;
  transition:
    transform 440ms cubic-bezier(0.22, 1, 0.36, 1),
    opacity 340ms ease,
    color 280ms ease;
}

.pcard.is-idle .nombre,
.pcard.is-idle .desc {
  transform: translateY(6px);
}

.pcard.is-active .nombre,
.pcard.is-active .desc {
  transform: translateY(0);
}

.pcard.is-active .desc {
  color: rgba(255, 255, 255, 0.74);
}

/* =========================
   BOTÓN
========================= */
.btn {
  margin-top: 10px;
  height: 40px;
  padding: 0 18px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  background: rgba(0, 0, 0, 0.20);
  color: rgba(255, 255, 255, 0.9);
  cursor: pointer;

  transition:
    transform 260ms ease,
    border-color 260ms ease,
    background 260ms ease,
    box-shadow 260ms ease,
    color 260ms ease;
}

.btn:hover {
  transform: translateY(-1px);
}

.pcard.accent-orange .btn:hover {
  border-color: rgba(230, 106, 39, 0.8);
  background: rgba(230, 106, 39, 0.10);
  box-shadow: 0 0 18px rgba(230, 106, 39, 0.12);
}

.pcard.accent-violet .btn:hover {
  border-color: rgba(109, 93, 246, 0.8);
  background: rgba(109, 93, 246, 0.10);
  box-shadow: 0 0 18px rgba(109, 93, 246, 0.12);
}

/* =========================
   MEDIA PANEL
========================= */
.panel-media {
  position: relative;
  overflow: hidden;
  min-width: 0;
}

/* efecto página más sutil */
.media-wrap {
  position: absolute;
  inset: 0;
  transform-origin: left center;

  transform: translateX(18px) rotateY(10deg) scale(0.985);
  opacity: 0;

  transition:
    transform 620ms cubic-bezier(0.22, 1, 0.36, 1),
    opacity 420ms ease,
    filter 420ms ease;
}

.pcard.is-active .media-wrap {
  transform: translateX(0) rotateY(0deg) scale(1);
  opacity: 1;
}

.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: contrast(1.04) saturate(1.03);

  transition:
    transform 700ms cubic-bezier(0.22, 1, 0.36, 1),
    filter 420ms ease,
    opacity 320ms ease;
}

.pcard.is-idle .img {
  transform: scale(1.02);
  filter: contrast(1.02) saturate(0.96);
}

.pcard.is-active .img {
  transform: scale(1);
  filter: contrast(1.05) saturate(1.05);
}

/* overlay premium más fino */
.media-overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, rgba(10, 10, 14, 0.72), transparent 55%),
    linear-gradient(180deg, rgba(10, 10, 14, 0.20), rgba(10, 10, 14, 0.50));

  transition:
    opacity 380ms ease,
    background 420ms ease;
}

.pcard.is-idle .media-overlay {
  opacity: 0.92;
}

.pcard.is-active .media-overlay {
  opacity: 1;
}

/* =========================
   MOBILE
========================= */
@media (max-width: 980px) {
  .pcard {
    height: 260px;
    grid-template-columns: 1fr;
    grid-template-rows: auto 0fr;
    transition:
      grid-template-rows 520ms cubic-bezier(0.22, 1, 0.36, 1),
      transform 320ms ease,
      border-color 320ms ease,
      box-shadow 320ms ease,
      filter 320ms ease;
  }

  .pcard.is-active {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    flex: 1;
    transform: none;
  }

  .panel-media {
    min-height: 160px;
  }

  .media-wrap {
    transform-origin: center;
    transform: translateY(10px) scale(0.985);
  }

  .pcard.is-active .media-wrap {
    transform: translateY(0) scale(1);
  }

  .nombre {
    font-size: 20px;
  }

  .desc {
    max-width: 100%;
  }
}
</style>