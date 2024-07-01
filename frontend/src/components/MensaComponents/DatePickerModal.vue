<!--
  This Vue component represents a modal for picking a date to set for the Mensa menu.
  It includes a date picker and a submit button.
  The modal closes when clicking outside its boundaries, this is done by using a special 
  hook from the Vueuse library.
-->
<template>
  <div v-if="isOpen" class="fixed z-[9998] top-0 left-0 w-full h-full bg-black bg-opacity-50">
    <div
      class="w-[330px] md:w-[500px] h-[260px] md:h-[300px] mx-auto my-[150px] p-5 md:p-8 bg-white rounded-md shadow-md flex flex-col items-center"
      ref="target"
    >
      <h3 class="text-3xl md:text-4xl lg:text-5xl font-bold">Pick a Date</h3>
      <div class="my-8 mt-5">
        <!-- Date picker component -->
        <DatePicker
          v-model="picked"
          class="w-[200px] h-[40px] p-4 mx-auto my-3 md:my-6 border rounded-md text-xl text-center border-black focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
        />
      </div>
      <!-- Submit button -->
      <!-- Submit button with function call and router push to MenuListPage, Stops click event propagation -->
      <button
        @click="submitHandler(), router.push('/mensa/menu')"
        @click.stop="emit('modal-close')"
        class="w-[200px] py-3 px-5 mb-3 bg-secondary text-white text-md md:text-lg lg:text-xl font-medium rounded-2xl"
      >
        Submit
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue'
import { onClickOutside } from '@vueuse/core'
import DatePicker from 'vue3-datepicker'
import { useMensaStore } from '@/stores/MensaStore'
import router from '@/router'

// Initialize Mensa store instance
const mensaStore = useMensaStore()

// Define reactive variables
const picked = ref(new Date()) // Date picker value
const target = ref(null) // Reference to modal DOM element

// Define props and emits for the component
const props = defineProps({
  isOpen: Boolean // Boolean prop to control modal visibility
})
const emit = defineEmits(['modal-close']) // Emits event to close modal

// Handle click outside modal to close it
onClickOutside(target, () => emit('modal-close'))

// Function to handle date submission
const submitHandler = () => {
  mensaStore.setDate(picked.value) // Set selected date in Mensa store
}
</script>
