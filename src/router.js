import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import People from "./views/People.vue";
import Registration from "./views/Registration.vue";
import SponsorPage from "./views/SponsorPage.vue";
import ScheduleView from "./views/ScheduleView.vue";

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
      path: "/sponsor",
      name: "sponsorPage",
      component: SponsorPage
    },
    {
      path: "/schedule",
      name: "scheduleView",
      component: ScheduleView
    }
  ]
});
