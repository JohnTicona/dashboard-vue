import { createApp } from "vue";
import App from "./App.vue";

import "../public/scss/custom.css";
import "bootstrap";
import router from "./router";

createApp(App).use(router).mount("#app");
