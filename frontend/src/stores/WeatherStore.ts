import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import myRestInstance from '../services/axios/rest.config'
import { type IWeather } from '../services/types/Weather.type'

export const useWeatherStore = defineStore('weather', () => {
  // this is the state of the store
  const weather = ref<IWeather>()

  // this is the getter of the store
  const getWeather = computed(() => weather.value)

  // this is the action of the store
  async function fetchWeather() {
    try {
      const response = await myRestInstance.get(`/services/weather`)
      weather.value = response.data
    } catch (error) {
      console.error('Error fetching Weather: ', error)
    }
  }

  return { weather, getWeather, fetchWeather }
})
