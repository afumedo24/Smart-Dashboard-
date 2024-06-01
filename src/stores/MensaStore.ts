import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { type Menu } from '../services/types/MensaMenu.type'
import mensaInstance from '../services/axios/axios.config'

export const useMensaStore = defineStore('mensa', () => {
  // this is the state of the store
  const menu = ref<Menu[]>([])

  // this is the getter of the store
  const getMenu = computed(() => menu.value)

  // this is the action of the store
  async function fetchMenu() {
    try {
      const response = await mensaInstance.get<Menu[]>('/')
      menu.value = response.data
    } catch (error) {
      console.error('Error fetching Menu: ', error)
      menu.value = []
    }
  }
  return { menu, getMenu, fetchMenu }
})
