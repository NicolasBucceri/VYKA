<template>
  <component
    :is="tag"
    :href="isLink ? href : undefined"
    :type="!isLink ? type : undefined"
    class="vyka-btn vyka-btn--primary"
    :class="[`vyka-btn--${size}`, { 'vyka-btn--full': fullWidth }]"
    v-bind="$attrs"
  >
    <span class="vyka-btn__label">
      <slot />
    </span>

    <span v-if="icon" class="vyka-btn__icon" aria-hidden="true">
      {{ icon }}
    </span>
  </component>
</template>

<script setup>
import { computed } from "vue";

defineOptions({ inheritAttrs: false });

const props = defineProps({
  href: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "button",
  },
  size: {
    type: String,
    default: "md", // sm | md | lg
    validator: (v) => ["sm", "md", "lg"].includes(v),
  },
  icon: {
    type: String,
    default: "",
  },
  fullWidth: {
    type: Boolean,
    default: false,
  },
});

const isLink = computed(() => !!props.href);
const tag = computed(() => (props.href ? "a" : "button"));
</script>

<style scoped>
.vyka-btn {
  --btn-h: 46px;
  --btn-px: 18px;
  --btn-radius: 12px;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: var(--btn-h);
  padding: 0 var(--btn-px);
  border-radius: var(--btn-radius);
  text-decoration: none;
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
  font-size: 0.95rem;
  font-weight: 500;
  line-height: 1;
  transition:
    transform 160ms ease,
    border-color 160ms ease,
    background 160ms ease,
    box-shadow 160ms ease,
    color 160ms ease;
}

.vyka-btn:focus-visible {
  outline: 2px solid rgba(45, 140, 255, 0.5);
  outline-offset: 3px;
}

.vyka-btn--primary {
  background: linear-gradient(
    135deg,
    rgba(45, 140, 255, 0.35),
    rgba(109, 93, 246, 0.22)
  );
  border: 1px solid rgba(45, 140, 255, 0.35);
  color: #e0eeef;
  box-shadow: 0 18px 60px rgba(0, 0, 0, 0.45);
}

.vyka-btn--primary:hover {
  transform: translateY(-1px);
  border-color: rgba(45, 140, 255, 0.55);
  background: linear-gradient(
    135deg,
    rgba(45, 140, 255, 0.45),
    rgba(109, 93, 246, 0.26)
  );
}

.vyka-btn--primary:active {
  transform: translateY(0);
}

.vyka-btn__label {
  display: inline-flex;
  align-items: center;
}

.vyka-btn__icon {
  opacity: 0.95;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.vyka-btn--sm {
  --btn-h: 40px;
  --btn-px: 14px;
  font-size: 0.88rem;
}

.vyka-btn--md {
  --btn-h: 46px;
  --btn-px: 18px;
  font-size: 0.95rem;
}

.vyka-btn--lg {
  --btn-h: 52px;
  --btn-px: 22px;
  font-size: 1rem;
}

.vyka-btn--full {
  width: 100%;
}
</style>