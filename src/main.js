import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import locale from 'element-ui/lib/locale/lang/en'
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VeeValidate from 'vee-validate';
import Vuex from 'vuex'
import axios from 'axios';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(faCoffee)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(ElementUI, { locale })
Vue.config.productionTip = false;
Vue.use(VeeValidate);
Vue.use(Vuex);
Vue.prototype.$axiosServer = axios.create({
  baseURL: 'https://slalom-health-api-staging.herokuapp.com',
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json',
  }
});

// Make Axios play nice with Django CSRF



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
