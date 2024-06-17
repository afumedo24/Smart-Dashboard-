<template>
  <div class="mt-20 md:mt-[88px]">
    <p class="mt-20 p-20">
      {{ weatherData.temperature }}°C, {{ weatherData.humidity }}%
    </p>
    <p v-for="newsData in newsData" :key="newsData">
      <a :href=newsData.url > {{ newsData.title }} </a> 
    </p>
  </div>
</template>

<script setup>
import TempAndHum from '../components/TempAndHum.vue'
import axios from 'axios'
import { ref, onMounted } from 'vue'

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
</script>
