<template>
  <div
    class="collage"
    aria-hidden="true"
    :style="{
      '--veil': String(veilOpacity),
      '--img-b': String(imgBrightness),
      '--img-c': String(imgContrast),
      '--img-s': String(imgSaturate),
      '--matte': matte,
      '--rim': rim,
      '--shadow': shadow,
    }"
  >
    <!-- ✅ ESCENA: acá va la escala, no en collage -->
    <div class="scene">
      <figure class="shot s1">
        <img :src="img1" alt="" loading="lazy" decoding="async" />
      </figure>

      <figure class="shot s2">
        <img :src="img2" alt="" loading="lazy" decoding="async" />
      </figure>

      <figure class="shot s3">
        <img :src="img3" alt="" loading="lazy" decoding="async" />
      </figure>
    </div>

    <span class="veil"></span>
  </div>
</template>

<script setup>
defineProps({
  img1: { type: String, required: true },
  img2: { type: String, required: true },
  img3: { type: String, required: true },

  veilOpacity: { type: Number, default: 0.38 },

  imgBrightness: { type: Number, default: 1.02 },
  imgContrast: { type: Number, default: 1.04 },
  imgSaturate: { type: Number, default: 1.05 },

  matte: { type: String, default: "rgba(255,255,255,0.06)" },
  rim: { type: String, default: "rgba(255,255,255,0.12)" },
  shadow: { type: String, default: "rgba(0,0,0,0.55)" },
});
</script>

<style scoped>
/* =========================
   COLLAGE — base
========================= */

.collage{
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  margin: 0;
  isolation: isolate;

  /* ✅ Entrada sutil del collage entero */
  animation: collageIn .9s cubic-bezier(.2,.8,.2,1) both;
}

/* ✅ la escena ocupa todo, pero es la que se escala */
.scene{
  position: absolute;
  inset: 0;

  /* tu tamaño visual */
  transform: translateY(100px) scale(0.81);
  transform-origin: center top;

  /* ✅ micro “respirar” */
  animation: sceneFloat 8.5s ease-in-out 1.1s infinite;
  will-change: transform;
}

/* Shots */
.shot{
  position: absolute;
  border-radius: 26px;
  overflow: hidden;

  background: radial-gradient(120% 120% at 30% 20%, rgba(255,255,255,0.08), var(--matte));
  box-shadow:
    0 24px 70px var(--shadow),
    0 0 0 1px rgba(255,255,255,0.05) inset;

  border: 1px solid var(--rim);

  /* ✅ entrada por pieza */
  opacity: 0;
  animation: shotIn .85s cubic-bezier(.2,.85,.2,1) both;
  will-change: transform, opacity;
}

/* Rim light */
.shot::before{
  content:"";
  position:absolute;
  inset:0;
  pointer-events:none;
  z-index:2;
  background:
    radial-gradient(80% 60% at 50% 0%, rgba(255,255,255,0.10), transparent 60%),
    linear-gradient(180deg, rgba(255,255,255,0.06), transparent 45%);
  opacity: 0.55;
}

/* ✅ glow extra al hover (desktop) */
.shot::after{
  content:"";
  position:absolute;
  inset:-2px;
  border-radius: 28px;
  pointer-events:none;
  z-index:3;
  opacity: 0;
  background: radial-gradient(420px 240px at 40% 10%, rgba(109,93,246,0.18), transparent 60%);
  transition: opacity .25s ease;
}

.shot img{
  width:100%;
  height:100%;
  object-fit:cover;

  filter:
    brightness(var(--img-b))
    contrast(var(--img-c))
    saturate(var(--img-s));

  /* ✅ micro zoom de vida */
  transform: scale(1.02);
  transition: transform .45s cubic-bezier(.2,.8,.2,1);
}

