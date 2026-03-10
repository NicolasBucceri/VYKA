<template>
  <article class="info-card" :class="{ danger: variant === 'danger' }">
    <div class="info-head">
      <h2>{{ titulo }}</h2>
      <p v-if="descripcion" class="info-desc">
        {{ descripcion }}
      </p>
    </div>

    <div v-if="tipo === 'chips'" class="chips-wrap">
      <span v-for="(item, i) in items" :key="i" class="chip">
        {{ item }}
      </span>
    </div>

    <ul v-else-if="tipo === 'check-grid'" class="check-grid">
      <li v-for="(item, i) in items" :key="i">
        <span class="bullet"></span>
        <span class="text">{{ item }}</span>
      </li>
    </ul>

    <div v-else-if="tipo === 'steps'" class="steps-grid">
      <div v-for="(item, i) in items" :key="i" class="step-card">
        <span class="step-number">{{ String(i + 1).padStart(2, "0") }}</span>
        <p>{{ item }}</p>
      </div>
    </div>

    <div v-else-if="tipo === 'timeline'" class="timeline-wrap">
      <div v-for="(item, i) in items" :key="i" class="timeline-item">
        <div class="timeline-mark">
          <span class="timeline-dot"></span>
          <span v-if="i !== items.length - 1" class="timeline-line"></span>
        </div>

        <div class="timeline-content">
          <p>{{ item }}</p>
        </div>
      </div>
    </div>

    <div v-else-if="tipo === 'mini-cards'" class="mini-cards">
      <div v-for="(item, i) in items" :key="i" class="mini-card">
        {{ item }}
      </div>
    </div>

    <ul v-else class="info-list">
      <li v-for="(item, i) in items" :key="i">
        <span class="bullet"></span>
        <span class="text">{{ item }}</span>
      </li>
    </ul>
  </article>
</template>

<script setup>
defineProps({
  titulo: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    default: "",
  },
  items: {
    type: Array,
    required: true,
  },
  tipo: {
    type: String,
    default: "default",
  },
  variant: {
    type: String,
    default: "default",
  },
});
</script>

<style scoped>
.info-card {
  position: relative;
  border-radius: 24px;
  padding: 28px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.04),
    rgba(255, 255, 255, 0.02)
  );
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.24);
  overflow: hidden;
  min-height: 100%;
}

.info-card::after {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at top left,
    rgba(109, 93, 246, 0.08),
    transparent 35%
  );
  pointer-events: none;
}

.info-card.danger {
  border-color: rgba(255, 110, 110, 0.18);
  background: linear-gradient(
    180deg,
    rgba(255, 90, 90, 0.05),
    rgba(255, 255, 255, 0.02)
  );
}

.info-head {
  position: relative;
  z-index: 1;
  margin-bottom: 20px;
}

.info-card h2 {
  color: #fff;
  margin: 0;
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.info-desc {
  margin: 10px 0 0;
  color: rgba(208, 211, 228, 0.72);
  font-size: 0.96rem;
  line-height: 1.6;
  max-width: 680px;
}

.chips-wrap {
  position: relative;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.chip {
  display: inline-flex;
  align-items: center;
  padding: 11px 16px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.035);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #d0d3e4;
  line-height: 1.4;
  transition:
    transform 0.25s ease,
    border-color 0.25s ease,
    background 0.25s ease,
    box-shadow 0.25s ease;
}

.chip:hover {
  transform: translateY(-2px);
  border-color: rgba(109, 93, 246, 0.28);
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.16);
}

.check-grid {
  position: relative;
  z-index: 1;
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, minmax(220px, 1fr));
  gap: 14px 16px;
}

.check-grid li,
.info-list li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  min-height: 58px;
  padding: 14px 16px;
  border-radius: 18px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.035),
    rgba(255, 255, 255, 0.02)
  );
  border: 1px solid rgba(255, 255, 255, 0.06);
  transition:
    transform 0.25s ease,
    border-color 0.25s ease,
    background 0.25s ease,
    box-shadow 0.25s ease;
}

.check-grid li:hover,
.info-list li:hover {
  transform: translateY(-2px);
  border-color: rgba(109, 93, 246, 0.25);
  background: rgba(255, 255, 255, 0.045);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.18);
}

.bullet {
  flex: 0 0 10px;
  width: 10px;
  height: 10px;
  margin-top: 8px;
  border-radius: 999px;
  background: linear-gradient(135deg, #6d5df6, #2d8cff);
  box-shadow:
    0 0 0 4px rgba(109, 93, 246, 0.08),
    0 0 14px rgba(109, 93, 246, 0.4);
}

.text {
  color: #d0d3e4;
  line-height: 1.65;
  font-size: 0.97rem;
}

.steps-grid {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.step-card {
  padding: 18px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.025);
  border: 1px solid rgba(255, 255, 255, 0.06);
  transition:
    transform 0.25s ease,
    border-color 0.25s ease,
    background 0.25s ease;
}

.step-card:hover {
  transform: translateY(-2px);
  border-color: rgba(45, 140, 255, 0.22);
  background: rgba(255, 255, 255, 0.04);
}

.step-number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 42px;
  height: 28px;
  padding: 0 10px;
  margin-bottom: 12px;
  border-radius: 999px;
  background: rgba(109, 93, 246, 0.12);
  border: 1px solid rgba(109, 93, 246, 0.2);
  color: #9ea8ff;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
}

.step-card p {
  margin: 0;
  color: #dce1f1;
  line-height: 1.6;
}

.timeline-wrap {
  position: relative;
  z-index: 1;
  display: grid;
  gap: 18px;
}

.timeline-item {
  display: grid;
  grid-template-columns: 22px 1fr;
  gap: 14px;
  align-items: start;
}

.timeline-mark {
  position: relative;
  display: flex;
  justify-content: center;
  min-height: 100%;
}

.timeline-dot {
  width: 10px;
  height: 10px;
  margin-top: 7px;
  border-radius: 50%;
  background: linear-gradient(135deg, #6d5df6, #2d8cff);
  box-shadow: 0 0 12px rgba(109, 93, 246, 0.45);
  z-index: 2;
}

.timeline-line {
  position: absolute;
  top: 22px;
  bottom: -18px;
  width: 1px;
  background: rgba(255, 255, 255, 0.12);
}

.timeline-content p {
  margin: 0;
  padding: 12px 14px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.025);
  border: 1px solid rgba(255, 255, 255, 0.05);
  color: #d0d3e4;
  line-height: 1.65;
}

.mini-cards {
  position: relative;
  z-index: 1;
  display: grid;
  gap: 14px;
}

.mini-card {
  padding: 16px 18px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  color: #d8dcef;
  line-height: 1.6;
  transition:
    transform 0.25s ease,
    border-color 0.25s ease,
    background 0.25s ease;
}

.mini-card:hover {
  transform: translateY(-2px);
  border-color: rgba(109, 93, 246, 0.22);
  background: rgba(255, 255, 255, 0.045);
}

.info-list {
  position: relative;
  z-index: 1;
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 14px;
}

@media (max-width: 900px) {
  .check-grid,
  .steps-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .info-card {
    padding: 22px 18px;
    border-radius: 20px;
  }

  .info-card h2 {
    font-size: 1.08rem;
  }

  .info-desc {
    font-size: 0.92rem;
  }

  .chip,
  .text,
  .step-card p,
  .timeline-content p,
  .mini-card {
    font-size: 0.95rem;
  }

  .check-grid li,
  .info-list li {
    padding: 11px 12px;
    min-height: auto;
  }
}
</style>