import Vue from 'vue'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/index.scss';
import './assets/scripts/index.js';
import { store } from './store';
import { router } from './router';
import App from './App.vue'

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
});
