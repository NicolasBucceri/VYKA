<template>
  <Hero />
  <Intro />
  <Metodos />
  <Planes />
  <Faq />
  <Proyectos />
  <Nosotros />

  <ScrollTopButton />
</template>

<script setup>
import { useHead } from "@unhead/vue";

import Hero from "@/components/Home/01-Hero.vue";
import Intro from "@/components/Home/02-Intro.vue";
import Metodos from "@/components/Home/03-Metodos.vue";
import Planes from "@/components/Home/04-Planes.vue";
import Faq from "@/components/Home/05-Faq.vue";
import Proyectos from "@/components/Home/06-Proyectos.vue";
import Nosotros from "@/components/Home/07-Nosotros.vue";

import ScrollTopButton from "@/components/ui/Botones/ScrollTopButton.vue";

useHead({
  title: "VYKA Studio | Diseño Web, Desarrollo Web y UX/UI",
  meta: [
    {
      name: "description",
      content:
        "VYKA Studio diseña y desarrolla sitios web modernos, estratégicos y optimizados para marcas y empresas que buscan una presencia digital sólida y resultados reales."
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
      content: "VYKA Studio | Diseño Web, Desarrollo Web y UX/UI"
    },
    {
      property: "og:description",
      content:
        "Diseñamos y desarrollamos experiencias digitales modernas, elegantes y optimizadas para resultados reales."
    },
    {
      property: "og:url",
      content: "https://vyka-studios.netlify.app/"
    },
    {
      property: "og:image",
      content: "https://vyka-studios.netlify.app/og-image.jpg"
    },
    {
      property: "og:image:alt",
      content: "VYKA Studio - Diseño y desarrollo web"
    },

    // Twitter
    {
      name: "twitter:card",
      content: "summary_large_image"
    },
    {
      name: "twitter:title",
      content: "VYKA Studio | Diseño Web, Desarrollo Web y UX/UI"
    },
    {
      name: "twitter:description",
      content:
        "Sitios web modernos, estratégicos y optimizados para potenciar marcas y empresas."
    },
    {
      name: "twitter:image",
      content: "https://vyka-studios.netlify.app/og-image.jpg"
    }
  ],
  link: [
    {
      rel: "canonical",
      href: "https://vyka-studios.netlify.app/"
    }
  ]
});
</script>