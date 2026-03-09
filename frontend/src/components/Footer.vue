<!-- src/components/FooterVyka.vue -->
<template>
  <footer class="vyka-footer" aria-label="Footer Vyka">
    <div class="wrap">
      <!-- Top -->
      <div class="top">
        <!-- Brand -->
        <div class="brand">
          <router-link class="logo" to="/" aria-label="Ir al inicio">
            <img src="@/assets/Logo/Logo.svg" alt="VYKA Logo" class="logoImg" />
          </router-link>

          <p class="desc">
            Diseñamos y desarrollamos productos digitales con foco en UX/UI, performance y estética premium.
          </p>

          <div class="chips" aria-label="Diferenciales">
            <span class="chip"><i class="fa-solid fa-wand-magic-sparkles" aria-hidden="true"></i> UX/UI</span>
            <span class="chip"><i class="fa-solid fa-bolt" aria-hidden="true"></i> Performance</span>
            <span class="chip"><i class="fa-solid fa-code" aria-hidden="true"></i> Full-Stack</span>
          </div>
        </div>

        <!-- Columns -->
        <nav class="col" aria-label="Secciones">
          <h4 class="title">Secciones</h4>
          <ul class="list">
            <li><a class="link" href="#servicios"><i class="fa-solid fa-layer-group"></i> Servicios</a></li>
            <li><a class="link" href="#metodo"><i class="fa-solid fa-diagram-project"></i> Método</a></li>
            <li><a class="link" href="#proyectos"><i class="fa-solid fa-briefcase"></i> Proyectos</a></li>
            <li><a class="link" href="#contacto"><i class="fa-solid fa-envelope"></i> Contacto</a></li>
          </ul>
        </nav>

        <nav class="col" aria-label="Recursos">
          <h4 class="title">Recursos</h4>
          <ul class="list">
            <li><a class="link" href="#planes"><i class="fa-solid fa-tags"></i> Planes</a></li>
            <li><a class="link" href="#faq"><i class="fa-solid fa-circle-question"></i> FAQ</a></li>
          </ul>
        </nav>

        <!-- Contact + Social -->
        <div class="contact">
          <h4 class="title">Hablemos</h4>

          <a class="contactCard" :href="waLink" target="_blank" rel="noopener">
            <div class="icon">
              <i class="fa-brands fa-whatsapp" aria-hidden="true"></i>
            </div>
            <div class="meta">
              <span class="label">WhatsApp</span>
              <span class="value">{{ waText }}</span>
            </div>
            <i class="fa-solid fa-arrow-right arrow" aria-hidden="true"></i>
          </a>

          <a class="contactCard" :href="`mailto:${email}`">
            <div class="icon">
              <i class="fa-solid fa-envelope" aria-hidden="true"></i>
            </div>
            <div class="meta">
              <span class="label">Email</span>
              <span class="value">{{ email }}</span>
            </div>
            <i class="fa-solid fa-arrow-right arrow" aria-hidden="true"></i>
          </a>

          <!-- Social centrado y alineado con las cards -->
          <div class="socialWrap" aria-label="Redes">
            <div class="social">
              <a class="socialBtn" href="#" aria-label="Instagram">
                <i class="fa-brands fa-instagram"></i>
              </a>

              <a class="socialBtn" href="#" aria-label="Facebook">
                <i class="fa-brands fa-facebook-f"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Divider -->
      <div class="divider" aria-hidden="true"></div>

      <!-- Bottom -->
      <div class="bottom">
        <p class="copy">
          © {{ year }} VYKA Studio. Todos los derechos reservados.
        </p>

        <!-- ✅ ahora texto, no links -->
        <p class="legalText" aria-label="Legal">
          Privacidad • Términos
        </p>
      </div>
    </div>

    <!-- subtle background -->
    <span class="bgGlow g1" aria-hidden="true"></span>
    <span class="bgGlow g2" aria-hidden="true"></span>
    <span class="bgGlow g3" aria-hidden="true"></span>
    <div class="grid" aria-hidden="true"></div>
  </footer>
</template>

<script setup>
import { computed } from "vue";

const year = new Date().getFullYear();

// Cambiá por tus datos reales
const email = "hola@vyka.studio";
const waText = "+54 11 0000-0000";

const waLink = computed(() => {
  const phone = "541100000000"; // sin +, sin espacios
  const msg = encodeURIComponent("Hola! Quiero cotizar una web con diseño UX/UI.");
  return `https://wa.me/${phone}?text=${msg}`;
});
</script>

<style scoped>
/* VYKA Footer — Dark premium con tu paleta (#181818 + violeta/azul) */
.vyka-footer{
  --bg: #181818;
  --panel: rgba(240,238,239,0.04);
  --panel2: rgba(240,238,239,0.06);

  --text: rgba(240,238,239,0.94);
  --muted: rgba(180,180,180,0.92);

  --accent: #6D5DF6;
  --accent2:#2D8CFF;

  --r: 18px;
  --r2: 22px;

  position: relative;
  background: var(--bg);
  color: var(--text);
  overflow: hidden;
  padding: clamp(44px, 5vw, 64px) 0 22px;
  border-top: 1px solid rgba(240,238,239,0.06);
}

