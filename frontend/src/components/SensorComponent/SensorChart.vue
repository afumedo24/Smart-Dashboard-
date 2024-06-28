<template>
    <div class="mt-[120px]">
        <button class=" m-4 p-5 text-xl bg-main" @click="start">Start</button>
        <button class=" m-4 p-5 text-xl bg-main" @click="stop">Stop</button>
    </div>
    <div class="">
        <LineChart ref="linechart" :chartData="chartDatas" :options="chartOption" />
    </div>
</template>

<script setup lang="ts">
import { LineChart, useLineChart } from "vue-chart-3";
import { ref, computed, onMounted, onUnmounted } from 'vue';
import type { Ref } from 'vue';       
import { Chart, registerables } from "chart.js";
import type { ChartData, ChartOptions, } from "chart.js";
import axios from 'axios';
import { useSensorStore } from '../../stores/SensorStore';
import { storeToRefs } from 'pinia';


const sensorStore = useSensorStore();
const { sensorData, frequency } = storeToRefs(sensorStore);


Chart.register(...registerables);

const dataValues: Ref< Array<any>> = ref([{x:0, y:0}]);
//const dataValues2: Ref<Array<any>> = ref([{ x: 0, y: 0 }]);
const dataLabels = ref([0])

const chartDatas = computed < ChartData<'line'>>(() => {
    return {
        labels: dataLabels.value,
        datasets: [
            {
                label: "Sensor Data from Sensor1",
                backgroundColor: [
                    "#77CEFF",
                    "#0079AF",
                    "#123E6B"
                ],
                data: dataValues.value,
            },
            /*
            {
                label: "Sensor Data 2",
                backgroundColor: [
                    "#77CEFF",
                    "#0079AF",
                    "#123E6B"
                ],
                data: dataValues2.value,
            },*/
        ],
    };
});


const chartOption = computed<ChartOptions<'line'>>(() => ({
    responsive: true,
    plugins: {
        legend: {
            display: true,
            position: 'top', // Position of the legend. Can be 'top', 'left', 'bottom', or 'right'
            labels: {
                color: 'rgb(255, 99, 132)', // Color of the labels
                font: {
                    size: 14, // Font size of the labels
                },
            },
        },
        title: {
            display: false,
            text: "Sensor Data from Sensor1",
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
            title: {
                display: true,
                text: "Current in A",
            },
        },
    },
}));

const { lineChartProps, lineChartRef } = useLineChart({
    chartData: chartDatas,
    options: chartOption,
});

let i = 0;

function updateGraph() {
    i = i + 4
    axios.get('http://localhost:2424/api/sensor1')
        .then((response) => {
            console.log(response.data);
            const newEntry = {
                x: i,
                y: response.data.values,
            };
            if (i > 20) {
                dataValues.value.shift();
                dataLabels.value.shift();
            }
            dataValues.value.push(newEntry);
            dataLabels.value.push(i);
            i++;
        })
        .catch((error) => {
            console.log(error);
        });
}
let intervalId: number | null = null;
const start = () => {
    if (intervalId === null) {
        intervalId = window.setInterval(updateGraph, 5000);
    }
}
const stop = () => {
    if (intervalId !== null) {
        window.clearInterval(intervalId);
        intervalId = null;
    }
}


</script>