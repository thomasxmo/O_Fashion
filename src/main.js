import { createApp } from "vue";
// import Vuex from "vuex";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./scss/main.scss";
/* import the bootstrap */
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
/* import the normalize css */
import "normalize.css";
/* import the fontawesome core */
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
/* import AOSjs */
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
/* import wowjs*/
import 'wowjs/css/libs/animate.css'
import 'animate.css'
// import Splide
import VueSplide from '@splidejs/vue-splide';

createApp(App).use(store).use(router).use( VueSplide ).mount("#app");
