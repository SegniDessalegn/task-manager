import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AddTask from '../views/AddTask.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/add-Task',
    name: 'add-Task',
    component: AddTask
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
