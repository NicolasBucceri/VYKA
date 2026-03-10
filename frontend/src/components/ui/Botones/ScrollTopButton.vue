<template>
  <button
    v-show="visible"
    class="scroll-top"
    @click="scrollTop"
    aria-label="Volver arriba"
  >
    <i class="fa-solid fa-arrow-up"></i>
  </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const visible = ref(false);

const handleScroll = () => {
  const hero = document.querySelector(".hero");
  if (!hero) return;

  const heroBottom = hero.getBoundingClientRect().bottom;

  visible.value = heroBottom < 0;
};

const scrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.scroll-top {
  position: fixed;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);

  width: 44px;
  height: 44px;

  border-radius: 50%;

  background: rgba(20, 20, 25, 0.85);
  border: 1px solid rgba(255,255,255,0.08);

  color: rgba(255,255,255,0.7);

  backdrop-filter: blur(6px);

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  transition: all .25s ease;

  z-index: 999;
}

/* icon */
.scroll-top i {
  font-size: 14px;
}

/* hover sutil */
.scroll-top:hover {
  color: #fff;
  border-color: rgba(109,93,246,0.5);
  transform: translateX(-50%) translateY(-3px);
}
</style>