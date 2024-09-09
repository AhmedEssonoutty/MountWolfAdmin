import "./assets/main.scss";
import "./assets/media-queries.scss";

import "bootstrap/dist/css/bootstrap.css";

// icon
import VueFeather from "vue-feather";

// toastification
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

// chart
import VueApexCharts from "vue3-apexcharts";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Toast);

// feather
app.component(VueFeather.name, VueFeather);

// charts
app.use(VueApexCharts);

// bootstrap
import "bootstrap";

app.mount("#app");
