<template>
  <div class="flex justify-center items-center md:justify-normal">
    <div class="flex-col md:mt-20">
      <p class="md:pt-2 text-md md:text-lg lg:text-xl text-center md:text-left text-lightShade">
        THD Mensa
      </p>
      <h1
        class="text-3xl md:text-5xl lg:text-6xl text-center md:text-left font-bold md:drop-shadow-lg mb-5 md:mb-10"
      >
        Choose Healthy <br />
        & Fresh Food
      </h1>

      <button
        class="w-[200px] block mx-auto md:w-full py-3 md:py-5 px-5 md:px-6 mb-3 md:mb-5 bg-secondary text-white text-md md:text-lg lg:text-xl font-medium rounded-2xl md:rounded-3xl drop-shadow-md"
        @click="router.push('/mensa/menu')"
      >
        See Todays Menu
      </button>

      <button
        @click="openModal"
        class="w-[200px] block mx-auto md:w-full py-3 md:py-5 px-5 md:px-6 mb-3 md:mb-5 outline outline-darkShade text-md md:text-lg lg:text-xl font-medium rounded-2xl md:rounded-[24px] drop-shadow-md"
      >
        Choose a Day
      </button>
      <DatePickerModal v-model:isOpen="isModalOpened" @modal-close="closeModal" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import router from '../../router'
import DatePickerModal from './DatePickerModal.vue'

const isModalOpened = ref(false)

const openModal = () => {
  isModalOpened.value = true
}
const closeModal = () => {
  isModalOpened.value = false
}
</script>
