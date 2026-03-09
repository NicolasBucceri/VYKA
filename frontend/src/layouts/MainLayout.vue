<template>
  <div class="layout">
    <Navbar />
    <main class="layout__content">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
</script>

<style scoped>
.layout__content { min-height: 100vh; }
</style>