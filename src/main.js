import Vue from 'vue'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/index.scss';
import './assets/scripts/index.js';
import {
  store
} from './store';
import {
  router
} from './router';
import App from './App.vue';
import * as VueGoogleMaps from "vue2-google-maps";
import * as rules from 'vee-validate/dist/rules';
import {
  ValidationObserver,
  ValidationProvider,
  extend,
  localize
} from 'vee-validate';
import es from 'vee-validate/dist/locale/es.json';
import Toasted from 'vue-toasted';
import {
  API_KEY_MAPS
} from "./util/constant";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});

localize('es', es);
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);
library.add(faUserSecret)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueGoogleMaps, {
  load : {
    key: API_KEY_MAPS,
    libraries: ['places'],
  }
});
Vue.use(Toasted);
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
});
