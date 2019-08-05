import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [{
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import( /* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/exercise",
      name: "exercise",
      component: () =>
        import( /* webpackChunkName: "about" */ "./views/exercise.vue")
    },
    {
      path: "/parent",
      name: "parent",
      component: () =>
        import( /* webpackChunkName: "about" */ "./views/parent.vue")
    },
    {
      path: "/child",
      name: "child",
      component: () =>
        import( /* webpackChunkName: "about" */ "./views/child.vue")
    }
  ]
});