<!-- src/components/Proyectos/01-Hero.vue -->
<template>
  <section class="hero" aria-label="Hero del proyecto" v-if="proyecto">
    <!-- Collage -->
    <div class="top" v-if="imgsOk">
      <HeroCollage
        :img1="proyecto.heroImgs[0]"
        :img2="proyecto.heroImgs[1]"
        :img3="proyecto.heroImgs[2]"
        :veilOpacity="proyecto.heroVeil ?? 0.48"
      />
    </div>

    <!-- Overlay + texto encima -->
    <div class="content">
      <p class="kicker">PROYECTO</p>

      <h1 class="title">
        <span class="tWhite">{{ proyecto.nombre }}</span>
      </h1>

      <p class="sub">
        {{ proyecto.heroSubtitulo }}
      </p>

      <div class="actions" v-if="proyecto.siteUrl">
        <a class="btn primary" :href="proyecto.siteUrl" target="_blank" rel="noopener">
          Ver proyecto <span class="arrow">↗</span>
        </a>
      </div>
    </div>
  </section>

  <!-- Fallback básico -->
  <section class="hero" aria-label="Hero del proyecto" v-else>
    <div class="content">
      <p class="kicker">CARGANDO</p>
      <h1 class="title">
        <span class="tWhite">Proyecto</span>
      </h1>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import HeroCollage from "@/components/ui/HeroCollage.vue";

const props = defineProps({
  proyecto: { type: Object, default: null },
  loading: { type: Boolean, default: false },
  notFound: { type: Boolean, default: false },
});

const imgsOk = computed(() => !!props.proyecto?.heroImgs && props.proyecto.heroImgs.length === 3);
</script>

<style scoped>
/* =========================
   HERO — VYKA
========================= */

.hero{
  position: relative;
  background: #181818;
  overflow: hidden;
  padding: 0;

  min-height: 100vh;
  min-height: 100svh;
  min-height: 100dvh;

  isolation: isolate;
}

/* Collage fondo */
.top{
  position: absolute;
  inset: 0;
  z-index: 1;
}

/* ✅ Overlay pro: menos “bloque”, más legible */
.hero::after{
  content:"";
  position:absolute;
  inset:0;
  z-index:2;
  pointer-events:none;

  background:
    radial-gradient(1100px 620px at 50% 14%, rgba(0,0,0,0.05), rgba(0,0,0,0.62)),
    linear-gradient(180deg, rgba(24,24,24,0.06), rgba(24,24,24,0.82));
}

/* ✅ glows sutiles que combinan con collage */
.hero::before{
  content:"";
  position:absolute;
  inset:-220px;
  z-index:2;
  pointer-events:none;
  background:
    radial-gradient(520px 520px at 18% 18%, rgba(109,93,246,0.16), transparent 62%),
    radial-gradient(620px 620px at 82% 30%, rgba(45,140,255,0.14), transparent 64%);
  opacity: .9;
}

/* CONTENIDO */
.content{
  position: absolute;
  inset: 0;
  z-index: 3;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
  padding: clamp(22px, 4vw, 56px);

  gap: 12px;

  /* ✅ entrada sutil */
  animation: heroIn .9s cubic-bezier(.2,.8,.2,1) both;
}

/* kicker con líneas como tu sección resultados */
.kicker{
  display: inline-flex;
  align-items: center;
  gap: 12px;

  font-size: 0.72rem;
  letter-spacing: .26em;
  text-transform: uppercase;
  font-weight: 850;
  color: rgba(255,255,255,0.62);

  margin: 0 0 10px;
}

.kicker::before,
.kicker::after{
  content:"";
  width: 44px;
  height: 1px;
  opacity: .85;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(109,93,246,0.60),
    rgba(45,140,255,0.60),
    transparent
  );
}

/* TITULO */
.title{
  margin: 0;
  max-width: 980px;

  font-size: clamp(2.55rem, 4.8vw, 3.7rem);
  line-height: 1.04;
  font-weight: 950;
  letter-spacing: -0.03em;

  /* ✅ mejora legibilidad sobre collage */
  text-shadow: 0 18px 60px rgba(0,0,0,0.55);
}

.tWhite{
  color: rgba(255,255,255,0.96);
}

/* SUBTITULO */
.sub{
  margin: 0;
  max-width: 720px;

  font-size: 1.06rem;
  font-weight: 500;
  line-height: 1.7;

  color: rgba(255,255,255,0.74);
  letter-spacing: 0.01em;
}

/* CONTENEDOR BOTON */
.actions{
  margin-top: 10px;
  display: flex;
  justify-content: center;
}

/* BOTON */
.btn{
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  padding: 14px 34px;
  min-width: 200px;

  border-radius: 14px;

  font-weight: 800;
  font-size: 0.95rem;
  letter-spacing: 0.04em;
  text-decoration: none;

  transition: transform .22s ease, box-shadow .22s ease, filter .22s ease;
}

/* BOTON PRINCIPAL */
.btn.primary{
  color: rgba(255,255,255,0.98);

  background: linear-gradient(
    90deg,
    rgba(109,93,246,0.95),
    rgba(45,140,255,0.95)
  );

  box-shadow:
    0 18px 54px rgba(109,93,246,0.22),
    0 8px 28px rgba(0,0,0,0.40);

  position: relative;
  overflow: hidden;
}

/* brillo sutil */
.btn.primary::after{
  content:"";
  position:absolute;
  inset:-2px;
  pointer-events:none;
  opacity:.0;
  background: radial-gradient(420px 220px at 50% 0%, rgba(255,255,255,0.18), transparent 60%);
  transition: opacity .22s ease;
}

.btn.primary:hover{
  transform: translateY(-2px);
  filter: saturate(1.05);

  box-shadow:
    0 26px 70px rgba(109,93,246,0.30),
    0 10px 34px rgba(0,0,0,0.46);
}

.btn.primary:hover::after{
  opacity: .85;
}

.arrow{
  font-weight: 900;
  opacity: .95;
}

/* animación de entrada */
@keyframes heroIn{
  from{ opacity: 0; transform: translateY(10px); }
  to{ opacity: 1; transform: translateY(0); }
}

@media (max-width: 720px){
  .title{ max-width: 92%; }
  .sub{ max-width: 92%; }
}

@media (prefers-reduced-motion: reduce){
  .content{ animation: none; }
  .btn{ transition: none; }
  .btn.primary::after{ transition: none; }
}
</style>