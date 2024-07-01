<!--
  This component serves as a user form for managing user details.
  
  Users can view and edit their username and email.
  Password field is disabled for security reasons and cannot be edited.
  
  The form includes:
  - Username input field, which is editable when in editing mode.
  - Email input field, editable when in editing mode.
  - Password input field, disabled to prevent editing.
  
  The "Submit" button toggles between "Submit" and "Update" based on the editing state:
  - When not editing, it displays "Update" to indicate readiness to edit user details.
  - When editing, it displays "Submit" to confirm changes made to user details.
  
  The "Delete User" link is visible only in editing mode, allowing users to delete their account.

  Error messages are displayed if there are issues during the update or delete operations.
-->
<template>
  <div
    class="flex flex-col items-center justify-center mt-[50px] bg-lightShade rounded-xl shadow-md p-10 md:w-[600px] mx-auto"
  >
    <!-- Title -->
    <h2 class="text-4xl md:text-5xl font-bold text-center mb-8">User Form</h2>

    <!-- Username Input -->
    <input
      type="text"
      v-model="user.username"
      :disabled="!isEditing"
      placeholder="Username"
      class="w-full p-4 mb-4 md:text-lg rounded-xl focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none"
    />

    <!-- Email Input -->
    <input
      type="email"
      v-model="user.email"
      :disabled="!isEditing"
      placeholder="Email"
      class="w-full p-4 mb-4 md:text-lg rounded-xl focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none"
    />

    <!-- Password Input -->
    <input
      type="password"
      v-model="user.password"
      disabled
      placeholder="Password"
      class="w-full p-4 mb-4 md:text-lg rounded-xl focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none"
    />

    <!-- Submit/Update button -->
    <button
      @click="toggleEditing()"
      class="bg-secondary text-white md:text-lg rounded-lg px-6 py-2"
    >
      {{ isEditing ? 'Submit' : 'Update' }}
    </button>

    <!-- Delete User link -->
    <p
      v-if="isEditing"
      @click="userStore.deleteUser()"
      class="mb-3 p-2 text-center text-sm font-light text-darkShade hover:underline cursor-pointer"
    >
      Delete User
    </p>

    <!-- Error Message Display -->
    <p class="mt-3 text-thd_ai_red">{{ errorMsg }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useUserStore } from '../../stores/UserStore'
import { storeToRefs } from 'pinia'

const userStore = useUserStore()
const { user, errorMsg } = storeToRefs(userStore)

// Reactive state to track editing mode
const isEditing = ref(false)

// Function to toggle editing mode
const toggleEditing = () => {
  if (isEditing.value) {
    userStore.updateUser()
  }
  isEditing.value = !isEditing.value
}

// Fetch user data on component mount
onMounted(() => {
  userStore.fetchUser()
})
</script>
