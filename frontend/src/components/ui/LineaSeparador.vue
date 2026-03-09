<template>
  <div class="divider-wrap" aria-hidden="true">
    <div class="divider"></div>
  </div>
</template>

<style scoped>
.divider-wrap{
  /* Fondo igual al sitio para que no “asome” el body */
  background: #181818;

  /* Este es el “espacio” entre secciones */
  padding: var(--divider-space, clamp(18px, 3vw, 34px)) 0;
}

.divider{
  width: min(1200px, 92%);
  height: 1px;
  margin: 0 auto;
  position: relative;

  background: linear-gradient(
    90deg,
    transparent,
    rgba(109, 93, 246, 0.55),
    rgba(45, 140, 255, 0.55),
    transparent
  );
}

.divider::after{
  content:"";
  position:absolute;
  inset:-10px 0;
  background: radial-gradient(
    circle at center,
    rgba(109, 93, 246, 0.14),
    transparent 70%
  );
  opacity: .7;
  pointer-events:none;
}
</style>