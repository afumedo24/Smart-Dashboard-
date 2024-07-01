<!--
  This Vue component renders a responsive dashboard layout using the GridLayout component from 'grid-layout-plus'.
  It supports different layout configurations for large, medium, and small screen sizes.
  The layout items are dynamically rendered based on a preset configuration.
  Each layout item displays a specific component (e.g., StockBarChart, TodaysMensa) determined by its ID.
-->

<template>
  <div class="mt-[120px]">
    <GridLayout
      v-model:layout="layout"
      :responsive-layouts="presetLayouts"
      :col-num="12"
      :row-height="30"
      responsive
      :prevent-collision="true"
      :is-draggable="false"
      :is-resizable="false"
      class="p-2"
    >
      <template #item="{ item }">
        <div class="p-2">
          <component :is="getComponent(item.i)" />
        </div>
      </template>
    </GridLayout>
  </div>
</template>

<script setup lang="ts">
import TemperatureCard from '@/components/DashboardComponents/TemperatureCard.vue'
import NewsComponent from '@/components/DashboardComponents/NewsCard.vue'
import TodaysMensa from '@/components/DashboardComponents/TodaysMensa.vue'
import StockBarChart from '@/components/ChartComponent/BarChart.vue'
import CurrentLineChart from '@/components/ChartComponent/SensorChart.vue'
import { GridLayout } from 'grid-layout-plus'
import { ref, reactive } from 'vue'

// Define component mapping
const componentMap: Record<string, any> = {
  '0': StockBarChart,
  '1': TodaysMensa,
  '2': CurrentLineChart,
  '3': NewsComponent,
  '4': TemperatureCard
}

// this function is used in the template to render the component
// based on the layout item id
const getComponent = (id: string) => componentMap[id] || null

// Preset layouts for different screen sizes
const presetLayouts = reactive({
  lg: [
    { x: 0, y: 0, w: 8, h: 12, i: '0' },
    { x: 9.3, y: 0, w: 2.6, h: 12, i: '1' },
    { x: 0, y: 5, w: 6, h: 6, i: '2' },
    { x: 7, y: 2, w: 5, h: 3, i: '3' },
    { x: 7, y: 0, w: 5, h: 5, i: '4' }
  ],
  md: [
    { x: 0, y: 0, w: 4, h: 11, i: '0' },
    { x: 0, y: 6, w: 4, h: 6.8, i: '3' },
    { x: 0, y: 6, w: 4, h: 5.5, i: '4' },
    { x: 3.7, y: 5, w: 6, h: 2, i: '2' },
    { x: 0, y: 7, w: 12, h: 6, i: '1' }
  ],
  sm: [
    { x: 0, y: 0, w: 6, h: 11, i: '0' },
    { x: 0, y: 6, w: 6, h: 9.2, i: '1' },
    { x: 0, y: 10, w: 6, h: 6, i: '3' },
    { x: 0, y: 10, w: 6, h: 6, i: '4' },
    { x: 0, y: 10, w: 6, h: 5, i: '2' }
  ]
})

// Use a ref for the current layout
const layout = ref(presetLayouts.lg)
</script>
