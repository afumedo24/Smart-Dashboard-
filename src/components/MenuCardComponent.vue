<!-- 
  For Background Images, add the following code to the Card Component
  ___________________________________________________________________
    <img
      src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a"
      alt="University of Southern California"
      class="absolute inset-0 h-full w-full object-cover"
    />
-->

<!-- 
    This is the the Menu Card Component for displaying the menu from the MensaAPI. This 
    contains a Card as the Background, and a the Menu objects name and type. These object
    is defined as a Prop, so that we can get it from the parent component 
-->
<template>
  <!-- remove Background Color (bg-[#4b5563]) if Background Images are added -->
  <!-- the Card (Background) -->
  <div
    class="relative flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 max-w-[630px] h-[320px] mx-auto mt-8 bg-[#4b5563]"
  >
    <!-- Menu object: the type and name of the dish -->
    <div class="mt-3 gap-y-1 overflow-hidden text-lg text-white">{{ menu.category }}</div>
    <h3 class="text-3xl font-medium text-white">{{ menu.name }}</h3>
    <p>Price for students: {{ menu.prices.students }} $</p>
  </div>
</template>

<!-- 
    The Script setup for the Menu Card Component. This contains the Props for the Menu Card Component
    and gets the Props from the parent component
-->
<script setup lang="ts">
// the Props for the Menu Card Component
import { type Menu } from '../services/types/MensaMenu.type'
// get the Props from the parent component
const props = defineProps<{ menu: Menu }>()
</script>
