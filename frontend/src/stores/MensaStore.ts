import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { type IMenu } from '../services/types/MensaMenu.type'
import mensaInstance from '../services/axios/mensa.config' // import the axios instance for the Mensa API

export const useMensaStore = defineStore('mensa', () => {
  // State variables
  const menus = ref<IMenu[]>([]) // Array to hold fetched menus
  const date = ref<Date>(new Date()) // Date object to manage selected date

  // Computed properties
  const getDate = computed(
    () => `${date.value.getDate()}.${date.value.getMonth() + 1}.${date.value.getFullYear()}`
  )
  // Computed property to format date for API requests
  const getDateForAPI = computed(
    () => `${date.value.getFullYear()}-${date.value.getMonth() + 1}-${date.value.getDate()}`
  )

  // Actions
  // Function to fetch menu data from the API based on the selected date
  async function fetchMenu() {
    try {
      const response = await mensaInstance.get<IMenu[]>(`/${getDateForAPI.value}/meals`)
      menus.value = response.data
    } catch (error) {
      console.error('Error fetching Menu: ', error)
      menus.value = [] // Clear menus on error to prevent displaying stale data
    }
  }

  // Function to set the store's date to a new date
  function setDate(newDate: Date) {
    date.value = newDate
  }

  // Function to set the store's date to the previous day
  function setDateToPrevious() {
    const storedDate = date.value
    storedDate.setDate(storedDate.getDate() - 1)
    date.value = new Date(storedDate)
  }

  // Function to set the store's date to the next day
  function setDateToNext() {
    const storedDate = date.value
    storedDate.setDate(storedDate.getDate() + 1)
    date.value = new Date(storedDate)
  }

  // Return all reactive properties and functions
  return {
    menus,
    fetchMenu,
    date,
    getDate,
    setDate,
    setDateToPrevious,
    setDateToNext,
    getDateForAPI
  }
})
