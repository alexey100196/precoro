import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/CardsView.vue'

const routes = [
  {
    path: '/',
    name: 'cards',
    component: HomeView
  },
  {
    path: '/investment',
    name: 'investment',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/InvestmentView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
