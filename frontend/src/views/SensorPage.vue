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
import SensorComponent from "../components/SensorComponent/SensorChart.vue";
import BarChart from "../components/BarChart.vue";

</script>
