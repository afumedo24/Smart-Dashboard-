import MapChart from 'vue-map-chart';
<template>
  <div class="mt-20 py-8">
    <Pie :data="data" :options="options" />
  </div>
</template>

<script setup lang="ts">
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs'

ChartJS.register(ArcElement, Tooltip, Legend)

const data = {
  labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs', 'Ahmed'],
  datasets: [
    {
      backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16', '#FF5733'],
      data: [40, 20, 80, 10, 60]
    }
  ]
}

const options = {
  responsive: true
}
</script>
