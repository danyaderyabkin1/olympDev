import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Plans from '../views/Plans.vue'
import PlansItem from '../views/PlansItem.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/plans',
      name: 'plans',
      component: Plans,
    },
    {
      path: '/plans/:id',
      component: PlansItem,
    },
  ],
})

export default router
