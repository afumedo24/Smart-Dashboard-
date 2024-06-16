<!-- 
    In this Component, we will display the menu of the canteen in deggendorf. For that we will use the
    MenuCardComponent, which will iterate through the Menu object from the pinia store. We fetch the Menu of the 
    canteen by calling the fetchMenu() method from the store. This happens either when this component is mounted on 
    the DOM or when the date is changed (watch function). The date can be changed by clicking on the arrows. It 
    either goes to the next day or the previous day. This is done by calling the associated methods from the pinia 
    store. We also have a loading state, which will be displayed if the Menu is loading. If there is no Menu 
    available, we will display a message that there is no Menu available. 
-->

<template>
  <!-- The Background for the List -->
  <div class="flex-row bg-lightShade rounded-xl px-6 py-2 md:px-20 md:py-10">
    <div class="flex justify-between items-center">
      <!-- left arrow for setting the date to the previous day -->
      <v-icon
        name="md-keyboardarrowleft"
        @click="mensaStore.setDateToPrevious()"
        class="w-14 md:w-20 lg:w-40"
        scale="6"
        fill="black"
      />
      <!-- displaying the Date  -->
      <h1 class="flex text-center text-2xl md:text-4xl lg:text-6xl font-semibold">
        Menu of
        {{ mensaStore.getDate }}
      </h1>

      <!-- right arrow for setting the date to the next day -->
      <v-icon
        name="md-keyboardarrowright"
        @click="mensaStore.setDateToNext()"
        class="w-14 md:w-20 lg:w-40"
        scale="6"
        fill="black"
      />
    </div>
    <div v-if="loading" class="text-center text-2xl md:text-4xl lg:text-6xl p-8 md:p-16">
      Loading...
    </div>
    <div
      v-else-if="menus.length === 0"
      class="text-center text-2xl md:text-4xl lg:text-6xl p-8 md:p-16"
    >
      No menu available
    </div>

    <menu-card-component v-else v-for="menu in menus" :key="menu.name" :menu="menu" />
  </div>
</template>

<!-- 
   
-->
<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import MenuCardComponent from './MenuCard.vue'

import { useMensaStore } from '../../stores/MensaStore'
import { storeToRefs } from 'pinia'

const loading = ref(true)
const mensaStore = useMensaStore()
const { menus } = storeToRefs(mensaStore)
onMounted(() => {
  mensaStore.fetchMenu()
  loading.value = false
})

watch(
  () => mensaStore.getDate,
  () => {
    loading.value = true
    mensaStore.fetchMenu()
    loading.value = false
  }
)
</script>
