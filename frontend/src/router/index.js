// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/01-Home.vue";
import Empresa from "@/views/02-Empresa.vue";
import Contacto from "@/views/03-Contacto.vue";
import Proyectos from "@/views/04-Proyectos.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/empresa", name: "Empresa", component: Empresa },
  { path: "/contacto", name: "Contacto", component: Contacto },
  { path: "/proyectos", name: "Proyectos", component: Proyectos },
  {
    path: "/proyectos/:slug",
    name: "ProyectoDetalle",
    component: () => import("@/views/05-ProyectoDetalle.vue"),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,

  scrollBehavior(to) {
    // ✅ si viene con hash (#planes)
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
        top: 90, // ajustá según tu navbar (80-110)
      };
    }

    // ✅ default
    return { top: 0, behavior: "smooth" };
  },
});

export default router;