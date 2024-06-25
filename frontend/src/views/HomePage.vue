<template>
  <div class="mt-[150px] md:mt-[120px]">

    <!-- 
    <GridLayout class="p-2" v-model:layout="layout" v-model:responsive-layouts="res_layout" :col-num="12"
      :row-height="30" :is-draggable="false" :is-resizable="false" :responsive="true" :preserveAspectRatio="false"
      :vertical-compact="false" prevent-collision :use-css-transforms="true"> -->
    <GridLayout class="p-2" v-model:layout="layout" :responsive-layouts="presetLayouts" :row-height="30" responsive
      :prevent-collision="true" @breakpoint-changed="breakpointChangedEvent">

      <template #item="{ item }">
        <div class="bg-secondary p-4">
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
import { GridLayout } from 'grid-layout-plus';
import { ref, reactive } from 'vue';
import type { Breakpoint, Layout } from 'grid-layout-plus';
// Define the layout with unique ids
const layoutold = ref([
  { x: 0, y: 0, w: 4, h: 3, i: '0' }, // TemperatureCard component
  { x: 4, y: 3, w: 6, h: 4, i: '1' }, // TemperatureCard component
  { x: 10, y: 7, w: 2, h: 2, i: '2' }, // Another component placeholder
  //{ x: 0, y: 6, w: 2, h: 1, i: '7' }, // TemperatureCard component
  //{ x: 4, y: 6, w: 2, h: 2, i: '7' }, // Another component placeholder
  //{ x: 10, y: 6, w: 2, h: 2, i: '7' }, // Another component placeholder
]); 

const res_layoutold = ref({
  lg: [
    {x: 0, y: 0, w: 4, h: 3, i: '0' }, // TemperatureCard component
    { x: 4, y: 3, w: 6, h: 4, i: '1' }, // TemperatureCard component
    { x: 10, y: 7, w: 2, h: 2, i: '2' }, // Another component placeholder
    //{ x: 0, y: 6, w: 2, h: 1, i: '7' }, // TemperatureCard component
    //{ x: 4, y: 6, w: 2, h: 2, i: '7' }, // Another component placeholder
    //{ x: 10, y: 6, w: 2, h: 2, i: '7' }, // Another component placeholder
  ],
  md: [
    {x: 0, y: 0, w: 4, h: 3, i: '0' }, // TemperatureCard component
    { x: 4, y: 3, w: 6, h: 4, i: '1' }, // TemperatureCard component
    { x: 10, y: 7, w: 2, h: 2, i: '2' }, // Another component placeholder
    //{ x: 0, y: 6, w: 2, h: 1, i: '7' }, // TemperatureCard component
    //{ x: 4, y: 6, w: 2, h: 2, i: '7' }, // Another component placeholder
    //{ x: 10, y: 6, w: 2, h: 2, i: '7' }, // Another component placeholder
  ],
  sm: [
    {x: 0, y: 10, w: 3, h: 3, i: '0' }, // TemperatureCard component
    { x: 10, y: 20, w: 3, h: 3, i: '1' }, // TemperatureCard component
    //{ x: 30, y: 30, w: 3, h: 3, i: '2' }, // Another component placeholder
    //{ x: 0, y: 6, w: 2, h: 1, i: '7' }, // TemperatureCard component
    //{ x: 4, y: 6, w: 2, h: 2, i: '7' }, // Another component placeholder
    //{ x: 10, y: 6, w: 2, h: 2, i: '7' }, // Another component placeholder
  ]
}); 



const presetLayouts = reactive({
  lg: [
    { x: 0, y: 0, w: 2, h: 2, i: '0' },
    { x: 2, y: 0, w: 4, h: 2, i: '1' },
    { x: 6, y: 0, w: 2, h: 1, i: '2' },
    { x: 0, y: 2, w: 2, h: 3, i: 'Cafe' },
    { x: 2, y: 2, w: 4, h: 2, i: 'Chart2' },
    { x: 6, y: 1, w: 2, h: 4, i: 'Other' },
  ],
  md: [
    { x: 0, y: 0, w: 2, h: 2, i: '0' },
    { x: 2, y: 0, w: 4, h: 2, i: '1' },
    { x: 6, y: 0, w: 2, h: 1, i: '2' },
    { x: 0, y: 2, w: 2, h: 3, i: 'Cafe' },
    { x: 2, y: 2, w: 4, h: 2, i: 'Chart2' },
    { x: 6, y: 1, w: 2, h: 4, i: 'Other' },
  ],
  sm: [
    { x: 0, y: 0, w: 6, h: 2, i: '0' },
    { x: 0, y: 2, w: 6, h: 2, i: '1' },
    { x: 0, y: 4, w: 6, h: 1, i: '2' },
    { x: 0, y: 5, w: 6, h: 3, i: 'Cafe' },
    { x: 0, y: 8, w: 6, h: 2, i: 'Chart2' },
    { x: 0, y: 10, w: 6, h: 4, i: 'Other' },
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
      return MenuList;
    case '4':
      return TemperatureCard;
    case '5':
      return TemperatureCard;
    default:
      return null;
  }
};
</script>

