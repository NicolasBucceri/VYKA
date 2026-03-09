<template>
  <div class="vyka-bg">
    <div class="vyka-lines" aria-hidden="true"></div>
    <div class="vyka-noise" aria-hidden="true"></div>
    <slot />
  </div>
</template>

<style scoped>
.vyka-bg {
  position: relative;
  min-height: 100vh;
  background: #0C0C11;
  overflow: hidden;
}

/* ===== LÍNEAS SUELTAS (ESTÁTICAS, NO GRILLA) ===== */
.vyka-lines {
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  opacity: 0.65; /* más premium / sutil */

  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='960' height='540' viewBox='0 0 960 540'%3E%3Crect width='960' height='540' fill='none'/%3E%3Cg stroke='rgba(255,255,255,0.07)' stroke-width='1'%3E%3Cline x1='40' y1='70' x2='220' y2='70'/%3E%3Cline x1='280' y1='70' x2='380' y2='70'/%3E%3Cline x1='520' y1='70' x2='900' y2='70'/%3E%3Cline x1='70' y1='140' x2='210' y2='140'/%3E%3Cline x1='300' y1='140' x2='460' y2='140'/%3E%3Cline x1='620' y1='140' x2='860' y2='140'/%3E%3Cline x1='50' y1='220' x2='180' y2='220'/%3E%3Cline x1='260' y1='220' x2='430' y2='220'/%3E%3Cline x1='610' y1='220' x2='920' y2='220'/%3E%3Cline x1='120' y1='320' x2='280' y2='320'/%3E%3Cline x1='360' y1='320' x2='540' y2='320'/%3E%3Cline x1='700' y1='320' x2='900' y2='320'/%3E%3Cline x1='80' y1='420' x2='240' y2='420'/%3E%3Cline x1='310' y1='420' x2='470' y2='420'/%3E%3Cline x1='650' y1='420' x2='930' y2='420'/%3E%3C/g%3E%3Cg stroke='rgba(255,255,255,0.06)' stroke-width='1'%3E%3Cline x1='120' y1='30' x2='120' y2='120'/%3E%3Cline x1='120' y1='170' x2='120' y2='260'/%3E%3Cline x1='120' y1='330' x2='120' y2='520'/%3E%3Cline x1='300' y1='10' x2='300' y2='110'/%3E%3Cline x1='300' y1='180' x2='300' y2='310'/%3E%3Cline x1='300' y1='380' x2='300' y2='520'/%3E%3Cline x1='540' y1='20' x2='540' y2='170'/%3E%3Cline x1='540' y1='240' x2='540' y2='520'/%3E%3Cline x1='760' y1='30' x2='760' y2='210'/%3E%3Cline x1='760' y1='280' x2='760' y2='520'/%3E%3C/g%3E%3Cg stroke='rgba(255,255,255,0.10)' stroke-width='1'%3E%3Cline x1='0' y1='260' x2='960' y2='260'/%3E%3Cline x1='480' y1='0' x2='480' y2='540'/%3E%3C/g%3E%3C/svg%3E");

  background-size: 1200px 700px;
  background-repeat: repeat;

  /* fade suave tipo Figma */
  -webkit-mask-image: radial-gradient(circle at 45% 35%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.75) 62%, rgba(0,0,0,0) 100%);
  mask-image: radial-gradient(circle at 45% 35%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.75) 62%, rgba(0,0,0,0) 100%);
}

/* ===== NOISE ===== */
.vyka-noise {
  position: absolute;
  inset: 0;
  background-image: url("https://www.transparenttextures.com/patterns/noise.png");
  opacity: 0.03;
  z-index: 2;
  pointer-events: none;
}

/* ===== CONTENIDO ===== */
.vyka-bg > :not(.vyka-lines):not(.vyka-noise) {
  position: relative;
  z-index: 3;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 768px) {
  .vyka-lines {
    opacity: 0.5;
    background-size: 900px 600px;
  }
}
</style>