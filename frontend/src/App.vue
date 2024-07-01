<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBarComponent/NavBar.vue'
</script>

<template>
  <div class="bg-white font-saira">
    <!-- embedded NavBar in every Page -->
    <NavBar />
    <RouterView />
  </div>
</template>
