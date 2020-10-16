import Vue from "vue";
import App from "./App.vue";
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import router from "./router";
import "ress";

Vue.config.productionTip = false;

Vue.use(VueAwesomeSwiper);

new Vue({ router, render: (h) => h(App) }).$mount("#app");
