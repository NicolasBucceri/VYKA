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
      <source :src="video" type="video/webm" />
    </video>

    <!-- overlay -->
    <div class="card-overlay"></div>

    <!-- contenido -->
    <div class="card-content">
      <h3 class="title">{{ titulo }}</h3>

      <div class="line"></div>

      <p class="desde">
        {{ t("planes.desde") }}
      </p>

      <h2 class="precio">
        {{ precio }} <span>{{ moneda }}</span>
      </h2>

      <ul class="features">
        <li v-for="(f, i) in features" :key="i">
          {{ f }}
        </li>
      </ul>

      <p class="nota">
        {{ t("planes.nota") }}
      </p>

      <!-- BOTON UI -->
<router-link :to="`/planes/${slug}`" class="card-btn-link">
  <BotonSecundario class="card-btn">
    {{ t("planes.btnMas") }}
  </BotonSecundario>
</router-link>
    </div>
  </div>
</template>

<script setup>
import { useLang } from "@/composables/useLang";
import BotonSecundario from "@/components/ui/BotonSecundario.vue";

const { t } = useLang();

defineProps({
  plan: Number,
  slug: String,
  titulo: String,
  precio: String,
  moneda: String,
  features: Array,
  recomendado: Boolean,
  video: String,
});
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
  min-height: 100%;
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

/* =========================
   CONTENT
========================= */
.card-content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.title {
  margin: 10px 0;
  font-size: 22px;
  color: #fff;
  line-height: 1.2;
  text-wrap: balance;
}

/* =========================
   LINE
========================= */
.line {
  height: 2px;
  background: linear-gradient(to right, #2d8cff, transparent);
  margin-bottom: 15px;
}

.card.recomendado .line {
  background: linear-gradient(to right, #e66a27, transparent);
}

/* =========================
   PRICE
========================= */
.desde {
  font-size: 12px;
  color: #aaa;
  margin-bottom: 6px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.precio {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 6px;
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

/* =========================
   FEATURES
========================= */
.features {
  margin: 15px 0 20px;
  padding-left: 18px;
}

.features li {
  color: #ccc;
  margin-bottom: 8px;
  line-height: 1.45;
}

/* =========================
   NOTE
========================= */
.nota {
  font-size: 12px;
  color: #777;
  margin-bottom: 20px;
  text-align: center;
}

/* =========================
   BUTTON
========================= */
.card-btn-link {
  display: block;
  margin-top: auto;
}

.card-btn {
  width: 100%;
}

/* =========================
   TABLET / SMALL DESKTOP
   (2 cards todavía entran)
========================= */
@media (max-width: 1024px) and (min-width: 861px) {
  .card {
    padding: 22px 18px;
    border-radius: 18px;
  }

  .title {
    font-size: 1.15rem;
    line-height: 1.2;
    margin: 8px 0;
  }

  .desde {
    font-size: 11px;
    margin-bottom: 6px;
  }

  .precio {
    font-size: clamp(1.55rem, 3vw, 1.85rem);
    margin-bottom: 14px;
    gap: 6px;
  }

  .precio span {
    font-size: 0.88rem;
    margin-left: 0;
  }

  .features {
    margin: 12px 0 16px;
    padding-left: 18px;
  }

  .features li {
    font-size: 0.92rem;
    margin-bottom: 6px;
    line-height: 1.4;
  }

  .nota {
    font-size: 11px;
    margin-bottom: 16px;
  }
}

/* =========================
   TABLET CHICA + MOBILE
   (1 card debajo de la otra)
========================= */
@media (max-width: 860px) {
  .card {
    padding: 22px 18px;
    border-radius: 16px;
  }

  .title {
    font-size: 1.2rem;
    line-height: 1.2;
    margin: 8px 0;
  }

  .desde {
    font-size: 11px;
  }

  .precio {
    font-size: clamp(1.6rem, 8vw, 1.95rem);
    gap: 6px;
    margin-bottom: 16px;
  }

  .precio span {
    font-size: 0.9rem;
    margin-left: 0;
  }

  .features {
    padding-left: 18px;
    margin: 12px 0 18px;
  }

  .features li {
    font-size: 0.95rem;
    margin-bottom: 7px;
    line-height: 1.45;
  }

  .nota {
    font-size: 11px;
    margin-bottom: 18px;
  }

  .card-video {
    object-fit: cover;
  }
}

/* =========================
   MOBILE CHICO
========================= */
@media (max-width: 520px) {
  .card {
    padding: 20px 16px;
  }

  .title {
    font-size: 1.1rem;
  }

  .precio {
    font-size: clamp(1.45rem, 8.5vw, 1.8rem);
  }

  .features li {
    font-size: 0.92rem;
  }
}
</style>