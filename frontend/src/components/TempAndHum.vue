<!-- 
  This component is used to display the temperature and humidity of the weather.
  It is used in the HomePage. We will get the values from the API and display them here.
-->

<template>
  <div class="flex items-center py-4 px-6 my-6 drop-shadow-md">
    <!-- Temperature -->
    <v-icon name="md-sunny" fill="grey" scale="3.5" class="text-4xl mr-4"></v-icon>
    <div class="flex-row">
      <div class="flex items-center">
        <h2 class="text-4xl font-bold my-0">{{ data.temperature }}</h2>
        <p class="text-3xl ml-2 font-light">°C</p>
      </div>
      <p class="text-md font-thin">Temperature</p>
    </div>
    <hr class="w-[65px] rotate-90 m-0" />
    <!-- Humidity -->
    <div class="flex-row">
      <div class="flex items-center">
        <h2 class="text-4xl font-bold my-0">{{ data.humidity }}</h2>
        <p class="text-3xl ml-2 font-light">%</p>
      </div>
      <p class="text-md font-thin">Humidity</p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface WeatherData {
  temperature: number
  humidity: number
}

// get these values from the store
const data: WeatherData = {
  temperature: 23,
  humidity: 35
}
</script>
