import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { type IMenu } from '../services/types/MensaMenu.type'
import mensaInstance from '../services/axios/mensa.config' // import the axios instance for the Mensa API

export const useMensaStore = defineStore('mensa', () => {
  // this is the state of the store
  const menus = ref<IMenu[]>([])
  const date = ref<Date>(new Date())

  // this is the getter of the store
  const getMenu = computed(() => menus.value)
  const getDate = computed(
    () => `${date.value.getDate()}.${date.value.getMonth() + 1}.${date.value.getFullYear()}`
  )
  // this getter allows to get the date in the format that the API needs
  const getDateForAPI = computed(
    () => `${date.value.getFullYear()}-${date.value.getMonth() + 1}-${date.value.getDate()}`
  )

  // this is the action of the store
  async function fetchMenu() {
    try {
      const response = await mensaInstance.get<IMenu[]>(`/${getDateForAPI.value}/meals`)
      menus.value = response.data
      // console.log('Menu fetched: ', response.data) delete this later
    } catch (error) {
      console.error('Error fetching Menu: ', error)
      menus.value = []
    }
  }
  // this action allows to set the date to a new date
  function setDate(newDate: Date) {
    date.value = newDate
  }
  // this action allows to set the date to the previous day
  function setDateToPrevious() {
    const storedDate = date.value
    storedDate.setDate(storedDate.getDate() - 1)
    date.value = new Date(storedDate)
  }
  // this action allows to set the date to the next day
  function setDateToNext() {
    const storedDate = date.value
    storedDate.setDate(storedDate.getDate() + 1)
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
