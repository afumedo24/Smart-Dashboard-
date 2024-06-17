<template>
  <div class="mt-20 md:mt-[88px]">
    <p class="mt-20 p-20"></p>
    <div class="w-[800px] h-[480px]">
      <temperature-card />
    </div>
    <!-- 
      {{ weatherData.temperature }}°C, {{ weatherData.humidity }}%
    </p>
    <p v-for="newsData in newsData" :key="newsData">
      <a :href=newsData.url > {{ newsData.title }} </a> 
    </p>
    -->
  </div>
</template>

<script setup>
import TemperatureCard from '../components/SensorComponent/TemperatureCard.vue'

/*
const weatherData = ref([])
const newsData = ref([])

onMounted(() => {
  axios
    .get('http://localhost:2424/api/weather')
    .then((response) => {
      console.log(response.data)
      weatherData.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
  axios
    .get('http://localhost:2424/api/news')
    .then((response) => {
      console.log(response.data)
      newsData.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
}) 
*/
</script>
