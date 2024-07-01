<!--
  This Vue component represents the main page of the THD Mensa application.
  It displays a title, description, and buttons to navigate to today's menu or choose a specific day.
  It includes a DatePickerModal component for selecting a date.
-->
<template>
  <div class="flex justify-center items-center md:justify-normal">
    <div class="flex-col md:mt-20">
      <!-- Application title -->
      <p class="md:pt-2 text-md md:text-lg lg:text-xl text-center md:text-left text-lightShade">
        THD Mensa
      </p>
      <!-- Main heading -->
      <h1
        class="text-3xl md:text-5xl lg:text-6xl text-center md:text-left font-bold md:drop-shadow-lg mb-5 md:mb-10"
      >
        Choose Healthy <br />
        & Fresh Food
      </h1>

      <!-- Button to navigate to today's menu -->
      <button
        class="w-[200px] block mx-auto md:w-full py-3 md:py-5 px-5 md:px-6 mb-3 md:mb-5 bg-secondary text-white text-md md:text-lg lg:text-xl font-medium rounded-2xl md:rounded-3xl drop-shadow-md"
        @click="router.push('/mensa/menu')"
      >
        See Today's Menu
      </button>

      <!-- Button to open the date picker modal -->
      <button
        @click="openModal"
        class="w-[200px] block mx-auto md:w-full py-3 md:py-5 px-5 md:px-6 mb-3 md:mb-5 outline outline-darkShade text-md md:text-lg lg:text-xl font-medium rounded-2xl md:rounded-[24px] drop-shadow-md"
      >
        Choose a Day
      </button>

      <!-- Date picker modal component -->
      <DatePickerModal v-model:isOpen="isModalOpened" @modal-close="closeModal" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import router from '@/router'
import DatePickerModal from './DatePickerModal.vue'

// Define reactive variable for modal state
const isModalOpened = ref(false)

// Function to open the date picker modal
const openModal = () => {
  isModalOpened.value = true
}

// Function to close the date picker modal
const closeModal = () => {
  isModalOpened.value = false
}
</script>
