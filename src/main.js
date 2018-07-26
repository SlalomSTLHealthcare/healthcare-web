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

Vue.use(ElementUI, { locale })
Vue.config.productionTip = false;
Vue.use(VeeValidate);
Vue.use(Vuex);
Vue.prototype.$axiosServer = axios.create({
  baseURL: 'http://localhost:3000',
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
