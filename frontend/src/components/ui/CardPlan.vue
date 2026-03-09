<template>
  <div class="card" :class="{ recomendado }">
    <!-- VIDEO FONDO -->
    <video
      v-if="recomendado && video"
      class="card-video"
      autoplay
      muted
      loop
      playsinline
    >
      <source :src="video" type="video/mp4" />
    </video>

    <!-- overlay -->
    <div class="card-overlay"></div>

    <!-- contenido -->
    <div class="card-content">
      <div class="card-top">
        <span class="plan">Plan {{ plan }}</span>

        <span v-if="recomendado" class="badge">
          Recomendado
        </span>
      </div>

      <h3 class="title">{{ titulo }}</h3>

      <div class="line"></div>

      <p class="desde">Desde</p>

      <h2 class="precio">
        {{ formatPrice(precio) }} <span>ARS</span>
      </h2>

      <ul class="features">
        <li v-for="(f, i) in features" :key="i">
          {{ f }}
        </li>
      </ul>

      <p class="nota">
        Inversión única · Sin costos mensuales
      </p>

      <button class="btn">
        Saber más
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  plan: Number,
  titulo: String,
  precio: Number,
  features: Array,
  recomendado: Boolean,
  video: String,
});

const formatPrice = (value) => {
  return new Intl.NumberFormat("es-AR").format(value);
};
</script>

<style scoped>
/* =========================
   CARD
========================= */
.card {
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  padding: 30px;
  background: rgba(10, 10, 14, 0.6);
  border: 1px solid rgba(45, 140, 255, 0.4);
  backdrop-filter: blur(10px);
  box-shadow: 0 0 40px rgba(45, 140, 255, 0.15);
}

.card.recomendado {
  border-color: rgba(230, 106, 39, 0.6);
  box-shadow: 0 0 50px rgba(230, 106, 39, 0.2);
}

/* =========================
   VIDEO FONDO
========================= */
.card-video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.65;
  z-index: 0;
}

.card-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.62);
  z-index: 1;
}

.card-content {
  position: relative;
  z-index: 2;
}

.card-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}

.plan {
  font-size: 12px;
  color: #aaa;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.badge {
  background: #e66a27;
  color: #fff;
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;
}

.title {
  margin: 10px 0;
  font-size: 22px;
  color: #fff;
  line-height: 1.2;
}

.line {
  height: 2px;
  background: linear-gradient(to right, #2d8cff, transparent);
  margin-bottom: 15px;
}

.card.recomendado .line {
  background: linear-gradient(to right, #e66a27, transparent);
}

.desde {
  font-size: 12px;
  color: #aaa;
  margin-bottom: 6px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.precio {
  font-size: clamp(1.8rem, 3vw, 2.2rem);
  color: #2d8cff;
  line-height: 1;
  margin-bottom: 18px;
}

.card.recomendado .precio {
  color: #e66a27;
}

.precio span {
  font-size: 14px;
  margin-left: 4px;
}

.features {
  margin: 15px 0 20px;
  padding-left: 18px;
}

.features li {
  color: #ccc;
  margin-bottom: 8px;
  line-height: 1.45;
}

.nota {
  font-size: 12px;
  color: #777;
  margin-bottom: 20px;
  text-align: center;
}

.btn {
  width: 100%;
  padding: 12px;
  border-radius: 999px;
  border: 1px solid #2d8cff;
  background: transparent;
  color: #fff;
  cursor: pointer;
  transition: 0.25s ease;
}

.card.recomendado .btn {
  border-color: #e66a27;
}

.btn:hover {
  background: #2d8cff;
}

.card.recomendado .btn:hover {
  background: #e66a27;
}
</style>