<!--
  This Vue component displays a control interface with two buttons and a line chart representing sensor data
  fetched from the SensorStore. It allows starting and stopping sensor data fetching and
  visualizes the data in a responsive line chart with dynamic options.
-->
<template>
  <div class="p-4">
    <!-- Control buttons to start and stop sensor data -->
    <div class="flex items-center justify-center gap-4">
      <button class="bg-secondary text-white md:text-lg rounded-lg px-6 py-2" @click="sensorStore.start()">
        Start
      </button>
      <button class="bg-secondary text-white md:text-lg rounded-lg px-6 py-2" @click="sensorStore.stop()">
        Stop
      </button>
    </div>
    <!-- Line chart displaying sensor data -->
    <div class="mt-8 w-[380px] md:w-[520px] lg:w-[680px] mx-auto">
      <LineChart ref="linechart" :chartData="chartData" :options="chartOption" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { LineChart } from 'vue-chart-3'
import { computed, onMounted, onUnmounted } from 'vue'
import { Chart, registerables } from 'chart.js'
import type { ChartData, ChartOptions } from 'chart.js'
import { useSensorStore } from '@/stores/SensorStore'
import { storeToRefs } from 'pinia'

// Access the SensorStore using pinia
const sensorStore = useSensorStore()
const { sensorData, sensorDataLabels, activeSensor } = storeToRefs(sensorStore)

// Register chart.js components
Chart.register(...registerables)

// Define computed property for chart data
const chartData = computed<ChartData<'line'>>(() => ({
  labels: sensorDataLabels.value,
  datasets: [
    {
      label: `Data from ${activeSensor.value}`, // Dynamic label based on active sensor
      backgroundColor: '#009FE3',
      borderColor: '#12151A',
      data: sensorData.value.map((point) => point.y), // Map sensor data points to y-axis values
      fill: false
    }
  ]
}))

// Define reactive reference for chart options
const chartOption = computed<ChartOptions<'line'>>(() => ({
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: 'top',
      labels: {
        color: 'black',
        font: {
          size: 20
        }
      }
    },
    title: {
      display: false
    }
  },
  scales: {
    x: {
      display: true,
      title: {
        display: true,
        text: 'Time in s' // x-axis title
      }
    },
    y: {
      display: true,
      min: 0,
      max: 0.07,
      ticks: {
        stepSize: 0.02 // Step size for y-axis ticks
      },
      title: {
        display: true,
        text: 'Current in A' // y-axis title
      }
    }
  }
}))

// Fetch sensor settings from the SensorStore upon component mount
onMounted(() => {
  sensorStore.fetchSensorSettings()
})

// Stop sensor data fetching when component is unmounted
onUnmounted(() => {
  sensorStore.stop()
})
</script>