.wrap{
  width: min(1200px, 92%);
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

.top{
  display: grid;
  grid-template-columns: 1.2fr 0.7fr 0.7fr 1fr;
  gap: clamp(18px, 3vw, 34px);
  align-items: start;
}

/* BRAND */
.brand .logo{
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
}
.logoImg{
  height: 24px;
  width: auto;
  object-fit: contain;
  filter: invert(1) brightness(1.15) contrast(1.05);
  opacity: 0.95;
  transition: transform .18s ease, opacity .18s ease;
}
.brand .logo:hover .logoImg{
  opacity: 1;
  transform: translateY(-1px);
}

.desc{
  margin: 12px 0 14px;
  color: rgba(240,238,239,0.80);
  line-height: 1.55;
  max-width: 52ch;
}

.chips{
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.chip{
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 12px;
  border-radius: 999px;
  border: 1px solid rgba(240,238,239,0.10);
  background: rgba(0,0,0,0.14);
  color: rgba(240,238,239,0.78);
  font-size: 12px;
  backdrop-filter: blur(10px);
}
.chip i{ opacity: 0.9; }

/* COLS */
.title{
  margin: 4px 0 12px;
  font-size: 12px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(180,180,180,0.95);
}
.list{
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 10px;
}

.link{
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: rgba(180,180,180,0.92);
  padding: 8px 10px;
  border-radius: 14px;
  transition: transform .18s ease, background .18s ease, color .18s ease;
  position: relative;
}
.link i{
  opacity: 0.85;
  color: rgba(240,238,239,0.72);
}

.link:hover{
  color: rgba(240,238,239,0.95);
  background: rgba(240,238,239,0.05);
  transform: translateX(2px);
}

/* underline gradient sutil */
.link::after{
  content:"";
  position:absolute;
  left: 10px;
  bottom: 6px;
  width: 0%;
  height: 2px;
  border-radius: 999px;
  background: linear-gradient(90deg, var(--accent), var(--accent2));
  opacity: 0.85;
  transition: width .22s ease;
}
.link:hover::after{
  width: calc(100% - 20px);
}

/* CONTACT */
.contact{
  display: grid;
  gap: 10px;
}
.contactCard{
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 12px;
  border-radius: var(--r2);
  background: linear-gradient(180deg, var(--panel2), var(--panel));
  border: 1px solid rgba(240,238,239,0.10);
  text-decoration: none;
  color: var(--text);
  transition: transform .18s ease, border-color .18s ease, background .18s ease, box-shadow .18s ease;
  box-shadow: 0 0 0 1px rgba(240,238,239,0.03) inset;
}
.contactCard:hover{
  transform: translateY(-2px);
  border-color: rgba(240,238,239,0.16);
  background: rgba(240,238,239,0.06);
  box-shadow:
    0 0 0 1px rgba(240,238,239,0.04) inset,
    0 26px 90px rgba(0,0,0,0.55);
}

.icon{
  width: 42px;
  height: 42px;
  border-radius: 16px;
  display: grid;
  place-items: center;
  background: rgba(0,0,0,0.16);
  border: 1px solid rgba(240,238,239,0.10);
  backdrop-filter: blur(10px);
}

.icon i{
  font-size: 18px;
  background: linear-gradient(90deg, var(--accent), var(--accent2));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.meta{
  display: grid;
  line-height: 1.15;
}
.label{
  font-size: 12px;
  color: rgba(180,180,180,0.92);
}
.value{
  font-weight: 800;
  font-size: 13px;
  color: rgba(240,238,239,0.92);
}
.arrow{
  margin-left: auto;
  color: rgba(180,180,180,0.70);
}

/* SOCIAL — centrado y con ancho alineado a cards */
.socialWrap{
  width: 100%;
  display: flex;
  justify-content: center; /* ✅ centrado */
  margin-top: 6px;
}

.social{
  width: 100%;
  max-width: 520px;        /* ✅ parecido al “ancho visual” de tus cards */
  display: flex;
  justify-content: center; /* ✅ centrado */
  gap: 10px;
}

.socialBtn{
  width: 42px;
  height: 42px;
  border-radius: 16px;
  display: grid;
  place-items: center;

  border: 1px solid rgba(240,238,239,0.10);
  background: rgba(0,0,0,0.14);
  color: rgba(240,238,239,0.86);
  text-decoration: none;

  transition: transform .18s ease, background .18s ease, border-color .18s ease, box-shadow .18s ease;
}
.socialBtn:hover{
  transform: translateY(-2px);
  background: rgba(240,238,239,0.06);
  border-color: rgba(240,238,239,0.16);
  box-shadow: 0 18px 60px rgba(0,0,0,0.45);
}

/* DIVIDER + BOTTOM */
.divider{
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(240,238,239,0.12), transparent);
  margin: 28px 0 16px;
}

.bottom{
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
}
.copy{
  margin: 0;
  color: rgba(180,180,180,0.92);
  font-size: 13px;
}
.legalText{
  margin: 0;
  color: rgba(180,180,180,0.92);
  font-size: 13px;
}

/* BACKGROUND FX */
.bgGlow{
  position: absolute;
  border-radius: 999px;
  filter: blur(44px);
  opacity: 0.45;
  pointer-events: none;
  z-index: 1;
}
.g1{
  width: 380px; height: 380px;
  background: rgba(109,93,246,0.30);
  top: -190px; left: -160px;
}
.g2{
  width: 420px; height: 420px;
  background: rgba(45,140,255,0.22);
  bottom: -240px; right: -200px;
}
.g3{
  width: 280px; height: 280px;
  background: rgba(109,93,246,0.18);
  bottom: -140px; left: 20%;
}

/* grid overlay */
.grid{
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0.18;
  z-index: 1;
  background:
    linear-gradient(to right, rgba(240,238,239,0.08) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(240,238,239,0.08) 1px, transparent 1px);
  background-size: 46px 46px;
  mask-image: radial-gradient(900px 520px at 50% 0%, rgba(0,0,0,0.9), transparent 72%);
}

/* RESPONSIVE */
@media (max-width: 980px){
  .top{ grid-template-columns: 1fr 1fr; }
}
@media (max-width: 560px){
  .top{ grid-template-columns: 1fr; }
  .divider{ margin: 22px 0 14px; }
}
</style>