import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import MensaPage from '../views/MensaPage.vue'
import HealthPage from '../views/HealthPage.vue'
import MensaMenuPage from '../views/MensaMenuPage.vue'
import AppointentPage from '../views/AppointentPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/mensa',
      name: 'mensa',
      component: MensaPage
    },
    {
      path: '/health',
      name: 'health',
      component: MensaMenuPage
    },
    {
      path: '/appointment',
      name: 'appointment',
      component: AppointentPage
    }
  ]
})

export default router
