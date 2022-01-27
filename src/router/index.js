import VueRouter from "vue-router";

import Home from "@/views/Home.vue";
import Task from "@/views/Todo.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/task/:id",
    name: "Task ",
    component: Task,
  },
  {
    path: "/new-task",
    name: "New task",
    component: Task,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

router.beforeResolve((to, from, next) => {
  router.app.$store.commit("startLoading");
  setTimeout(() => {
    next();
    router.app.$store.commit("doneLoading");
  }, 1000);
});

export default router;
