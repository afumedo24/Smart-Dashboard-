<!--
  This Vue component renders a login page with a responsive layout. 
  It includes a LoginForm component which is imported from the UserComponents directory.
  The component is wrapped in a div with responsive padding for different screen sizes.
-->

<template>
  <div class="mt-[120px] py-8 px-6 md:px-32">
    <login-form />
  </div>
</template>

<script setup lang="ts">
import LoginForm from '@/components/UserComponents/LoginForm.vue'
</script>
