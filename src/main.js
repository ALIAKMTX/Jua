import "./assets/base.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import("preline");

const app = createApp(App);

app.use(router);

app.mount("#app");
