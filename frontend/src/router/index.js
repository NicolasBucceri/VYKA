// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/01-Home.vue";
import Empresa from "@/views/02-Empresa.vue";
import Contacto from "@/views/03-Contacto.vue";
import Proyectos from "@/views/04-Proyectos.vue";
import ProyectoDetalle from "@/views/05-ProyectoDetalle.vue";
import PlanDetalle from "@/views/06-PlanDetalle.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/empresa",
    name: "Empresa",
    component: Empresa
  },
  {
    path: "/contacto",
    name: "Contacto",
    component: Contacto
  },
  {
    path: "/proyectos",
    name: "Proyectos",
    component: Proyectos
  },
  {
    path: "/proyectos/:slug",
    name: "ProyectoDetalle",
    component: ProyectoDetalle,
    props: true
  },
  {
    path: "/planes/:slug",
    name: "PlanDetalle",
    component: PlanDetalle,
    props: true
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/"
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,

  scrollBehavior(to, from, savedPosition) {

    // si el navegador recuerda posición
    if (savedPosition) {
      return savedPosition;
    }

    // si hay hash (#planes, #faq, etc)
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth"
      };
    }

    // comportamiento normal
    return {
      top: 0,
      behavior: "smooth"
    };
  }
});

export default router;