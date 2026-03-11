<template>
  <section class="empresa-hero">
    <video
      class="hero-video"
      autoplay
      muted
      loop
      playsinline
      preload="auto"
    >
      <source src="@/assets/Empresa/Heroempresa.webm" type="video/webm" />
    </video>

    <div class="overlay"></div>

    <div class="scroll-indicator" aria-hidden="true">
      <span></span>
    </div>
  </section>
</template>

<style scoped>
.empresa-hero {
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 100svh;
  overflow: hidden;
  background: #181818;
}

.hero-video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* cambiá a contain si querés mostrarlo entero */
  object-position: center;
}

.overlay {
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(
    180deg,
    rgba(24, 24, 24, 0.18) 0%,
    rgba(24, 24, 24, 0.32) 45%,
    rgba(24, 24, 24, 0.62) 100%
  );
}

.scroll-indicator {
  position: absolute;
  left: 50%;
  bottom: 40px;
  transform: translateX(-50%);
  z-index: 2;
}

.scroll-indicator span {
  display: block;
  width: 2px;
  height: 40px;
  border-radius: 999px;
  background: linear-gradient(to bottom, #6d5df6, transparent);
  animation: scrollMove 2s infinite;
}

@keyframes scrollMove {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(10px);
  }
}

@media (max-width: 768px) {
  .empresa-hero {
    height: 100svh;
    min-height: 100svh;
  }

  .hero-video {
    object-position: center 35%;
  }

  .scroll-indicator {
    display: none;
  }
}
</style>