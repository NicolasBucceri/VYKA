// src/content/projects.master.js
// Single Source of Truth para Proyectos.
// - Data + assets resueltos (Vite-friendly)
// - Helpers para buscar, listar y exportar limpio al backend

/* -----------------------
   1) Assets centralizados
   (RUTAS ESTÁTICAS para que Vite las procese)
------------------------ */
const ASSETS = {
  plego: {
    portada: new URL("../assets/Proyectos/Plego/PlegoPortada.webp", import.meta.url).href,
    hero: [
      new URL("../assets/Proyectos/Plego/PlegoImg1.webp", import.meta.url).href,
      new URL("../assets/Proyectos/Plego/PlegoImg2.webp", import.meta.url).href,
      new URL("../assets/Proyectos/Plego/PlegoImg3.webp", import.meta.url).href,
    ],
    poster: new URL("../assets/Proyectos/Plego/PlegoHero.webp", import.meta.url).href,
    // video: new URL("../assets/Proyectos/Plego/plego.mp4", import.meta.url).href,
  },

  fralo: {
    // En tu screenshot NO se ve FraloPortada.webp, así que uso Hero como portada
    portada: new URL("../assets/Proyectos/Fralo/FraloHero.webp", import.meta.url).href,
    hero: [
      new URL("../assets/Proyectos/Fralo/FraloImg1.webp", import.meta.url).href,
      new URL("../assets/Proyectos/Fralo/FraloImg2.webp", import.meta.url).href,
      new URL("../assets/Proyectos/Fralo/FraloImg3.webp", import.meta.url).href,
    ],
    poster: new URL("../assets/Proyectos/Fralo/FraloHero.webp", import.meta.url).href,
  },

  baviera: {
    // En tu screenshot NO se ve BavieraPortada.webp, así que uso Hero como portada
    portada: new URL("../assets/Proyectos/Baviera/BavieraHero.webp", import.meta.url).href,
    hero: [
      new URL("../assets/Proyectos/Baviera/BavieraImg1.webp", import.meta.url).href,
      new URL("../assets/Proyectos/Baviera/BavieraImg2.webp", import.meta.url).href,
      new URL("../assets/Proyectos/Baviera/BavieraImg3.webp", import.meta.url).href,
    ],
    poster: new URL("../assets/Proyectos/Baviera/BavieraHero.webp", import.meta.url).href,
  },

  "dolce-mattina": {
    portada: new URL("../assets/Proyectos/DolceMattina/DolceMattinaPortada.webp", import.meta.url).href,
    hero: [
      new URL("../assets/Proyectos/DolceMattina/DolceImg1.webp", import.meta.url).href,
      new URL("../assets/Proyectos/DolceMattina/DolceImg2.webp", import.meta.url).href,
      new URL("../assets/Proyectos/DolceMattina/DolceImg3.webp", import.meta.url).href,
    ],
    poster: new URL("../assets/Proyectos/DolceMattina/DolceMattinaHero.webp", import.meta.url).href,
  },
};

