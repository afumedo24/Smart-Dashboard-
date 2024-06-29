<template>
  <div class="mt-[150px] md:mt-[120px]">

    <!-- 
    <GridLayout class="p-2" v-model:layout="layout" v-model:responsive-layouts="res_layout" :col-num="12"
      :row-height="30" :is-draggable="false" :is-resizable="false" :responsive="true" :preserveAspectRatio="false"
      :vertical-compact="false" prevent-collision :use-css-transforms="true"> -->
    <GridLayout class="p-2 relative" v-model:layout="layout" :responsive-layouts="presetLayouts" :col-num="12" :row-height="30" responsive
      :prevent-collision="true" @breakpoint-changed="breakpointChangedEvent">

      <template #item="{ item }">
        <div class="p-2">
          <component :is="getComponent(item.i)" />
        </div>
      </template>

    </GridLayout>
  </div>
</template>

<script setup lang="ts">
import TemperatureCard from '@/components/SensorComponent/TemperatureCard.vue';
import NewsComponent from '@/components/NewsCard.vue';
import MenuList from '@/components/MensaComponents/MenuList.vue';
import Chart2 from '@/components/SensorComponent/SensorChart.vue';
import { GridLayout } from 'grid-layout-plus';
import { ref, reactive } from 'vue';
import type { Breakpoint, Layout } from 'grid-layout-plus';


const presetLayouts = reactive({
  lg: [
    { x: 0, y: 0, w: 4, h: 2, i: '0' },
    { x: 4, y: 0, w: 5, h: 2, i: '1' },
    { x: 9, y: 0, w: 3, h: 1, i: '2' },
    { x: 0, y: 3, w: 4, h: 3, i: '3' },
    { x: 2, y: 2, w: 8, h: 10, i: '4' },
    { x: 6, y: 1, w: 2, h: 4, i: '5' },
  ],
  md: [
    { x: 0, y: 0, w: 4, h: 2, i: '0' },
    { x: 4, y: 0, w: 4, h: 2, i: '1' },
    { x: 8, y: 0, w: 2, h: 1, i: '2' },
    { x: 0, y: 4, w: 2, h: 3, i: '3' },
    { x: 2, y: 2, w: 4, h: 2, i: '4' },
    { x: 6, y: 1, w: 2, h: 4, i: '5' },
  ],
  sm: [
    { x: 0, y: 0, w: 6, h: 5, i: '0' },
    { x: 0, y: 5, w: 6, h: 5, i: '1' },
    { x: 0, y: 5, w: 6, h: 5, i: '2' },
    { x: 0, y: 5, w: 6, h: 5, i: '3' },
    { x: 0, y: 8, w: 6, h: 2, i: '4' },
    { x: 0, y: 10, w: 6, h: 4, i: '5' },
  ],
});

const layout = ref(presetLayouts.lg);

function breakpointChangedEvent(newBreakpoint: Breakpoint, newLayout: Layout) {
  console.info('BREAKPOINT CHANGED breakpoint=', newBreakpoint, ', layout: ', newLayout);
}
// Function to map grid item id to component
const getComponent = (id: string) => {
  switch (id) {
    case '0':
      return TemperatureCard;
    case '1':
      return NewsComponent;
    case '2':
      return TemperatureCard;
    case '3':
      return Chart2;
    case '4':
      return 'Chart2';
    case '5':
      return 'Other';
    default:
      return null;
  }
};
</script>

