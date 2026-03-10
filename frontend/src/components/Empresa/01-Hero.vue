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
      <source src="@/assets/Empresa/Heroempresa.webm" type="video/mp4" />
    </video>

    <!-- Oscurecimiento sutil -->
    <div class="overlay"></div>

    <!-- Scroll indicator minimal -->
    <div class="scroll-indicator">
      <span></span>
    </div>
  </section>
</template>

<style scoped>
.empresa-hero {
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background: #181818;
}

/* Video full */
.hero-video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Overlay mínimo */
.overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(24, 24, 24, 0.2),
    rgba(24, 24, 24, 0.6)
  );
}

/* Scroll indicator elegante */
.scroll-indicator {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
}

.scroll-indicator span {
  display: block;
  width: 2px;
  height: 40px;
  background: linear-gradient(
    to bottom,
    #6D5DF6,
    transparent
  );
  animation: scrollMove 2s infinite;
}

@keyframes scrollMove {
  0% { opacity: 0; transform: translateY(-10px); }
  50% { opacity: 1; }
  100% { opacity: 0; transform: translateY(10px); }
}
</style>