<template>
  <MainLayout>
    <RouterView />
    <FloatingContactButtons />
  </MainLayout>
</template>

<script setup>
import MainLayout from "@/layouts/MainLayout.vue";
import FloatingContactButtons from "@/components/ui/Botones/FloatingContactButtons.vue";
</script>