import { createApp } from "vue";
import { createHead } from "@unhead/vue/client";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

// instancia del gestor del <head>
const head = createHead();

app.use(router);
app.use(head);

app.mount("#app");