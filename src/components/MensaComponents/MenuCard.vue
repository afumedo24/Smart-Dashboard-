<!-- 
    This is the the Menu Card Component for displaying the menu from the MensaAPI. This 
    contains a Card as the Background, and a the Menu objects name and type. These object
    is defined as a Prop, so that we can get it from the parent component 
-->
<template>
  <!-- the Card (Background) -->
  <div
    class="flex flex-col justify-end rounded-2xl px-8 pb-8 max-w-[730px] h-[240px] md:h-[320px] mx-auto my-8 bg-darkShade text-white"
  >
    <!-- Menu object: the type and name of the dish -->
    <div class="mt-3 gap-y-1 text-sm md:text-md">{{ menu.category }}</div>
    <h3 class="text-xl md:text-3xl font-medium text-darkAccent">{{ menu.name }}</h3>
    <p class="text-md md:text-lg">Price for Students: {{ menu.prices.students }} Є</p>
  </div>
</template>

<!-- 
    The Script setup for the Menu Card Component. This contains the Props for the Menu Card Component
    and gets the Props from the parent component
-->
<script setup lang="ts">
// import the type of Menu
import { type IMenu } from '../../services/types/MensaMenu.type'

// get the Props from the parent component
const props = defineProps<{ menu: IMenu }>()
</script>
