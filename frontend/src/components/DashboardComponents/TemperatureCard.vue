<!--
  This Vue component displays weather information fetched from WeatherStore.
  It shows the current temperature, humidity, sunrise, sunset times, and city name.
  If weather data is not yet loaded, it shows a loading indicator.
-->
<template>
  <div class="bg-lightShade rounded-xl p-4">
    <div class="flex-col mt-2 mx-4">
      <!-- Weather information section -->
      <div v-if="weather" class="flex justify-between">
        <!-- Temperature and weather icon -->
        <div class="flex justify-between items-center">
          <img class="" :src="weather?.weather_icon" alt="Temperature icon" />
          <p class="text-3xl ml-1 font-bold">{{ weather?.temperature }} °C</p>
        </div>
        <!-- Additional weather details -->
        <div class="flex-col items-center p-4 font-medium">
          <p class="text-lg text-darkAccent">
            Humidity: <label class="text-black font-normal"> {{ weather?.humidity }} %</label>
          </p>
          <p class="text-lg text-darkAccent">
            Sunrise: <label class="text-black font-normal"> {{ weather?.sunrise }} Uhr </label>
          </p>
          <p class="text-lg text-darkAccent">
            Sunset: <label class="text-black font-normal"> {{ weather?.sunset }} Uhr </label>
          </p>
        </div>
      </div>
      <!-- Display loading message if weather data is loading -->
      <div v-else class="text-center">
        <p class="text-lg font-light">Loading...</p>
      </div>
      <!-- Display city name -->
      <p class="text-2xl text-center mt-2">{{ weather?.city_name }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useWeatherStore } from '../../stores/WeatherStore'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

// Access the WeatherStore using pinia
const weatherStore = useWeatherStore()
const { weather } = storeToRefs(weatherStore)

// Fetch weather data when component is mounted
onMounted(() => {
  weatherStore.fetchWeather()
})
</script>