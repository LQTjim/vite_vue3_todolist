import { createApp } from "vue";
import pinia from "./stores/store";
import App from "./App.vue";

// import "./style.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

createApp(App).use(pinia).mount("#app");
