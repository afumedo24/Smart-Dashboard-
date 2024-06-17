<template>
  <div
    class="flex flex-col items-center justify-center mt-[50px] bg-lightShade rounded-xl shadow-md p-10 md:w-[600px] md:h-[500px] mx-auto"
  >
    <h2 class="text-4xl md:text-5xl font-bold text-center mb-8">User Register</h2>
    <input
      type="text"
      v-model="user.username"
      placeholder="Username"
      class="w-full p-4 mb-4 md:text-lg rounded-xl focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none"
    />
    <input
      type="email"
      v-model="user.email"
      placeholder="Email"
      class="w-full p-4 mb-4 md:text-lg rounded-xl focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none"
    />
    <input
      type="password"
      v-model="user.password"
      placeholder="Password"
      class="w-full p-4 mb-4 md:text-lg rounded-xl focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none"
    />
    <input
      type="password"
      v-model="checkPassword"
      placeholder="Confirm Password"
      class="w-full p-4 mb-4 md:text-lg rounded-xl focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none"
    />
    <button
      @click="handleSignUp()"
      :disabled="!confirmassword"
      :class="confirmassword ? '' : '  cursor-not-allowed'"
      class="bg-secondary text-white md:text-lg rounded-lg px-6 py-2"
    >
      Register
    </button>

    <p class="mt-3 text-thd_ai_red">{{ errorMsg }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useUserStore } from '../../stores/UserStore'
import { storeToRefs } from 'pinia'

const userStore = useUserStore()
const { user, errorMsg } = storeToRefs(userStore)

const checkPassword = ref('')
const confirmassword = computed(() => checkPassword.value === user.value.password)
const handleSignUp = async () => {
  try {
    userStore.register()
  } catch (error) {
    console.log('Error: ', error)
  }
}
</script>
