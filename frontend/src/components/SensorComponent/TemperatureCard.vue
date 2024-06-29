import { useWeatherStore } from '../../stores/WeatherStore';
<template>
  <div class="bg-lightShade rounded-xl p-4">
    <div class="flex-col mt-2 mx-4">
      <div v-if="weather" class="flex justify-between">
        <div class="flex justify-between items-center">
          <img class="" :src="weather?.weather_icon" alt="Temperature icon" />
          <p class="text-3xl ml-1 font-bold ">{{ weather?.temperature }} °C</p>
        </div>
        <div class="flex-col items-center p-4 font-medium ">
          <p class="text-lg text-darkAccent">Humidty: <label class="text-black font-normal"> {{ weather?.humidity }}
              %</label>
          </p>
          <p class="text-lg text-darkAccent">Sunrise: <label class="text-black font-normal"> {{ weather?.sunrise }} Uhr
            </label></p>
          <p class="text-lg text-darkAccent">Sunset: <label class="text-black font-normal"> {{ weather?.sunset }} Uhr
            </label></p>
        </div>
      </div>
      <div v-else class="text-center">
        <p class="text-lg font-light">Loading...</p>
      </div>
      <p class="text-2xl text-center mt-2">{{ weather?.city_name }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useWeatherStore } from '../../stores/WeatherStore'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

const weatherStore = useWeatherStore()
const { weather } = storeToRefs(weatherStore)

onMounted(() => {
  weatherStore.fetchWeather()
})
</script>
