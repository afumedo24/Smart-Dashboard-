<template>
  <div
    class="flex flex-col items-center justify-center mt-[50px] bg-lightShade rounded-xl shadow-md p-10 md:w-[600px] mx-auto"
  >
    <h2 class="text-4xl md:text-5xl font-bold text-center mb-8">User Form</h2>
    <input
      type="text"
      v-model="user.username"
      :disabled="!isEditing"
      placeholder="Username"
      class="w-full p-4 mb-4 md:text-lg rounded-xl focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none"
    />
    <input
      type="email"
      v-model="user.email"
      :disabled="!isEditing"
      placeholder="Email"
      class="w-full p-4 mb-4 md:text-lg rounded-xl focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none"
    />
    <input
      type="password"
      v-model="user.password"
      disabled
      placeholder="Password"
      class="w-full p-4 mb-4 md:text-lg rounded-xl focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none"
    />
    <button
      @click="toggleEditing()"
      class="bg-secondary text-white md:text-lg rounded-lg px-6 py-2"
    >
      {{ isEditing ? 'Submit' : 'Update' }}
    </button>
    <p
      v-if="isEditing"
      @click="userStore.deleteUser()"
      class="mb-3 p-2 text-center text-sm font-light text-darkShade hover:underline cursor-pointer"
    >
      Delete User
    </p>

    <p class="mt-3 text-thd_ai_red">{{ errorMsg }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useUserStore } from '../../stores/UserStore'
import { storeToRefs } from 'pinia'

const userStore = useUserStore()
const { user, errorMsg } = storeToRefs(userStore)

const isEditing = ref(false)

const toggleEditing = () => {
  if (isEditing.value) {
    userStore.updateUser()
  }
  isEditing.value = !isEditing.value
}

onMounted(() => {
  userStore.fetchUser()
})
</script>
