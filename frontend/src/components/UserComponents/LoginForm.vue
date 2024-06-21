<template>
  <div
    class="flex flex-col items-center justify-center mt-[80px] bg-lightShade rounded-xl shadow-md p-10 md:w-[600px] md:h-[380px] mx-auto"
  >
    <h2 class="text-4xl md:text-5xl font-bold text-center mb-8">User Login</h2>
    <input
      type="text"
      v-model="user.username"
      placeholder="Username"
      class="w-full p-4 mb-4 md:text-lg rounded-xl focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none"
    />
    <input
      type="password"
      v-model="user.password"
      placeholder="Password"
      class="w-full p-4 mb-4 md:text-lg rounded-xl focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none"
    />
    <button @click="handleLogin()" class="bg-secondary text-white md:text-lg rounded-lg px-6 py-2">
      Login
    </button>
    <p
      @click="router.push('/register')"
      class="mb-2 p-2 text-center text-sm font-light text-darkShade hover:underline cursor-pointer"
    >
      Register
    </p>

    <p class="text-thd_ai_red">{{ errorMsg }}</p>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '../../stores/UserStore'
import { storeToRefs } from 'pinia'
import router from '../../router'

const userStore = useUserStore()
const { user, errorMsg } = storeToRefs(userStore)

const handleLogin = async () => {
  try {
    await userStore.login()
  } catch (error) {
    console.log('Error: ', error)
  }
}
</script>
