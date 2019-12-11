import Vue from 'vue'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/index.scss';
import './assets/scripts/index.js';
import { store } from './store';
import { router } from './router';
import App from './App.vue';
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyDW8td30_gj6sGXjiMU0ALeMu1SDEwUnEA",
    libraries: "places",
  }
});

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
});
