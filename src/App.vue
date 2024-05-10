<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div class="bg-gradient-to-t from-thd_donaublue to-thd_darkblue h-screen">
    <NavBar />
    <RouterView />
  </div>
</template>
