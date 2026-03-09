<template>
  <section class="planes" id="planes">
    <div class="planes-inner">
      <!-- HEADER -->
      <header class="planes-header">
        <h2 class="planes-title">
          ¿Qué <span>servicios</span> ofrecemos?
        </h2>
      </header>

      <!-- GRID -->
      <div class="planes-grid">
        <CardPlan
          v-for="plan in planes"
          :key="plan.plan"
          :plan="plan.plan"
          :titulo="plan.titulo"
          :precio="plan.precio"
          :features="plan.features"
          :recomendado="plan.recomendado"
          :video="plan.video"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import CardPlan from "@/components/ui/CardPlan.vue";
import videoPlan from "@/assets/Planes/PlanRecomendado.mp4";

const planes = [
  {
    plan: 1,
    titulo: "Diseño Web Económico",
    precio: 350000,
    features: [
      "Diseño web profesional a medida",
      "Hasta 5 secciones personalizadas",
      "Optimizada para mobile (responsive)",
      "Integración con WhatsApp y redes"
    ],
  },

  {
    plan: 2,
    titulo: "Diseño Web Profesional",
    precio: 550000,
    recomendado: true,
    video: videoPlan,
    features: [
      "Diseño UX/UI profesional a medida",
      "Panel autoadministrable (CMS)",
      "Formularios y generación de consultas",
      "SEO estructural optimizado"
    ],
  },

  {
    plan: 3,
    titulo: "E-commerce Profesional",
    precio: 850000,
    features: [
      "Tienda online autoadministrable",
      "Carrito y checkout optimizado",
      "Pagos y envíos integrados",
      "Gestión de productos y pedidos"
    ],
  },

  {
    plan: 5,
    titulo: "Corporativa & Sistemas a Medida",
    precio: 1800000,
    features: [
      "Desarrollo web y sistema a medida",
      "Panel administrativo personalizado",
      "Gestión de usuarios y permisos",
      "Arquitectura preparada para escalar"
    ],
  },

  {
    plan: 6,
    titulo: "Rediseño y Optimización Web",
    precio: 450000,
    features: [
      "Auditoría completa de la web actual",
      "Rediseño UX/UI moderno",
      "Optimización de velocidad y SEO",
      "Migración segura del contenido"
    ],
  },
];
</script>

<style scoped>
/* =========================
   SECTION
========================= */
.planes {
  position: relative;
  overflow: hidden;
  padding: 90px 0 110px;
  background: #0b0b0f;
}

.planes::before {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    radial-gradient(900px 500px at 0% 100%, rgba(109, 93, 246, 0.2), transparent 60%),
    radial-gradient(900px 500px at 100% 100%, rgba(45, 140, 255, 0.12), transparent 60%);
}

.planes-inner {
  position: relative;
  z-index: 1;
  width: min(1180px, 92%);
  margin: auto;
}

.planes-header {
  margin-bottom: 40px;
}

.planes-title {
  font-size: clamp(2rem, 3vw, 2.25rem);
  color: #fff;
  line-height: 1.1;
}

.planes-title span {
  color: #6d5df6;
}

.planes-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 26px;
}

/* centra la última card si queda sola */
.planes-grid > *:last-child:nth-child(odd) {
  grid-column: span 2;
  justify-self: center;
  width: 50%;
}

@media (max-width: 900px) {
  .planes-grid {
    grid-template-columns: 1fr;
  }
}
</style>