import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/lobby',
      name: 'Lobby',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

router.beforeEach((to: any, from: any, next: any) => {
  const name = window.localStorage.getItem('name')
  console.log(name)

  if (!name) {
    next({ name: 'Lobby' })
  }
  next()
})

export default router
