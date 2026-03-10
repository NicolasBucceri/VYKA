<template>
  <nav class="navbar navbar-expand-lg custom-navbar fixed-top">
    <div class="container">
      <!-- Logo -->
      <router-link class="navbar-brand" to="/" :aria-label="t('navbar.homeAria')" @click="closeOffcanvas">
        <img src="@/assets/Logo/Logo.svg" alt="VYKA Logo" class="logo" />
      </router-link>

      <!-- Toggle -->
      <button class="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" :aria-label="t('navbar.toggleAria')">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Sidebar -->
      <div class="offcanvas offcanvas-end sidebar" tabindex="-1" id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel">
        <!-- Header -->
        <div class="offcanvas-header border-bottom">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
            <img src="@/assets/Logo/Logo.svg" alt="VYKA Logo" class="logo-sidebar" />
          </h5>

          <button type="button" class="btn-close btn-close-white shadow-none" data-bs-dismiss="offcanvas"
            :aria-label="t('navbar.closeAria')"></button>
        </div>

        <!-- Body -->
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-center align-items-lg-center nav-links w-100">
            <li class="nav-item">
              <router-link class="nav-link" to="/" :class="linkClass('/')" @click="closeOffcanvas">
                {{ t("navbar.inicio") }}
              </router-link>
            </li>

            <!-- ✅ Servicios -> Home + #planes -->
            <li class="nav-item">
              <router-link class="nav-link" :to="{ path: '/', hash: '#planes' }" :class="linkClassServicios()"
                @click="closeOffcanvas">
                {{ t("navbar.servicios") }}
              </router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/proyectos" :class="linkClass('/proyectos')" @click="closeOffcanvas">
                {{ t("navbar.proyectos") }}
              </router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/empresa" :class="linkClass('/empresa')" @click="closeOffcanvas">
                {{ t("navbar.empresa") }}
              </router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/contacto" :class="linkClass('/contacto')" @click="closeOffcanvas">
                {{ t("navbar.contacto") }}
              </router-link>
            </li>
          </ul>

          <!-- Idioma (DESKTOP) -->
          <div class="lang-switch d-none d-lg-flex" role="group" :aria-label="t('navbar.langAria')">
            <i class="fa-solid fa-globe lang-icon" aria-hidden="true"></i>

            <button type="button" class="lang-pill" :class="{ active: lang === 'es' }" @click="setLang('es')">
              ES
            </button>

            <span class="lang-divider">|</span>

            <button type="button" class="lang-pill" :class="{ active: lang === 'en' }" @click="setLang('en')">
              EN
            </button>
          </div>

          <!-- Idioma (MOBILE) -->
          <div class="lang-switch d-lg-none mt-3" role="group" :aria-label="t('navbar.langAria')">
            <i class="fa-solid fa-globe lang-icon" aria-hidden="true"></i>

            <button type="button" class="lang-pill" :class="{ active: lang === 'es' }" @click="setLang('es')">
              ES
            </button>

            <span class="lang-divider">|</span>

            <button type="button" class="lang-pill" :class="{ active: lang === 'en' }" @click="setLang('en')">
              EN
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useLang } from "@/composables/useLang";

const route = useRoute();
const { lang, setLang, t } = useLang();

const currentPath = computed(() => route.path);

const linkClass = (basePath) => {
  const p = currentPath.value;
  const hash = route.hash;

  const isExact = p === basePath;
  const isNested = basePath !== "/" && p.startsWith(basePath + "/");

  // 🔹 Caso especial para Inicio
  if (basePath === "/") {
    return { active: isExact && hash !== "#planes" };
  }

  return { active: isExact || isNested };
};

// ✅ "Servicios" activo cuando estás en Home con #planes
const linkClassServicios = () => {
  const isHome = currentPath.value === "/";
  const isHashPlanes = route.hash === "#planes";
  return { active: isHome && isHashPlanes };
};

// ✅ Cierra el offcanvas en mobile al navegar (UX: no queda abierto como telón)
const closeOffcanvas = () => {
  const el = document.getElementById("offcanvasNavbar");
  if (!el) return;

  const instance = window.bootstrap?.Offcanvas?.getInstance(el);
  instance?.hide();
};
</script>

<style scoped>
/* ===== NAVBAR BASE ===== */
.custom-navbar {
  background: rgba(24, 24, 24, 0.78);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  padding: 14px 0;
  transition: all 0.3s ease;
  z-index: 1000;
}

/* ===== LOGO ===== */
.logo {
  height: 22px;
  object-fit: contain;
  filter: invert(1) brightness(1.15) contrast(1.05);
  opacity: 0.9;
  transition: all 0.3s ease;
}

.logo:hover {
  opacity: 1;
  transform: scale(1.04);
}

.logo-sidebar {
  height: 30px;
  object-fit: contain;
  filter: invert(1) brightness(1.15) contrast(1.05);
  opacity: 0.95;
}

/* ===== LINKS ===== */
.nav-links {
  gap: 18px;
}

.nav-link {
  color: rgba(255, 255, 255, 0.86);
  font-family: var(--font-main);
  font-weight: 600;
  font-size: 1.15rem;
  padding: 10px 12px;
  position: relative;
  transition: 0.25s ease;
  text-decoration: none;
}

/* underline (VYKA) */
.nav-link::after {
  content: "";
  position: absolute;
  left: 12px;
  bottom: 6px;
  width: 0%;
  height: 2px;
  border-radius: 999px;
  background: linear-gradient(90deg, #6d5df6, #2d8cff);
  transition: width 0.25s ease, opacity 0.25s ease;
  opacity: 0.85;
}

.nav-link:hover {
  color: #fff;
}

.nav-link:hover::after {
  width: calc(100% - 24px);
}

/* ACTIVE: más grueso + glow sutil */
.nav-link.active {
  color: rgba(240, 238, 239, 0.98);
  font-weight: 700;
  letter-spacing: -0.01em;
}

.nav-link.active::after {
  width: calc(100% - 24px);
  height: 3px;
  opacity: 1;
  box-shadow: 0 0 18px rgba(109, 93, 246, 0.28);
}

/* ===== TOGGLER ===== */
.navbar-toggler-icon {
  filter: invert(1);
}

/* ===== SIDEBAR ===== */
@media (max-width: 991px) {
  .sidebar {
    background: rgba(0, 0, 0, 0.72);
    backdrop-filter: blur(14px);
    border-left: 1px solid rgba(255, 255, 255, 0.08);
  }

  .nav-links {
    gap: 8px;
  }
}

/* ===== LANG SWITCH ===== */
.lang-switch {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
  margin-left: auto;
}

.lang-icon {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.85);
}

.lang-pill {
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  padding: 2px 6px;
  transition: 0.2s;
}

.lang-pill:hover {
  color: #fff;
}

.lang-pill.active {
  color: #7c6cff;
}

.lang-divider {
  color: rgba(255, 255, 255, 0.4);
}
</style>