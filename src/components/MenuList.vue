<!-- 
    In this Component, we will display the menu of a specific date. For that we will use the
    MenuCardComponent, which will iterate through the Menu objects of the day. We will also 
    add a Date Picker to select the date of the menu. Or we can use the Keyboard Arrow Icons
    to navigate through the dates. 
-->

<template>
  <!-- The Background for the List -->
  <div class="bg-thd_grey rounded-lg px-20 py-10 flex-row">
    <div class="flex justify-between items-center">
      <v-icon name="md-keyboardarrowleft" scale="6" fill="#1A4273" />
      <!-- @click="previousDate" -->

      <div class="flex gap-5 font-saira text-6xl font-semibold">
        <h1>Menu of 14.04.2024</h1>
        <!-- <vue-date-picker v-model="selectedDate" /> -->
      </div>

      <v-icon name="md-keyboardarrowright" scale="6" fill="#1A4273" />
      <!-- @click="nextDate" -->
    </div>

    <menu-card-component v-for="menu in menus" :key="menu.name" :menu="menu" />
  </div>
</template>

<!-- 
    This contains the Menu objects for the Menu Card Component (later API call from the store)
    and the functions for the Date Picker
-->
<script setup lang="ts">
import { ref } from 'vue'
import MenuCardComponent from './MenuCardComponent.vue'
//import VueDatePicker from '@vuepic/vue-datepicker'
//import '@vuepic/vue-datepicker/dist/main.css'

// the Menu object for the Menu Card Component
interface Menu {
  dish_type: string
  dish_name: string
}
// dummy data for the menu
const menus = ref<Menu[]>([
  {
    dish_type: 'Main Dish',
    dish_name: 'Wiener Schnitzel'
  },
  {
    dish_type: 'Main Dish',
    dish_name: 'Pizza Margherita'
  },
  {
    dish_type: 'Main Dish',
    dish_name: 'Coke'
  },
  {
    dish_type: 'Main Dish',
    dish_name: 'Chai'
  },
  {
    dish_type: 'Main Dish',
    dish_name: 'Wiener Schnitzel'
  }
])

/*
const selectedDate = ref<Date | null>(new Date()) // Initialize with current date
const previousDate = () => {
  const currentDate = selectedDate.value
  currentDate.setDate(currentDate.getDate() - 1)
  selectedDate.value = new Date(currentDate)
}

const nextDate = () => {
  const currentDate = selectedDate.value
  currentDate.setDate(currentDate.getDate() + 1)
  selectedDate.value = new Date(currentDate)
}*/
</script>
