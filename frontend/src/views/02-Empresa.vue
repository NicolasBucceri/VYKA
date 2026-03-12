<template>
  <main class="empresa-page">
    <Hero />
    <Historia />
    <LineaSeparador />
    <Equipo />
  </main>
</template>

<script setup>
import { useHead } from "@unhead/vue";

import Hero from "@/components/Empresa/01-Hero.vue";
import Historia from "@/components/Empresa/02-Historia.vue";
import Equipo from "@/components/Empresa/03-Equipo.vue";
import LineaSeparador from "@/components/ui/LineaSeparador.vue";

useHead({
  title: "Empresa | VYKA Studio",
  meta: [
    {
      name: "description",
      content:
        "Conocé más sobre VYKA Studio, nuestro enfoque, historia y equipo. Diseñamos y desarrollamos experiencias digitales modernas para marcas y empresas."
    },
    {
      name: "robots",
      content:
        "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"
    },

    // Open Graph
    {
      property: "og:type",
      content: "website"
    },
    {
      property: "og:locale",
      content: "es_AR"
    },
    {
      property: "og:site_name",
      content: "VYKA Studio"
    },
    {
      property: "og:title",
      content: "Empresa | VYKA Studio"
    },
    {
      property: "og:description",
      content:
        "Descubrí la historia, el enfoque y el equipo detrás de VYKA Studio."
    },
    {
      property: "og:url",
      content: "https://vyka-studios.netlify.app/empresa"
    },
    {
      property: "og:image",
      content: "https://vyka-studios.netlify.app/og-image.jpg"
    },
    {
      property: "og:image:alt",
      content: "VYKA Studio - Empresa, historia y equipo"
    },

    // Twitter
    {
      name: "twitter:card",
      content: "summary_large_image"
    },
    {
      name: "twitter:title",
      content: "Empresa | VYKA Studio"
    },
    {
      name: "twitter:description",
      content:
        "Historia, enfoque y equipo de VYKA Studio."
    },
    {
      name: "twitter:image",
      content: "https://vyka-studios.netlify.app/og-image.jpg"
    }
  ],
  link: [
    {
      rel: "canonical",
      href: "https://vyka-studios.netlify.app/empresa"
    }
  ]
});
</script>

<style scoped>
.empresa-page {
  background: #181818;
  color: #f0eeef;
  min-height: 100vh;
}
</style>