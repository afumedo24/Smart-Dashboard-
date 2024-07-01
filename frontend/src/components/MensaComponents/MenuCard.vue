<!-- 
    This is the Menu Card Component for displaying menu items fetched from the MensaAPI.
    It features a card-style background and displays details such as category, name, and prices.
    The 'menu' object is passed as a prop from the parent component.
-->
<template>
  <!-- Card (Background) -->
  <div
    class="flex flex-col justify-end rounded-2xl px-8 pb-8 max-w-[730px] h-[240px] md:h-[320px] mx-auto my-8 bg-darkShade text-white">
    <!-- Displaying menu category -->
    <div class="mt-3 gap-y-1 text-sm md:text-md">{{ menu.category }}</div>
    <!-- Displaying menu name -->
    <h3 class="text-xl md:text-3xl font-medium text-darkAccent">{{ menu.name }}</h3>
    <!-- Displaying price for students -->
    <p class="text-md md:text-lg">Price for Students: {{ menu.prices.students }} €</p>
  </div>
</template>

<script setup lang="ts">
// Importing the type of 'menu' object
import type { IMenu } from '@/services/types/MensaMenu.type'

// Defining props to receive 'menu' from parent component
const props = defineProps<{ menu: IMenu }>()
</script>