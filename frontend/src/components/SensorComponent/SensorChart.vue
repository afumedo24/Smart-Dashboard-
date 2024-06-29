<template>
    <div class="p-4">
        <div class="flex items-center justify-center gap-4">
            <button class="bg-secondary text-white md:text-lg rounded-lg px-6 py-2"
                @click="sensorStore.start()">Start</button>
            <button class="bg-secondary text-white md:text-lg rounded-lg px-6 py-2"
                @click="sensorStore.stop()">Stop</button>
        </div>
        <div class="mt-8 w-[380px] md:w-[520px] lg:w-[680px] mx-auto">
            <LineChart ref="linechart" :chartData="chartData" :options="chartOption" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { LineChart } from "vue-chart-3";
import { computed, onMounted, onUnmounted } from 'vue';
import { Chart, registerables } from "chart.js";
import type { ChartData, ChartOptions } from "chart.js";
import { useSensorStore } from '../../stores/SensorStore';
import { storeToRefs } from 'pinia';

const sensorStore = useSensorStore();
const { sensorData, sensorDataLabels, activeSensor } = storeToRefs(sensorStore);

Chart.register(...registerables);

const chartData = computed<ChartData<'line'>>(() => ({
    labels: sensorDataLabels.value,
    datasets: [
        {
            label: `Data from ${activeSensor.value}`,
            backgroundColor: "#009FE3",
            borderColor: "#12151A",
            data: sensorData.value.map(point => point.y),
            fill: false,
        },
    ],
}));

const chartOption = computed<ChartOptions<'line'>>(() => ({
    responsive: true,
    plugins: {
        legend: {
            display: true,
            position: 'top',
            labels: {
                color: 'black',
                font: {
                    size: 20,
                },
            },
        },
        title: {
            display: false,
        },
    },
    scales: {
        x: {
            display: true,
            title: {
                display: true,
                text: "Time in s",
            },
        },
        y: {
            display: true,
            min: 0,
            max: 0.07,
            ticks: {
                stepSize: 0.02,
            },
            title: {
                display: true,
                text: "Current in A",
            },
        },
    },
}));

onMounted(() => {
    sensorStore.fetchSensorSettings();
});

onUnmounted(() => {
    sensorStore.stop();
});

</script>