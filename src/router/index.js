import VueRouter from 'vue-router';
import Home from "@/views/Home.vue"
import Task from "@/views/Todo.vue"

const routes = [
  {
    path: '/',
    name: "Home",
    component: Home
  },
  {
    path: '/new-task',
    name: "New Task ",
    component: Task
  }
]

const router = new VueRouter({
  routes
})

export default router