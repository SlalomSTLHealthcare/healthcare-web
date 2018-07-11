import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import People from "./views/People.vue";
import Registration from "./views/Registration.vue";
import ScheduleView from "./views/ScheduleView.vue";
import SessionView from "./views/SessionView";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/people",
      name: "people",
      component: People
    },
    {
      path: "/registration",
      name: "registration",
      component: Registration
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/session",
      name: "session",
      component: SessionView
    },
    {
      path: "/schedule",
      name: "scheduleView",
      component: ScheduleView
    }
  ]
});
