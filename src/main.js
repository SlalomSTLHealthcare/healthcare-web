import Vue from "vue";
import ElementUI from "element-ui";
import Cookies from 'js-cookie';
import "element-ui/lib/theme-chalk/index.css";
import locale from 'element-ui/lib/locale/lang/en'
import Landing from "./Landing.vue";
// import router from "./router";
import store from "./store";
import VeeValidate from 'vee-validate';
import axios from 'axios';

Vue.use(ElementUI, { locale })
Vue.config.productionTip = false;
Vue.use(VeeValidate);
Vue.prototype.$axiosServer = axios.create({
  baseURL: 'https://slalom-health-api.herokuapp.com',
  withCredentials: false,
  headers: {
    'X-CSRFToken': Cookies.get('csrftoken'),
    'Content-Type': 'application/json'
  }
});

// Make Axios play nice with Django CSRF



new Vue({
  // router,
  store,
  render: h => h(Landing)
}).$mount("#app");
