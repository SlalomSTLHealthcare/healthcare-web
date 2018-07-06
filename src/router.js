import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import People from "./views/People.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/events",
      name: "events",
      component: About
    },
    {
      path: "/people",
      name: "people",
      component: People
    }
  ]
});
