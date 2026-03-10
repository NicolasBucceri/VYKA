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
import Hero from "@/components/Home/01-Hero.vue";
import Intro from "@/components/Home/02-Intro.vue";
import Metodos from "@/components/Home/03-Metodos.vue";
import Planes from "@/components/Home/04-Planes.vue";
import Faq from "@/components/Home/05-Faq.vue";
import Proyectos from "@/components/Home/06-Proyectos.vue";
import Nosotros from "@/components/Home/07-Nosotros.vue";

import ScrollTopButton from "@/components/ui/Botones/ScrollTopButton.vue";
</script>