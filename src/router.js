import Vue from "vue";
import Router from "vue-router";
import Landing from "./views/Landing.vue";
// import Home from "./views/Home.vue";
import About from "./views/About.vue";
import People from "./views/People.vue";
import Registration from "./views/Registration.vue";
import SponsorPage from "./views/SponsorPage.vue";
import ScheduleView from "./views/ScheduleView.vue";
import SessionView from "./views/SessionView";
import Profile from "./views/Profile";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/",
      name: "home",
      component: Landing
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
    // {
    //   path: "/sponsors",
    //   name: "sponsorPage",
    //   component: SponsorPage
    // },
    {
      path: "/sessions",
      name: "session",
      component: SessionView
    },
    {
      path: "/schedule",
      name: "scheduleView",
      component: ScheduleView
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile
    }
  ],
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
});
