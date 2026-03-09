<template>
  <main class="empresa-page">
    <Hero />
    <Historia />
    <LineaSeparador />
    <Equipo />
  </main>
</template>

<script setup>
import Hero from "@/components/Empresa/01-Hero.vue";
import Historia from "@/components/Empresa/02-Historia.vue";
import Equipo from "@/components/Empresa/03-Equipo.vue";
import LineaSeparador from "@/components/ui/LineaSeparador.vue";
</script>

<style scoped>
.empresa-page{
  background:#181818;
  color:#f0eeef;
  min-height: 100vh;
}
</style>