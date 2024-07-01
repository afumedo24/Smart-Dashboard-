<!--
  This Vue component renders a user form and sensor settings.
  Both components are placed inside a div with responsive margins and padding to ensure proper spacing and layout.
-->
<template>
  <div class="mt-[120px] py-8 px-6 md:px-32">
    <user-form />
    <sensor-settings />
  </div>
</template>

<script setup lang="ts">
import UserForm from '@/components/UserComponents/UserForm.vue'
import SensorSettings from '@/components/SettingsComponent/SensorSettings.vue'
</script>
