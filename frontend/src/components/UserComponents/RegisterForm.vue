<!--
  This component represents the user registration form.
  It allows users to input their username, email, password, and confirm password.
  The registration button is enabled only when the passwords match.
  Error messages are displayed if there are any issues during the registration process.
-->

<template>
  <div
    class="flex flex-col items-center justify-center mt-[50px] bg-lightShade rounded-xl shadow-md p-10 md:w-[600px] md:h-[500px] mx-auto"
  >
    <!-- Title -->
    <h2 class="text-4xl md:text-5xl font-bold text-center mb-8">User Register</h2>

    <!-- Username Input -->
    <input
      type="text"
      v-model="user.username"
      placeholder="Username"
      class="w-full p-4 mb-4 md:text-lg rounded-xl focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none"
    />

    <!-- Email Input -->
    <input
      type="email"
      v-model="user.email"
      placeholder="Email"
      class="w-full p-4 mb-4 md:text-lg rounded-xl focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none"
    />

    <!-- Password Input -->
    <input
      type="password"
      v-model="user.password"
      placeholder="Password"
      class="w-full p-4 mb-4 md:text-lg rounded-xl focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none"
    />

    <!-- Confirm Password Input -->
    <input
      type="password"
      v-model="checkPassword"
      placeholder="Confirm Password"
      class="w-full p-4 mb-4 md:text-lg rounded-xl focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none"
    />

    <!-- Registration Button -->
    <button
      @click="handleSignUp()"
      :disabled="!confirmassword"
      :class="confirmassword ? '' : 'cursor-not-allowed'"
      class="bg-secondary text-white md:text-lg rounded-lg px-6 py-2"
    >
      Register
    </button>

    <!-- Error Message Display -->
    <p class="mt-3 text-thd_ai_red">{{ errorMsg }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useUserStore } from '../../stores/UserStore'
import { storeToRefs } from 'pinia'

const userStore = useUserStore()
const { user, errorMsg } = storeToRefs(userStore)

// Reactive reference for confirming password
const checkPassword = ref('')

// Computed property to check if passwords match
const confirmassword = computed(() => checkPassword.value === user.value.password)

// Function to handle user registration action
const handleSignUp = async () => {
  try {
    await userStore.register()
  } catch (error) {
    console.log('Error: ', error)
  }
}
</script>
