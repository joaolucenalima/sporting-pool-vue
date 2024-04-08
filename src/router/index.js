import HomeView from '@/views/HomeView.vue'
import PoolsView from '@/views/PoolsView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/pools',
      name: 'pools',
      component: PoolsView
    }
  ]
})

export default router
