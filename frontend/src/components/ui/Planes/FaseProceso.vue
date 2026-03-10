<template>
  <article class="fase">
    <div class="fase-top">
      <div class="fase-numero-wrap">
        <div class="fase-numero">
          {{ fase.numero }}
        </div>
      </div>

      <div class="fase-heading">
        <p class="fase-etapa">
          {{ fase.etapa }}
        </p>

        <h3 class="fase-titulo">
          {{ fase.titulo }}
        </h3>
      </div>
    </div>

    <div class="fase-linea"></div>

    <div class="fase-carrusel">
      <PasoCard
        v-for="(paso, index) in fase.pasos"
        :key="`${fase.numero}-${index}-${paso.titulo}`"
        :paso="paso"
        :index="index"
        :faseTitulo="fase.titulo"
      />
    </div>
  </article>
</template>

<script setup>
import PasoCard from "@/components/ui/Planes/PasoCard.vue";

defineProps({
  fase: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.fase {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  padding: 1.4rem 0 0.2rem;
}

/* =========================
   HEADER
========================= */
.fase-top {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.85rem;
  text-align: center;
  position: relative;
}

.fase-numero-wrap {
  position: relative;
  flex-shrink: 0;
}

.fase-numero-wrap::before {
  content: "";
  position: absolute;
  inset: -10px;
  border-radius: 999px;
  background: radial-gradient(
    circle,
    rgba(109, 93, 246, 0.28) 0%,
    rgba(45, 140, 255, 0.14) 45%,
    transparent 75%
  );
  filter: blur(10px);
  z-index: 0;
}

.fase-numero {
  position: relative;
  z-index: 1;
  width: 50px;
  height: 50px;
  border-radius: 999px;
  display: grid;
  place-items: center;
  background: linear-gradient(
    135deg,
    rgba(109, 93, 246, 0.95),
    rgba(45, 140, 255, 0.95)
  );
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #ffffff;
  font-size: 0.95rem;
  font-weight: 800;
  letter-spacing: 0.04em;
  box-shadow:
    0 14px 30px rgba(34, 20, 90, 0.35),
    0 0 22px rgba(109, 93, 246, 0.22),
    inset 0 1px 0 rgba(255, 255, 255, 0.18);
}

.fase-heading {
  display: flex;
  flex-direction: column;
  gap: 0.28rem;
}

.fase-etapa {
  margin: 0;
  font-size: 0.72rem;
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: rgba(255, 255, 255, 0.42);
}

.fase-titulo {
  margin: 0;
  font-size: clamp(1.18rem, 1.8vw, 1.7rem);
  line-height: 1.15;
  font-weight: 700;
  color: #f7f8ff;
  text-wrap: balance;
}

/* =========================
   LINEA
========================= */
.fase-linea {
  position: relative;
  width: 100%;
  height: 1px;
  background: linear-gradient(
    90deg,
    rgba(109, 93, 246, 0.55) 0%,
    rgba(45, 140, 255, 0.28) 22%,
    rgba(255, 255, 255, 0.08) 58%,
    rgba(255, 255, 255, 0.02) 100%
  );
  overflow: hidden;
}

.fase-linea::after {
  content: "";
  position: absolute;
  top: -1px;
  left: 0;
  width: 180px;
  height: 3px;
  background: linear-gradient(
    90deg,
    rgba(109, 93, 246, 0),
    rgba(109, 93, 246, 0.45),
    rgba(45, 140, 255, 0)
  );
  filter: blur(10px);
  opacity: 0.75;
}

/* =========================
   CARRUSEL
========================= */
.fase-carrusel {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(290px, 320px);
  gap: 1.2rem;

  overflow-x: auto;
  overflow-y: hidden;

  padding: 0.35rem 1rem 1rem;

  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  scroll-padding-left: 1rem;

  justify-content: center; /* desktop */
}

:deep(.paso-card) {
  scroll-snap-align: center;
}

.fase-carrusel::-webkit-scrollbar {
  height: 8px;
}

.fase-carrusel::-webkit-scrollbar-track {
  background: transparent;
}

.fase-carrusel::-webkit-scrollbar-thumb {
  background: linear-gradient(
    90deg,
    rgba(109, 93, 246, 0.35),
    rgba(45, 140, 255, 0.35)
  );
  border-radius: 999px;
}

.fase-carrusel::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(
    90deg,
    rgba(109, 93, 246, 0.55),
    rgba(45, 140, 255, 0.55)
  );
}

/* =========================
   RESPONSIVE
========================= */
@media (max-width: 992px) {
  .fase-carrusel {
    grid-auto-columns: minmax(280px, 300px);
    gap: 1rem;
    justify-content: start;
    scroll-padding-left: 0.4rem;
    padding-left: 0.4rem;
    padding-right: 0.4rem;
  }

  :deep(.paso-card) {
    scroll-snap-align: start;
  }
}

@media (max-width: 768px) {
  .fase {
    gap: 1.2rem;
    padding-top: 1rem;
  }

  .fase-top {
    align-items: center;
    gap: 0.85rem;
  }

  .fase-numero {
    width: 46px;
    height: 46px;
    font-size: 0.9rem;
  }

  .fase-carrusel {
    grid-auto-columns: 82%;
    gap: 0.95rem;
    justify-content: start;
    scroll-padding-left: 0.4rem;
    padding: 0.35rem 0.4rem 1rem;
  }
}

@media (max-width: 480px) {
  .fase-etapa {
    font-size: 0.68rem;
    letter-spacing: 0.16em;
  }

  .fase-titulo {
    font-size: 1.02rem;
  }

  .fase-carrusel {
    grid-auto-columns: 88%;
    justify-content: start;
    scroll-padding-left: 0.35rem;
    padding: 0.35rem 0.35rem 1rem;
  }
}
</style>