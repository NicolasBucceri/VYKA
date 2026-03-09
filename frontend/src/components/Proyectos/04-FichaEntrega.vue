<template>
  <div class="ficha" v-if="items.length" role="list" aria-label="Ficha del proyecto">
    <div
      class="info"
      v-for="(item, idx) in items"
      :key="item.label"
      role="listitem"
    >
      <span class="infoLabel">{{ item.label }}</span>
      <span class="infoValue">{{ item.value }}</span>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  ficha: { type: Object, default: null }, // { anio, rol, entrega, tipo }
});

const items = computed(() => {
  const f = props.ficha;
  if (!f) return [];

  const base = [
    { label: "AÑO", value: f.anio },
    { label: "ROL", value: f.rol },
    { label: "ENTREGA", value: f.entrega },
    { label: "TIPO", value: f.tipo },
  ];

  return base.filter((x) => String(x.value ?? "").trim().length);
});
</script>

<style scoped>
/* =========================
   FICHA — layout tipo “tabla”
========================= */

.ficha{
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  align-items: stretch;

  margin-top: clamp(42px, 6vw, 64px);

  border-top: 1px solid rgba(255,255,255,0.10);
  border-bottom: 1px solid rgba(255,255,255,0.08);

  padding: clamp(18px, 2.6vw, 28px) 0;

  position: relative;
}

.ficha::after{
  content:"";
  position:absolute;
  inset:0;
  pointer-events:none;
  opacity:.55;
  background:
    radial-gradient(900px 260px at 50% 0%, rgba(109,93,246,0.12), transparent 60%),
    radial-gradient(900px 260px at 50% 100%, rgba(45,140,255,0.08), transparent 60%);
}

.info{
  position: relative;
  z-index: 1;

  display:flex;
  flex-direction: column;
  align-items:center;
  justify-content:center;

  text-align:center;
  padding: clamp(16px, 2.2vw, 26px) clamp(10px, 1.8vw, 18px);
  gap: 10px;
}

/* divisores verticales entre columnas */
.info:not(:last-child)::after{
  content:"";
  position:absolute;
  top: 18%;
  bottom: 18%;
  right: 0;
  width: 1px;
  background: linear-gradient(
    180deg,
    transparent,
    rgba(255,255,255,0.12),
    rgba(255,255,255,0.06),
    transparent
  );
  opacity: .9;
}

.infoLabel{
  font-size: 0.72rem;
  letter-spacing: .22em;
  text-transform: uppercase;
  font-weight: 900;
  color: rgba(160, 190, 255, 0.88);
  text-shadow:
    0 0 22px rgba(109,93,246,0.16),
    0 0 22px rgba(45,140,255,0.12);
}

.infoValue{
  font-size: 1.22rem;
  font-weight: 850;
  letter-spacing: -0.01em;
  color: rgba(255,255,255,0.95);
}

/* =========================
   Responsive: 2 columnas
========================= */
@media (max-width: 920px){
  .ficha{
    grid-template-columns: repeat(2, minmax(0, 1fr));
    padding: clamp(14px, 2.4vw, 22px) 0;
  }

  .info::after{ display:none; }

  /* divisor vertical en col 1 (impares) */
  .info:nth-child(odd)::after{
    display:block;
    content:"";
    position:absolute;
    top: 20%;
    bottom: 20%;
    right: 0;
    width: 1px;
    background: linear-gradient(180deg, transparent, rgba(255,255,255,0.12), transparent);
    opacity:.9;
  }

  /* divisor horizontal entre fila 1 y 2 */
  .info:nth-child(-n + 2)::before{
    content:"";
    position:absolute;
    left: 10%;
    right: 10%;
    bottom: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.10), transparent);
    opacity:.9;
  }
}

/* =========================
   Mobile: 1 columna + líneas
========================= */
@media (max-width: 520px){
  .ficha{
    grid-template-columns: 1fr;
  }

  .info:nth-child(odd)::after{ display:none; }

  .info::before{
    content:"";
    position:absolute;
    left: 14%;
    right: 14%;
    bottom: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.10), transparent);
  }

  .info:last-child::before{ display:none; }

  .infoValue{
    font-size: 1.14rem;
  }
}
</style>