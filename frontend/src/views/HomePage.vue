<template>
  <div class="mt-[150px] md:mt-[120px]">
   
    <GridLayout 
      v-model:layout="layout"
      :col-num="12"
      :row-height="30"
      :is-draggable="false"
      :is-resizable="false"
      :responsive="true"
      vertical-compact
      use-css-transforms
    >
 
      <template #item="{ item }">
        <div class="bg-secondary p-4">
          <component :is="getComponent(item.i)" />
        </div>
      </template>
    </GridLayout>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TemperatureCard from '@/components/SensorComponent/TemperatureCard.vue';
import NewsComponent from '@/components/NewsCard.vue';
import MenuList from '@/components/MensaComponents/MenuList.vue';
import { GridLayout } from 'grid-layout-plus';

// Define the layout with unique ids
const layout = ref([
  { x: 0, y: 0, w: 3, h: 2, i: '0' }, // TemperatureCard component
  { x: 4, y: 0, w: 3, h: 2, i: '1' }, // TemperatureCard component
  //{ x: 10, y: 0, w: 3, h: 2, i: '7' }, // Another component placeholder
  //{ x: 0, y: 6, w: 2, h: 1, i: '7' }, // TemperatureCard component
  //{ x: 4, y: 6, w: 2, h: 2, i: '7' }, // Another component placeholder
  //{ x: 10, y: 6, w: 2, h: 2, i: '7' }, // Another component placeholder
]); 

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


