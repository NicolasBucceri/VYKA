<template>
  <div class="faq-item" :class="{ open: isOpen }">
    <button
      class="faq-head"
      type="button"
      :aria-expanded="isOpen"
      @click="$emit('toggle')"
    >
      <span class="head-title">{{ title }}</span>

      <span class="caret" :class="{ open: isOpen }" aria-hidden="true">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path
            d="M6 9l6 6 6-6"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
    </button>

    <!-- panel animado -->
    <div ref="panelRef" class="panel" :style="panelStyle" @transitionend="onEnd">
      <div class="panel-inner">
        <p class="panel-text">{{ content }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, computed, nextTick, onMounted } from "vue";

defineEmits(["toggle"]);

const props = defineProps({
  title: String,
  content: String,
  isOpen: Boolean
});

const panelRef = ref(null);
const height = ref("0px");
const opacity = ref(0);

const panelStyle = computed(() => ({
  height: height.value,
  opacity: opacity.value
}));

onMounted(async () => {
  // Inicial
  if (props.isOpen) {
    await nextTick();
    const el = panelRef.value;
    height.value = `${el.scrollHeight}px`;
    opacity.value = 1;
    // luego lo dejamos en auto para que responda si cambia el contenido
    await nextTick();
    height.value = "auto";
  }
});

watch(
  () => props.isOpen,
  async (open) => {
    const el = panelRef.value;
    if (!el) return;

    // Si estaba auto, lo bajamos a px para poder animar
    if (height.value === "auto") {
      height.value = `${el.scrollHeight}px`;
      await nextTick();
    }

    if (open) {
      // ABRIR
      opacity.value = 1;
      height.value = "0px";
      await nextTick();
      height.value = `${el.scrollHeight}px`;
    } else {
      // CERRAR
      opacity.value = 0;
      height.value = `${el.scrollHeight}px`;
      await nextTick();
      height.value = "0px";
    }
  }
);

function onEnd(e) {
  // Al terminar de abrir, dejamos height auto
  if (e.propertyName === "height" && props.isOpen) {
    height.value = "auto";
  }
}
</script>

<style scoped>
.faq-item {
  border-radius: 14px;
  border: 1px solid rgba(45,140,255,0.18);
  background: rgba(10,10,14,0.55);
  backdrop-filter: blur(10px);
  overflow: hidden;
  transition: 0.25s ease;
}

.faq-item.open {
  border-color: rgba(109,93,246,0.65);
  box-shadow: 0 0 22px rgba(109,93,246,0.18);
}

.faq-head {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 18px;
  background: transparent;
  border: none;

  cursor: pointer;
  color: rgba(255,255,255,0.92);
}

.head-title {
  font-size: 16px;
  font-weight: 600;
  text-align: left;
}

.caret {
  width: 34px;
  height: 34px;
  border-radius: 999px;
  display: grid;
  place-items: center;
  color: rgba(255,255,255,0.75);
  transition: transform 0.25s ease;
}

.caret.open {
  transform: rotate(180deg);
}

/* panel animado */
.panel {
  overflow: hidden;
  height: 0;
  opacity: 0;

  transition:
    height 320ms cubic-bezier(0.2, 0.8, 0.2, 1),
    opacity 220ms ease;
}

.panel-inner {
  padding: 0 18px 18px;
}

.panel-text {
  margin: 0;
  color: rgba(255,255,255,0.68);
  font-size: 14px;
  line-height: 1.6;
}
</style>