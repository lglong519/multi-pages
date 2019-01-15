import Vue from "vue";
import App from "@/App.vue";
import "@/registerServiceWorker";
import "normalize.css/normalize.css";
import "@/styles/common.scss";
import "font-awesome/css/font-awesome.min.css";
import singleRouter from "@/utils/singleRouter";
import plugin from "@/plugin/index";

Vue.config.productionTip = false;

Vue.use(plugin);
new Vue({
  router: singleRouter("full", () => import("./index.vue")),
  render: h => h(App, { props: { title: "完本小说" } }),
}).$mount("#app");