/* =========================
   COMPOSICIÓN (igual que la tuya)
========================= */
.s1{
  width: 58%;
  height: 70%;
  left: -5%;
  top: 18%;
  transform: rotate(-6deg);
  animation-delay: .10s;

  /* ✅ flotación por capa (parallax fake) */
  animation-name: shotIn, float1;
  animation-duration: .85s, 10.5s;
  animation-delay: .10s, 1.4s;
  animation-timing-function: cubic-bezier(.2,.85,.2,1), ease-in-out;
  animation-iteration-count: 1, infinite;
  animation-fill-mode: both, both;
}

.s2{
  width: 56%;
  height: 68%;
  right: -5%;
  top: 10%;
  transform: rotate(6deg);
  animation-delay: .18s;

  animation-name: shotIn, float2;
  animation-duration: .85s, 11.5s;
  animation-delay: .18s, 1.6s;
  animation-timing-function: cubic-bezier(.2,.85,.2,1), ease-in-out;
  animation-iteration-count: 1, infinite;
  animation-fill-mode: both, both;
}

.s3{
  width: 54%;
  height: 66%;
  left: 23%;
  bottom: -4%;
  transform: rotate(0deg);
  animation-delay: .26s;

  animation-name: shotIn, float3;
  animation-duration: .85s, 12.5s;
  animation-delay: .26s, 1.8s;
  animation-timing-function: cubic-bezier(.2,.85,.2,1), ease-in-out;
  animation-iteration-count: 1, infinite;
  animation-fill-mode: both, both;
}

/* =========================
   Hover (solo devices con hover)
========================= */
@media (hover:hover) and (pointer:fine){
  .shot{
    transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
  }

  .shot:hover{
    transform: translateY(-6px) scale(1.01);
    border-color: rgba(255,255,255,0.16);
    box-shadow:
      0 30px 84px rgba(0,0,0,0.60),
      0 0 0 1px rgba(255,255,255,0.06) inset;
  }

  .shot:hover::after{ opacity: 1; }
  .shot:hover img{ transform: scale(1.06); }
}

/* Velo */
.veil{
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 4;

  background:
    radial-gradient(900px 420px at 50% 20%, rgba(0,0,0,0.00), rgba(0,0,0,0.20)),
    linear-gradient(180deg, rgba(24,24,24,0.08), rgba(24,24,24,0.55));

  opacity: var(--veil);

  /* ✅ entrada suave */
  animation: veilIn .9s cubic-bezier(.2,.8,.2,1) .15s both;
}

/* =========================
   Keyframes (sutiles)
========================= */
@keyframes collageIn{
  from{ opacity: 0; transform: translateY(10px); }
  to{ opacity: 1; transform: translateY(0); }
}

@keyframes veilIn{
  from{ opacity: 0; }
  to{ opacity: var(--veil); }
}

@keyframes sceneFloat{
  0%,100%{ transform: translateY(100px) scale(0.81); }
  50%{ transform: translateY(96px) scale(0.81); }
}

/* Entrada base de cada shot */
@keyframes shotIn{
  from{ opacity: 0; transform: translateY(18px) scale(0.985); }
  to{ opacity: 1; transform: translateY(0) scale(1); }
}

/* Flotación por capa (mantiene el “rotate” visual) */
@keyframes float1{
  0%,100%{ transform: rotate(-6deg) translateY(0); }
  50%{ transform: rotate(-6deg) translateY(-10px); }
}
@keyframes float2{
  0%,100%{ transform: rotate(6deg) translateY(0); }
  50%{ transform: rotate(6deg) translateY(-12px); }
}
@keyframes float3{
  0%,100%{ transform: rotate(0deg) translateY(0); }
  50%{ transform: rotate(0deg) translateY(-8px); }
}

/* =========================
   Responsive
========================= */
@media (max-width: 900px){
  .collage{ height: 420px; min-height: 420px; }

  .s1{ width: 78%; left: -8%; top: 22%; }
  .s2{ width: 74%; right: -10%; top: 12%; }
  .s3{ width: 82%; left: 8%; bottom: -6%; }
}

/* =========================
   Accesibilidad: reduce motion
========================= */
@media (prefers-reduced-motion: reduce){
  .collage, .scene, .shot, .veil{
    animation: none !important;
    transition: none !important;
  }
}
</style>