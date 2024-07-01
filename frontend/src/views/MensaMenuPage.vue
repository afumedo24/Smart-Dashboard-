<!--
  This Vue component renders a menu list using the MenuList component imported from the MensaComponents directory.
  The component is styled with responsive margins and padding to ensure proper layout spacing on different screen sizes.
-->

<template>
  <div class="mt-[120px] py-8 px-6 md:px-32">
    <menu-list> </menu-list>
  </div>
</template>

<script setup>
import MenuList from '../components/MensaComponents/MenuList.vue'
</script>
