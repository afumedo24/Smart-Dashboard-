<!-- 
    This component displays the menu of the canteen in Deggendorf. It utilizes the MenuCardComponent 
    to iterate through the 'menus' array fetched from the pinia store. The menu is fetched using the 
    'fetchMenu()' method from the store. This fetching occurs when the component is mounted on the DOM 
    or when the date changes (watch function). Date changes are facilitated by clicking on arrow icons 
    to navigate to the previous or next day. These actions trigger methods from the pinia store to update 
    the date accordingly. The component also includes a loading state, which displays while the menu is 
    being fetched. If no menu is available for the selected date, a message indicating its absence is shown.
-->

<template>
  <!-- Background for the menu list -->
  <div class="flex-row bg-lightShade rounded-xl px-6 py-2 md:px-20 md:py-10">
    <div class="flex justify-between items-center">
      <!-- Left arrow for navigating to the previous day -->
      <v-icon
        name="md-keyboardarrowleft"
        @click="mensaStore.setDateToPrevious()"
        class="w-14 md:w-20 lg:w-40"
        scale="6"
        fill="black"
      />
      <!-- Displaying the current date -->
      <h1 class="flex text-center text-2xl md:text-4xl lg:text-6xl font-semibold">
        Menu of {{ mensaStore.getDate }}
      </h1>
      <!-- Right arrow for navigating to the next day -->
      <v-icon
        name="md-keyboardarrowright"
        @click="mensaStore.setDateToNext()"
        class="w-14 md:w-20 lg:w-40"
        scale="6"
        fill="black"
      />
    </div>

    <!-- Loading state while fetching menu -->
    <div v-if="loading" class="text-center text-2xl md:text-4xl lg:text-6xl p-8 md:p-16">
      Loading...
    </div>

    <!-- Displayed when no menu is available -->
    <div
      v-else-if="menus.length === 0"
      class="text-center text-2xl md:text-4xl lg:text-6xl p-8 md:p-16"
    >
      No menu available
    </div>

    <!-- Rendering MenuCardComponent for each menu item -->
    <menu-card-component v-else v-for="menu in menus" :key="menu.id" :menu="menu" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import MenuCardComponent from './MenuCard.vue'
import { useMensaStore } from '@/stores/MensaStore'
import { storeToRefs } from 'pinia'

// Loading state to indicate data fetching status
const loading = ref(true)

// Using the MensaStore to fetch menus and manage dates
const mensaStore = useMensaStore()
const { menus } = storeToRefs(mensaStore)

// Fetch menu data when the component is mounted
onMounted(() => {
  mensaStore.fetchMenu()
  loading.value = false
})

// Watch for changes in the selected date and fetch new menu accordingly
watch(
  () => mensaStore.getDate,
  () => {
    loading.value = true
    mensaStore.fetchMenu()
    loading.value = false
  }
)
</script>