/* -----------------------
   2) Data (sin URLs de assets)
------------------------ */
const DATA = [
  {
    slug: "plego",
    nombre: "Plego Amoblamientos",
    tag: "Presencia digital",
    tipo: "desde-cero",
    focus: "18% 22%",
    resumen: "Sitio web diseñado para mostrar productos y generar consultas directas.",
    ctaLabel: "Ver proyecto",
    siteUrl: "https://plegoamoblamientos.com/",

    ficha: { anio: "2025", rol: "UX/UI + Desarrollo", entrega: "3 semanas", tipo: "Desde cero" },

    hero: {
      subtitulo: "Página creada desde cero para mostrar productos y generar consultas.",
      veil: 0.12,
      overlay: 0.35,
      grade: { brightness: 1.08, contrast: 1.06, saturate: 1.04 },
    },

    explicacion: {
      kicker: "EXPLICACIÓN",
      title: "Decisiones claras.",
      highlight: "Ejecución limpia.",
      lead: "Arquitectura pensada para catálogo, lectura rápida y consulta directa.",
      bullets: [
        "Arquitectura clara para mostrar catálogo y categorías.",
        "Jerarquía visual enfocada en lectura rápida y consulta directa.",
        "Optimización del layout para mobile sin perder estética.",
      ],
    },

    media: {},

    resultados: [
      { valor: "+180%", label: "Consultas", tiempo: "primer trimestre" },
      { valor: "+65%", label: "Tiempo en página", tiempo: "primer mes" },
      { valor: "-40%", label: "Rebote", tiempo: "primer trimestre" },
      { valor: "3x", label: "Conversión", tiempo: "primer semestre" },
    ],
  },

  {
    slug: "fralo",
    nombre: "Fralo Construcciones",
    tag: "Sitio corporativo",
    tipo: "rediseño",
    focus: "45% 22%",
    resumen: "Sitio corporativo orientado a confianza, servicios y contacto directo.",
    ctaLabel: "Ver proyecto",
    siteUrl: "https://grupofraloconstrucciones.com/",

    ficha: { anio: "2025", rol: "UX/UI + Desarrollo", entrega: "2–3 semanas", tipo: "Renovación / Rediseño" },

    hero: {
      subtitulo: "Página rediseñada para mejorar claridad, confianza y consultas.",
      veil: 0.5,
      overlay: 0.8,
      grade: { brightness: 0.98, contrast: 1.08, saturate: 1.03 },
    },

    explicacion: {
      kicker: "EXPLICACIÓN",
      title: "Decisiones claras.",
      highlight: "Ejecución limpia.",
      lead: "Rediseño orientado a confianza: menos fricción, más consultas.",
      bullets: [
        "Rediseño de estructura para transmitir confianza.",
        "Servicios más visibles y CTA directo a contacto.",
        "Secciones ordenadas para reducir fricción y dudas.",
      ],
    },

    media: {},

    resultados: [
      { valor: "+90%", label: "Consultas", tiempo: "primer trimestre" },
      { valor: "+38%", label: "Tiempo en página", tiempo: "primer mes" },
      { valor: "-28%", label: "Rebote", tiempo: "primer trimestre" },
      { valor: "+2x", label: "Mensajes directos", tiempo: "primer semestre" },
    ],
  },

  {
    slug: "baviera",
    nombre: "Baviera",
    tag: "Identidad de marca",
    tipo: "desde-cero",
    focus: "55% 30%",
    resumen: "Construcción de identidad visual y presencia web alineada a posicionamiento.",
    ctaLabel: "Ver proyecto",
    siteUrl: "https://baviera.netlify.app/",

    ficha: { anio: "2025", rol: "UX/UI + Desarrollo", entrega: "3–4 semanas", tipo: "Desde cero" },

    hero: {
      subtitulo: "Página creada desde cero para transmitir solidez y confianza.",
      veil: 0.18,
      overlay: 0.4,
      grade: { brightness: 1.1, contrast: 1.05, saturate: 1.02 },
    },

    explicacion: {
      kicker: "EXPLICACIÓN",
      title: "Decisiones claras.",
      highlight: "Ejecución limpia.",
      lead: "Sistema visual premium con foco en credibilidad y posicionamiento.",
      bullets: [
        "Identidad sólida + sistema visual consistente.",
        "Secciones pensadas para credibilidad y posicionamiento.",
        "Diseño premium con foco en conversión y claridad.",
      ],
    },

    media: {},

    resultados: [
      { valor: "+75%", label: "Consultas", tiempo: "primer trimestre" },
      { valor: "+52%", label: "Interacción", tiempo: "primer mes" },
      { valor: "-22%", label: "Rebote", tiempo: "primer trimestre" },
      { valor: "+2x", label: "Confianza percibida", tiempo: "primer semestre" },
    ],
  },

  {
    slug: "dolce-mattina",
    nombre: "Dolce Mattina",
    tag: "Presencia digital",
    tipo: "desde-cero",
    focus: "12% 28%",
    resumen: "Landing page diseñada para transmitir estética y experiencia de marca.",
    ctaLabel: "Ver proyecto",
    siteUrl: "https://dolcemattina.netlify.app/",

    ficha: { anio: "2025", rol: "UX/UI + Desarrollo", entrega: "2–3 semanas", tipo: "Desde cero" },

    hero: {
      subtitulo: "Página creada desde cero con foco en experiencia visual y marca.",
      veil: 0.22,
      overlay: 0.45,
      grade: { brightness: 1.06, contrast: 1.04, saturate: 1.05 },
    },

    explicacion: {
      kicker: "EXPLICACIÓN",
      title: "Decisiones claras.",
      highlight: "Ejecución limpia.",
      lead: "Experiencia visual cuidada para reforzar marca y generar intención.",
      bullets: [
        "Jerarquía tipográfica para lectura rápida y estética.",
        "Secciones diseñadas como storytelling de marca.",
        "Detalles y micro-interacciones para percepción premium.",
      ],
    },

    media: {},

    resultados: [
      { valor: "+60%", label: "Tiempo en página", tiempo: "primer mes" },
      { valor: "+45%", label: "Interacción", tiempo: "primer mes" },
      { valor: "-18%", label: "Rebote", tiempo: "primer trimestre" },
      { valor: "+2x", label: "Consultas", tiempo: "primer trimestre" },
    ],
  },
];

/* -----------------------
   3) Merge final: DATA + ASSETS
------------------------ */
function mergeProject(p) {
  const a = ASSETS[p.slug];
  if (!a) console.warn(`[projects.master] Faltan assets para slug "${p.slug}"`);

  return {
    ...p,
    imagen: a?.portada || "",
    heroImgs: a?.hero || [],
    media: {
      ...(p.media || {}),
      videoUrl: p.media?.videoUrl || a?.video || "",
      posterUrl: p.media?.posterUrl || a?.poster || a?.portada || "",
    },
  };
}

export const PROYECTOS = DATA.map(mergeProject);

/* -----------------------
   4) Helpers app
------------------------ */
export const getProyectoBySlug = (slug) => PROYECTOS.find((p) => p.slug === slug) || null;
export const getProyectos = () => PROYECTOS;

/* -----------------------
   5) Export backend-ready
------------------------ */
export function exportForBackend() {
  return structuredClone(DATA);
}