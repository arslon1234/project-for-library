import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BoshSahifa from '@/views/BoshSahifa'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children:[
      {
        path: "/bosh_sahifa",
        name: 'bosh_sahifa',
        component: BoshSahifa
      }
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
