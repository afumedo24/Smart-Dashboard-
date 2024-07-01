<!--
  This Vue component displays today's menu fetched from the MensaStore.
  It shows the categories and names of the available menu items.
  If menus are being fetched, it shows a loading indicator.
  If no menus are available, it displays a message indicating so.
-->
<template>
  <div class="bg-darkShade rounded-xl px-6 py-8 text-white">
    <div class="text-center">
      <h3 class="text-xl font-medium mb-2">Todays Menu</h3>
      <!-- Loading indicator -->
      <div v-if="loading" class="p-2">
        <p class="text-lg font-light">Loading...</p>
      </div>
      <!-- No menu available message -->
      <div v-else-if="menus.length === 0" class="text-xl md:text-2xl lg:text-3xl p-8">
        No menu available
      </div>
      <!-- Display menus -->
      <div v-else class="p-1 mx-3">
        <div v-for="menu in menus" :key="menu.id" class="p-1 mx-3">
          <p class="text-[9px]">{{ menu.category }}</p>
          <p class="text-md text-darkAccent">{{ menu.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useMensaStore } from '../../stores/MensaStore'
import { storeToRefs } from 'pinia'

// Define reactive variables
const loading = ref(true)
const mensaStore = useMensaStore()
const { menus } = storeToRefs(mensaStore)

// Fetch menu data when component is mounted
onMounted(() => {
  mensaStore.fetchMenu()
  loading.value = false // Set loading to false after fetch is complete
})
</script>
