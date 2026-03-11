// src/content/projects.master.js
// Single Source of Truth para proyectos VYKA
// - Assets compilables por Vite
// - Data fuente multilenguaje
// - Helpers de resolución por locale
// - Helpers separados para index / detail / backend

/* =========================================================
   1) CONSTANTES
========================================================= */
const DEFAULT_LOCALE = "es";
const FALLBACK_LOCALE = "es";

/* =========================================================
   2) ASSETS
   Solo rutas estáticas para que Vite procese bien
========================================================= */
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
    portada: new URL("../assets/Proyectos/Fralo/FraloHero.webp", import.meta.url).href,
    hero: [
      new URL("../assets/Proyectos/Fralo/FraloImg1.webp", import.meta.url).href,
      new URL("../assets/Proyectos/Fralo/FraloImg2.webp", import.meta.url).href,
      new URL("../assets/Proyectos/Fralo/FraloImg3.webp", import.meta.url).href,
    ],
    poster: new URL("../assets/Proyectos/Fralo/FraloHero.webp", import.meta.url).href,
  },

  baviera: {
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

/* =========================================================
   3) DATA FUENTE
   Persistible / exportable al backend
========================================================= */
const PROJECTS_RAW = [
  {
    slug: "plego",
    tipo: "desde-cero",
    focus: "18% 22%",
    siteUrl: "https://plegoamoblamientos.com/",
    ui: {
      ctaHrefKey: "siteUrl",
    },

    ficha: {
      anio: "2025",
      entrega: { es: "3 semanas", en: "3 weeks" },
      rol: { es: "UX/UI + Desarrollo", en: "UX/UI + Development" },
      tipo: { es: "Desde cero", en: "From scratch" },
    },

    heroVisual: {
      veil: 0.12,
      overlay: 0.35,
      grade: { brightness: 1.08, contrast: 1.06, saturate: 1.04 },
    },

    translations: {
      es: {
        nombre: "Plego Amoblamientos",
        tag: "Presencia digital",
        resumen: "Sitio web diseñado para mostrar productos y generar consultas directas.",
        ctaLabel: "Ver proyecto",
        hero: {
          subtitulo: "Página creada desde cero para mostrar productos y generar consultas.",
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
        resultados: [
          { valor: "+180%", label: "Consultas", tiempo: "primer trimestre" },
          { valor: "+65%", label: "Tiempo en página", tiempo: "primer mes" },
          { valor: "-40%", label: "Rebote", tiempo: "primer trimestre" },
          { valor: "3x", label: "Conversión", tiempo: "primer semestre" },
        ],
      },

      en: {
        nombre: "Plego Amoblamientos",
        tag: "Digital presence",
        resumen: "Website designed to showcase products and generate direct inquiries.",
        ctaLabel: "View project",
        hero: {
          subtitulo: "Website created from scratch to showcase products and generate inquiries.",
        },
        explicacion: {
          kicker: "EXPLANATION",
          title: "Clear decisions.",
          highlight: "Clean execution.",
          lead: "Architecture designed for catalog browsing, quick reading, and direct contact.",
          bullets: [
            "Clear architecture to display catalog and categories.",
            "Visual hierarchy focused on quick reading and direct inquiries.",
            "Optimized mobile layout without losing aesthetics.",
          ],
        },
        resultados: [
          { valor: "+180%", label: "Inquiries", tiempo: "first quarter" },
          { valor: "+65%", label: "Time on page", tiempo: "first month" },
          { valor: "-40%", label: "Bounce rate", tiempo: "first quarter" },
          { valor: "3x", label: "Conversion", tiempo: "first semester" },
        ],
      },
    },
  },

  {
    slug: "fralo",
    tipo: "rediseño",
    focus: "45% 22%",
    siteUrl: "https://grupofraloconstrucciones.com/",
    ui: {
      ctaHrefKey: "siteUrl",
    },

    ficha: {
      anio: "2025",
      entrega: { es: "2–3 semanas", en: "2–3 weeks" },
      rol: { es: "UX/UI + Desarrollo", en: "UX/UI + Development" },
      tipo: { es: "Renovación / Rediseño", en: "Renewal / Redesign" },
    },

    heroVisual: {
      veil: 0.5,
      overlay: 0.8,
      grade: { brightness: 0.98, contrast: 1.08, saturate: 1.03 },
    },

    translations: {
      es: {
        nombre: "Fralo Construcciones",
        tag: "Sitio corporativo",
        resumen: "Sitio corporativo orientado a confianza, servicios y contacto directo.",
        ctaLabel: "Ver proyecto",
        hero: {
          subtitulo: "Página rediseñada para mejorar claridad, confianza y consultas.",
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
        resultados: [
          { valor: "+90%", label: "Consultas", tiempo: "primer trimestre" },
          { valor: "+38%", label: "Tiempo en página", tiempo: "primer mes" },
          { valor: "-28%", label: "Rebote", tiempo: "primer trimestre" },
          { valor: "+2x", label: "Mensajes directos", tiempo: "primer semestre" },
        ],
      },

      en: {
        nombre: "Fralo Construcciones",
        tag: "Corporate website",
        resumen: "Corporate website focused on trust, services, and direct contact.",
        ctaLabel: "View project",
        hero: {
          subtitulo: "Website redesigned to improve clarity, trust, and inquiries.",
        },
        explicacion: {
          kicker: "EXPLANATION",
          title: "Clear decisions.",
          highlight: "Clean execution.",
          lead: "Trust-oriented redesign: less friction, more inquiries.",
          bullets: [
            "Structural redesign to build trust.",
            "More visible services and direct contact CTA.",
            "Organized sections to reduce friction and doubts.",
          ],
        },
        resultados: [
          { valor: "+90%", label: "Inquiries", tiempo: "first quarter" },
          { valor: "+38%", label: "Time on page", tiempo: "first month" },
          { valor: "-28%", label: "Bounce rate", tiempo: "first quarter" },
          { valor: "+2x", label: "Direct messages", tiempo: "first semester" },
        ],
      },
    },
  },

  {
    slug: "baviera",
    tipo: "desde-cero",
    focus: "55% 30%",
    siteUrl: "https://baviera.netlify.app/",
    ui: {
      ctaHrefKey: "siteUrl",
    },

    ficha: {
      anio: "2025",
      entrega: { es: "3–4 semanas", en: "3–4 weeks" },
      rol: { es: "UX/UI + Desarrollo", en: "UX/UI + Development" },
      tipo: { es: "Desde cero", en: "From scratch" },
    },

    heroVisual: {
      veil: 0.18,
      overlay: 0.4,
      grade: { brightness: 1.1, contrast: 1.05, saturate: 1.02 },
    },

    translations: {
      es: {
        nombre: "Baviera",
        tag: "Identidad de marca",
        resumen: "Construcción de identidad visual y presencia web alineada a posicionamiento.",
        ctaLabel: "Ver proyecto",
        hero: {
          subtitulo: "Página creada desde cero para transmitir solidez y confianza.",
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
        resultados: [
          { valor: "+75%", label: "Consultas", tiempo: "primer trimestre" },
          { valor: "+52%", label: "Interacción", tiempo: "primer mes" },
          { valor: "-22%", label: "Rebote", tiempo: "primer trimestre" },
          { valor: "+2x", label: "Confianza percibida", tiempo: "primer semestre" },
        ],
      },

      en: {
        nombre: "Baviera",
        tag: "Brand identity",
        resumen: "Visual identity and web presence built to support positioning.",
        ctaLabel: "View project",
        hero: {
          subtitulo: "Website created from scratch to convey solidity and trust.",
        },
        explicacion: {
          kicker: "EXPLANATION",
          title: "Clear decisions.",
          highlight: "Clean execution.",
          lead: "Premium visual system focused on credibility and positioning.",
          bullets: [
            "Strong identity + consistent visual system.",
            "Sections designed for credibility and positioning.",
            "Premium design focused on conversion and clarity.",
          ],
        },
        resultados: [
          { valor: "+75%", label: "Inquiries", tiempo: "first quarter" },
          { valor: "+52%", label: "Interaction", tiempo: "first month" },
          { valor: "-22%", label: "Bounce rate", tiempo: "first quarter" },
          { valor: "+2x", label: "Perceived trust", tiempo: "first semester" },
        ],
      },
    },
  },

  {
    slug: "dolce-mattina",
    tipo: "desde-cero",
    focus: "12% 28%",
    siteUrl: "https://dolcemattina.netlify.app/",
    ui: {
      ctaHrefKey: "siteUrl",
    },

    ficha: {
      anio: "2025",
      entrega: { es: "2–3 semanas", en: "2–3 weeks" },
      rol: { es: "UX/UI + Desarrollo", en: "UX/UI + Development" },
      tipo: { es: "Desde cero", en: "From scratch" },
    },

    heroVisual: {
      veil: 0.22,
      overlay: 0.45,
      grade: { brightness: 1.06, contrast: 1.04, saturate: 1.05 },
    },

    translations: {
      es: {
        nombre: "Dolce Mattina",
        tag: "Presencia digital",
        resumen: "Landing page diseñada para transmitir estética y experiencia de marca.",
        ctaLabel: "Ver proyecto",
        hero: {
          subtitulo: "Página creada desde cero con foco en experiencia visual y marca.",
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
        resultados: [
          { valor: "+60%", label: "Tiempo en página", tiempo: "primer mes" },
          { valor: "+45%", label: "Interacción", tiempo: "primer mes" },
          { valor: "-18%", label: "Rebote", tiempo: "primer trimestre" },
          { valor: "+2x", label: "Consultas", tiempo: "primer trimestre" },
        ],
      },

      en: {
        nombre: "Dolce Mattina",
        tag: "Digital presence",
        resumen: "Landing page designed to convey aesthetics and brand experience.",
        ctaLabel: "View project",
        hero: {
          subtitulo: "Website created from scratch with a focus on visual experience and brand.",
        },
        explicacion: {
          kicker: "EXPLANATION",
          title: "Clear decisions.",
          highlight: "Clean execution.",
          lead: "Carefully crafted visual experience to reinforce brand and generate intent.",
          bullets: [
            "Typographic hierarchy for quick reading and aesthetics.",
            "Sections designed as brand storytelling.",
            "Details and micro-interactions for a premium perception.",
          ],
        },
        resultados: [
          { valor: "+60%", label: "Time on page", tiempo: "first month" },
          { valor: "+45%", label: "Interaction", tiempo: "first month" },
          { valor: "-18%", label: "Bounce rate", tiempo: "first quarter" },
          { valor: "+2x", label: "Inquiries", tiempo: "first quarter" },
        ],
      },
    },
  },
];

/* =========================================================
   4) HELPERS BASE
========================================================= */
function pickLocale(locale) {
  return locale || DEFAULT_LOCALE;
}

function getTranslationNode(translations = {}, locale = DEFAULT_LOCALE, fallback = FALLBACK_LOCALE) {
  return translations[locale] || translations[fallback] || {};
}

function resolveI18nField(field, locale = DEFAULT_LOCALE, fallback = FALLBACK_LOCALE) {
  if (field == null) return "";
  if (typeof field !== "object" || Array.isArray(field)) return field;
  return field[locale] ?? field[fallback] ?? "";
}

function getAssetsBySlug(slug) {
  const assets = ASSETS[slug];

  if (!assets) {
    console.warn(`[projects.master] No se encontraron assets para el slug "${slug}"`);
    return {
      portada: "",
      hero: [],
      poster: "",
      video: "",
    };
  }

  return assets;
}

function mergeAssets(project) {
  const assets = getAssetsBySlug(project.slug);

  return {
    ...project,
    imagen: assets.portada || "",
    heroImgs: assets.hero || [],
    media: {
      videoUrl: project.media?.videoUrl || assets.video || "",
      posterUrl: project.media?.posterUrl || assets.poster || assets.portada || "",
    },
  };
}

/* =========================================================
   5) BASE NORMALIZADA
   Data + assets, pero todavía sin resolver locale
========================================================= */
const PROJECTS_BASE = PROJECTS_RAW.map(mergeAssets);

/* =========================================================
   6) RESOLVERS DE UI
========================================================= */
function resolveProjectIndex(project, locale = DEFAULT_LOCALE, fallback = FALLBACK_LOCALE) {
  const t = getTranslationNode(project.translations, locale, fallback);

  return {
    slug: project.slug,
    tipo: project.tipo,
    nombre: t.nombre || "",
    tag: t.tag || "",
    resumen: t.resumen || "",
    ctaLabel: t.ctaLabel || "",
    imagen: project.imagen,
    focus: project.focus || "50% 50%",
    siteUrl: project.siteUrl || "",
  };
}

function resolveProjectDetail(project, locale = DEFAULT_LOCALE, fallback = FALLBACK_LOCALE) {
  const t = getTranslationNode(project.translations, locale, fallback);

  return {
    slug: project.slug,
    tipo: project.tipo,
    focus: project.focus || "50% 50%",
    siteUrl: project.siteUrl || "",
    ui: project.ui || {},

    nombre: t.nombre || "",
    tag: t.tag || "",
    resumen: t.resumen || "",
    ctaLabel: t.ctaLabel || "",

    imagen: project.imagen,
    heroImgs: project.heroImgs || [],
    media: {
      videoUrl: project.media?.videoUrl || "",
      posterUrl: project.media?.posterUrl || "",
    },

    heroSubtitulo: t.hero?.subtitulo || "",

    heroVisual: {
      veil: project.heroVisual?.veil ?? 0,
      overlay: project.heroVisual?.overlay ?? 0,
      grade: project.heroVisual?.grade || {
        brightness: 1,
        contrast: 1,
        saturate: 1,
      },
    },

    explicacion: {
      kicker: t.explicacion?.kicker || "",
      title: t.explicacion?.title || "",
      highlight: t.explicacion?.highlight || "",
      lead: t.explicacion?.lead || "",
      bullets: t.explicacion?.bullets || [],
    },

    resultados: Array.isArray(t.resultados) ? t.resultados : [],

    fichaResolved: {
      anio: project.ficha?.anio || "",
      rol: resolveI18nField(project.ficha?.rol, locale, fallback),
      entrega: resolveI18nField(project.ficha?.entrega, locale, fallback),
      tipo: resolveI18nField(project.ficha?.tipo, locale, fallback),
    },
  };
}

/* =========================================================
   7) API PÚBLICA
========================================================= */

// Base sin resolver idioma, útil si alguna vez querés inspección interna
export function getProjectsRaw() {
  return PROJECTS_BASE;
}

// Para la grilla/listado
export function getProjects(locale = DEFAULT_LOCALE, fallback = FALLBACK_LOCALE) {
  const lang = pickLocale(locale);
  return PROJECTS_BASE.map((project) => resolveProjectIndex(project, lang, fallback));
}

// Alias en español por compatibilidad con tu código actual
export function getProyectos(locale = DEFAULT_LOCALE, fallback = FALLBACK_LOCALE) {
  return getProjects(locale, fallback);
}

// Para detalle completo
export function getProjectBySlug(slug, locale = DEFAULT_LOCALE, fallback = FALLBACK_LOCALE) {
  const lang = pickLocale(locale);
  const project = PROJECTS_BASE.find((item) => item.slug === slug);
  if (!project) return null;
  return resolveProjectDetail(project, lang, fallback);
}

// Alias en español por compatibilidad
export function getProyectoBySlug(slug, locale = DEFAULT_LOCALE, fallback = FALLBACK_LOCALE) {
  return getProjectBySlug(slug, locale, fallback);
}

// Si alguna vez querés solo el detalle ya resuelto de todos
export function getProjectsDetailed(locale = DEFAULT_LOCALE, fallback = FALLBACK_LOCALE) {
  const lang = pickLocale(locale);
  return PROJECTS_BASE.map((project) => resolveProjectDetail(project, lang, fallback));
}

/* =========================================================
   8) EXPORT BACKEND
   Exporta solo data persistible
========================================================= */
export function exportProjectsForBackend() {
  return structuredClone(PROJECTS_RAW);
}

// Alias por compatibilidad con tu nombre actual
export function exportForBackend() {
  return exportProjectsForBackend();
}