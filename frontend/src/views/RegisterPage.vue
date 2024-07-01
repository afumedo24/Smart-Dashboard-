<!--
  This Vue component renders a registration form using the RegisterForm component imported from the UserComponents directory.
  It is styled with responsive margins and padding to ensure proper layout spacing, especially on medium-sized screens and larger.
-->

<template>
  <div class="mt-[120px] py-8 px-6 md:px-32">
    <register-form />
  </div>
</template>

<script setup lang="ts">
import RegisterForm from '../components/UserComponents/RegisterForm.vue'
</script>
