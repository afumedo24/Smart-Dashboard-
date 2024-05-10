<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div class="bg-white h-screen">
    <NavBar />
    <RouterView />
  </div>
</template>
