<!--
  This Vue component includes an image and a menu page card.
  The image is conditionally displayed on medium screens and larger, using responsive classes.
  The menu page card component is imported from the MensaComponents directory.
  The layout is structured with responsive margins and padding for proper spacing.
-->

<template>
  <img src="../assets/cut.png" class="absolute hidden md:block md:h-100%" />
  <div class="mt-[120px] py-8 px-6 md:ml-10 lg:ml-20">
    <menu-page-card />
  </div>
</template>

<script setup>
import MenuPageCard from '../components/MensaComponents/MensaPageCard.vue'
</script>
