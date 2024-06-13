import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { type Menu } from '../services/types/MensaMenu.type'
import mensaInstance from '../services/axios/axios.config'

export const useMensaStore = defineStore('mensa', () => {
  // this is the state of the store
  const menus = ref<Menu[]>([])
  const date = ref<Date>(new Date())

  // this is the getter of the store
  const getMenu = computed(() => menus.value)
  const getDate = computed(
    () => `${date.value.getDate()}.${date.value.getMonth() + 1}.${date.value.getFullYear()}`
  )

  const getDateForAPI = computed(
    () => `${date.value.getFullYear()}-${date.value.getMonth() + 1}-${date.value.getDate()}`
  )

  // this is the action of the store
  async function fetchMenu() {
    try {
      const response = await mensaInstance.get<Menu[]>(`/${getDateForAPI.value}/meals`)
      menus.value = response.data
      console.log('Menu fetched: ', response.data)
    } catch (error) {
      console.error('Error fetching Menu: ', error)
      menus.value = []
    }
  }

  function setDate(newDate: Date) {
    date.value = newDate
  }

  function setDateToPrevious() {
    const storedDate = date.value
    storedDate.setDate(storedDate.getDate() - 1)
    console.log(storedDate)
    date.value = new Date(storedDate)
  }
  function setDateToNext() {
    const storedDate = date.value
    storedDate.setDate(storedDate.getDate() + 1)
    console.log(storedDate)
    date.value = new Date(storedDate)
  }

  return {
    menus,
    getMenu,
    fetchMenu,
    date,
    getDate,
    setDate,
    setDateToPrevious,
    setDateToNext,
    getDateForAPI
  }
})
