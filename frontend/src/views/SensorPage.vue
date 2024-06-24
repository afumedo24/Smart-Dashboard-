<template>
  <div>
    <button @click="increment">Increment Data</button>
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import {Chart} from 'chart.js';

const chartValues = ref([0.3, 1]);

function increment() {
  chartValues[0] += 0.1;
  if (chartValues[0] > 1) {
    chartValues[0] = 0;
  }
}

onMounted(() => {
  const ctx = document.getElementById('chartCanvas') as HTMLCanvasElement;
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['January', 'February'],
      datasets: [
        {
          label: 'My First Dataset',
          backgroundColor: '#42A5F5',
          data: chartValues,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
  });
});
</script>
