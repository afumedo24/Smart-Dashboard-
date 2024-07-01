<!--
  This Vue component renders two components: SensorComponent and BarChart.
  Each component is wrapped in a div with specific width, height, padding, and margin settings.
  The layout is designed to provide appropriate spacing and dimensions, especially for larger screens.
-->
<template>
  <div class="mt-[120px] py-8 px-6 md:px-32">
    <div class="w-[1500px] h-[800px] p-2">
      <SensorComponent />
    </div>
    <div class="w-[1500px] h-[800px] p-2">
      <BarChart />
    </div>
  </div>
</template>

<script setup lang="ts">
import SensorComponent from '@/components/ChartComponent/SensorChart.vue'
import BarChart from '@/components/ChartComponent/BarChart.vue'
</script>
