<template>
    <div class="mt-[120px]">
        <button @click="updateGraph">Update Graph</button>
    </div>
    <div class="">
        <LineChart ref="linechart" :chartData="chartDatas" :options="chartOption"/>
    </div>
</template>

<script setup lang="ts">
import { LineChart, useLineChart } from "vue-chart-3";
import { ref, computed, onMounted, onUnmounted } from 'vue';
import type { Ref } from 'vue';       
import { Chart, registerables } from "chart.js";
import type { ChartData, ChartOptions, } from "chart.js";


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
            display: false,
        },
        title: {
            display: true,
            text: "Sensor Data from Sensor1",
        },
    },
    scales: {
        x: {
            display: true,
            title: {
                display: true,
                text: "Time in seconds",
            },
        },
        y: {
            display: true,
            title: {
                display: true,
                text: "Current in mA",
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
    i++;

    const newEntry = {
        x: i,
        y: Math.floor(Math.random() * 100),
    };/*
    const newEntry2 = {
        x: i,
        y: Math.floor(i * 10),
    };*/

    if(i > 20)
    {
        dataValues.value.shift();
        dataLabels.value.shift();
    }

    dataValues.value.push(newEntry);
    dataLabels.value.push(i);  
}



</script>