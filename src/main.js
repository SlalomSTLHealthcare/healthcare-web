import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import locale from 'element-ui/lib/locale/lang/en'
// import Landing from "./Landing.vue";
import App from "./App.vue";
import router from "./router";

import store from "./store";
import VeeValidate from "vee-validate";
import Vuex from "vuex";
import axios from "axios";
import { VueMasonryPlugin } from 'vue-masonry';

const config = {
  fieldsBagName: 'validateFields'
}

Vue.use(ElementUI, { locale })
Vue.config.productionTip = false;
Vue.use(VeeValidate, config);
Vue.use(Vuex);
Vue.use(VueMasonryPlugin)
Vue.prototype.$axiosServer = axios.create({
  baseURL: 'https://slalom-health-api.herokuapp.com/',
  withCredentials: false,
  headers: {
    "Content-Type": "application/json"
  }
});
// Make Axios play nice with Django CSRF

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
