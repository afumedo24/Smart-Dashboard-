<!--
  This Vue component displays a bar chart representing market capitalization data fetched
  from the StockStore. It dynamically adjusts its width based on the screen size and shows
  a loading message while data is being fetched.
-->
<template>
  <div class="w-[480px] md:w-[720px] lg:w-[1080px] mx-auto bg-lightShade rounded-xl p-4">
    <!-- Display loading message when stockData is not available -->
    <p v-if="!stockData" class="text-center text-2xl md:text-4xl lg:text-6xl p-8 md:p-16">
      Loading...
    </p>
    <!-- Display BarChart component with chartData and chartOptions when stockData is available -->
    <BarChart v-else ref="chart" :chartData="chartData" :options="chartOptions" />
  </div>
</template>

<script setup lang="ts">
import { BarChart } from 'vue-chart-3'
import { ref, onMounted, computed } from 'vue'
import { Chart, registerables } from 'chart.js'
import type { ChartData, ChartOptions } from 'chart.js'
import { useStockStore } from '@/stores/StockStore'
import { storeToRefs } from 'pinia'

// Access the StockStore using pinia
const stockStore = useStockStore()
const { stockData, stockLabels } = storeToRefs(stockStore)

// Register chart.js components
Chart.register(...registerables)

// Define computed property for chart data
const chartData = computed<ChartData<'bar'>>(() => ({
  labels: stockLabels.value,
  datasets: [
    {
      label: 'Market Capitalization from previous day',
      backgroundColor: '#009FE3',
      data: stockData.value
    }
  ]
}))

// Define reactive reference for chart options
const chartOptions = ref<ChartOptions<'bar'>>({
  responsive: true,
  maintainAspectRatio: false,
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
        text: 'Companies'
      }
    },
    y: {
      display: true,
      title: {
        display: true,
        text: 'Market Cap in Mio. $'
      },
      min: 0,
      max: 10000,
      ticks: {
        stepSize: 1000
      }
    }
  }
})

// Fetch stock data from the StockStore upon component mount
onMounted(() => {
  stockStore.fetchStock()
})
</script>
