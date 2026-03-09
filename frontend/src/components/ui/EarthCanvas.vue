<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";
import { createEarth } from "@/three/earth";

const canvasRef = ref(null);
let earth = null;

onMounted(() => {
  earth = createEarth(canvasRef.value, {
    // --- Planeta (Dark premium)
    oceanColor: "#08080C",
    landColor: "#4A4A6A",
    landContrast: 2.1,
    landThreshold: 0.45,

    // --- Wrap (naranja premium SIN rojo fuerte)
    wireColor: "#E66A27",
    wireDeep:  "#3A1406", // ✅ antes era #8A2F00 (muy rojo)

    // ✅ additive friendly
    wrapOpacity: 0.38,       // ✅ antes 0.85
    wrapThickness: 0.012,
    wrapFresnelPow: 2.5,

    wrapGlowOpacity: 0.045,  // ✅ antes 0.12
    starDensity: 0.18,
    pulsesPerTri: 1,

    // --- movimiento base
    wrapWaveAmp: 4.5,
    wrapWaveFreq: 2.8,
    wrapWaveSpeed: 1.1,

    wrapThrobAmp: 0.35,
    wrapThrobSpeed: 1.2,

    // --- ripple click
    wrapRippleAmp: 1.10,
    wrapRippleSpeed: 2.40,
    wrapRippleFreq: 15.0,
    wrapRippleDecay: 1.8,
    wrapRippleWidth: 0.28,
  });
});

onBeforeUnmount(() => earth?.destroy());
</script>

<template>
  <div class="earthStage" aria-hidden="true">
    <canvas ref="canvasRef" class="earthCanvas"></canvas>
  </div>
</template>

<style scoped>
.earthStage {
  position: relative;
  width: min(520px, 96vw);
  aspect-ratio: 1 / 1;
  border-radius: 999px;
  overflow: hidden;
  background: transparent;

  /* ✅ bajado para que no “tiña” rojo/naranja */
  filter: drop-shadow(0 24px 70px rgba(230, 106, 39, 0.10));
}

.earthCanvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
  touch-action: manipulation;
  cursor: grab;
}
.earthCanvas:active {
  cursor: grabbing;
}
</style>