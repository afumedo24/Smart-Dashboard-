import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import MensaPage from '../views/MensaPage.vue'
import SensorPage from '../views/SensorPage.vue'
import MensaMenuListPage from '../views/MensaMenuPage.vue'
import SettingsPage from '../views/SettingsPage.vue'

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
      path: '/mensa/menu',
      name: 'mensa-menu',
      component: MensaMenuListPage
    },
    {
      path: '/sensor',
      name: 'sensor',
      component: SensorPage
    },
    {
      path: '/settings',
      name: 'settings',
      component: SettingsPage
    }
  ]
})

export default router
