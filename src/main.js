import { createApp } from "vue";
import App from "./App.vue";

import "./styles/custom.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap";
import router from "./router";

createApp(App).use(router).mount("#app");
