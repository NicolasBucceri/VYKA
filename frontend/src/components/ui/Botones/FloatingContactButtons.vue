<template>
  <div class="contact-float">
    <a href="https://www.instagram.com/vyka.studios" target="_blank" rel="noopener noreferrer" class="btn-float instagram"
      aria-label="Instagram">
      <span class="btn-ring"></span>
      <span class="btn-glow"></span>
      <i class="fa-brands fa-instagram"></i>
    </a>

    <a href="https://wa.me/5491126154277" target="_blank" rel="noopener noreferrer" class="btn-float whatsapp"
      aria-label="WhatsApp">
      <span class="btn-ring"></span>
      <span class="btn-glow"></span>
      <i class="fa-brands fa-whatsapp"></i>
    </a>
  </div>
</template>

<script setup>
</script>

<style scoped>
.contact-float {
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 9999;

  display: flex;
  flex-direction: column;
  gap: 14px;
}

.btn-float {
  --accent: rgba(109, 93, 246, 0.7);
  --accent-soft: rgba(45, 140, 255, 0.45);

  position: relative;
  width: 62px;
  height: 62px;
  border-radius: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;
  overflow: visible;
  isolation: isolate;

  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0.015)),
    rgba(12, 12, 17, 0.76);

  border: 1px solid rgba(255, 255, 255, 0.08);

  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);

  box-shadow:
    0 16px 38px rgba(0, 0, 0, 0.34),
    inset 0 1px 0 rgba(255, 255, 255, 0.06);

  transition:
    transform 0.32s ease,
    box-shadow 0.32s ease,
    border-color 0.32s ease,
    background 0.32s ease;
}

.btn-float i {
  position: relative;
  z-index: 3;
  font-size: 1.4rem;
  color: rgba(255, 255, 255, 0.94);
  transition:
    transform 0.32s ease,
    color 0.32s ease,
    opacity 0.32s ease;
}

.btn-ring {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1px;
  z-index: 1;

  background:
    linear-gradient(145deg,
      rgba(255, 255, 255, 0.14),
      rgba(255, 255, 255, 0.02) 35%,
      rgba(109, 93, 246, 0.22) 65%,
      rgba(45, 140, 255, 0.18));

  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;

  opacity: 0.95;
  pointer-events: none;
}

.btn-glow {
  position: absolute;
  inset: -8px;
  z-index: 0;
  border-radius: 26px;
  opacity: 0.55;
  filter: blur(18px);

  background:
    radial-gradient(circle at 30% 30%, var(--accent), transparent 42%),
    radial-gradient(circle at 70% 70%, var(--accent-soft), transparent 50%);
  transition: opacity 0.32s ease, transform 0.32s ease;
}

.btn-tooltip {
  position: absolute;
  right: calc(100% + 14px);
  top: 50%;
  transform: translateY(-50%) translateX(6px);

  padding: 8px 12px;
  border-radius: 12px;

  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  white-space: nowrap;

  color: rgba(255, 255, 255, 0.92);
  background: rgba(12, 12, 17, 0.88);
  border: 1px solid rgba(255, 255, 255, 0.08);

  box-shadow:
    0 10px 24px rgba(0, 0, 0, 0.28),
    inset 0 1px 0 rgba(255, 255, 255, 0.04);

  opacity: 0;
  visibility: hidden;
  pointer-events: none;

  transition:
    opacity 0.25s ease,
    transform 0.25s ease,
    visibility 0.25s ease;
}

.instagram {
  --accent: rgba(214, 69, 180, 0.62);
  --accent-soft: rgba(255, 140, 66, 0.40);
}

.whatsapp {
  --accent: rgba(37, 211, 102, 0.45);
  --accent-soft: rgba(109, 93, 246, 0.22);
}

.btn-float::after {
  content: "";
  position: absolute;
  inset: 1px;
  border-radius: 19px;
  z-index: 2;
  pointer-events: none;

  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.045), rgba(255, 255, 255, 0.008));
}

.btn-float:hover {
  transform: translateY(-5px) scale(1.03);
  border-color: rgba(255, 255, 255, 0.14);
  box-shadow:
    0 24px 52px rgba(0, 0, 0, 0.42),
    0 0 24px rgba(109, 93, 246, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);
}

.btn-float:hover i {
  transform: scale(1.08);
}

.btn-float:hover .btn-glow {
  opacity: 0.82;
  transform: scale(1.04);
}

.btn-float:hover .btn-tooltip {
  opacity: 1;
  visibility: visible;
  transform: translateY(-50%) translateX(0);
}

.btn-float:active {
  transform: translateY(-1px) scale(0.985);
}

.btn-float:focus-visible {
  outline: none;
  box-shadow:
    0 0 0 3px rgba(109, 93, 246, 0.18),
    0 18px 40px rgba(0, 0, 0, 0.35);
}

@media (max-width: 768px) {
  .contact-float {
    right: 14px;
    bottom: 14px;
    gap: 10px;
  }

  .btn-float {
    width: 56px;
    height: 56px;
    border-radius: 18px;
  }

  .btn-float::after {
    border-radius: 17px;
  }

  .btn-float i {
    font-size: 1.24rem;
  }

  .btn-tooltip {
    display: none;
  }
}
</style>