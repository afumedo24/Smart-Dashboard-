import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import myRestInstance from '../services/axios/rest.config' // Import Axios instance for REST API
import { type IWeather } from '../services/types/Weather.type' // Import type definition for Weather

export const useWeatherStore = defineStore('weather', () => {
  // State variable: Holds the current weather data
  const weather = ref<IWeather>()

  // Computed property: Retrieves the current state of weather data
  const getWeather = computed(() => weather.value)

  // Action: Fetches weather data from the API
  async function fetchWeather() {
    try {
      const response = await myRestInstance.get(`/services/weather`)
      weather.value = response.data // Update weather with fetched data
    } catch (error) {
      console.error('Error fetching Weather: ', error) // Log error if fetching fails
    }
  }

  // Return all reactive properties and functions
  return {
    weather,
    getWeather,
    fetchWeather
  }
})
