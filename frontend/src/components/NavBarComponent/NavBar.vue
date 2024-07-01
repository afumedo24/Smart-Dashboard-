<!-- 
    This component represents the navigation bar fixed at the top of the page. 
    It includes the university logo, navigation links, and a login/logout button.
    Navigation links are defined in the 'navLinks' array. The active route is highlighted.
    The mobile menu can be toggled by clicking the burger menu icon.
    The login/logout button text and action are handled dynamically based on the 'isLogged' state.
-->

<template>
  <nav class="w-full top-0 left-0 drop-shadow-md fixed z-10">
    <div class="md:px-10 py-8 px-7 md:flex justify-between items-center bg-main text-white">
      <!-- Logo -->
      <img
        @click="router.push('/')"
        src="../../assets/thd_logo_weis.png"
        class="h-10 md:h-11 lg:h-14 cursor-pointer"
      />

      <!-- Burger Menu Icon -->
      <div class="fixed right-8 top-8 cursor-pointer md:hidden" @click="toggleMenu">
        <v-icon :name="isOpen ? 'io-close' : 'gi-hamburger-menu'" scale="2.3" fill="white" />
      </div>

      <!-- Navigation Links -->
      <ul
        class="md:flex md:items-center md:pb-0 pb-12 bg-main text-white absolute md:static left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in"
        :class="isOpen ? 'block' : 'hidden'"
      >
        <li v-for="link in navLinks" :key="link.text" class="md:ml-8 my-7 md:my-0">
          <RouterLink :to="link.path">
            <p
              class="font-medium cursor-pointer hover:text-darkAccent text-lg md:text-xl lg:text-2xl"
              :class="
                link.path === route.path
                  ? 'text-darkShade underline underline-offset-8'
                  : 'text-white'
              "
            >
              {{ link.text }}
            </p>
          </RouterLink>
        </li>

        <!-- Login/Logout Button -->
        <li class="md:ml-8 my-7 md:my-0">
          <button
            @click="handleAuthAction()"
            class="bg-secondary text-white py-2 px-6 rounded-lg text-lg md:text-xl lg:text-2xl md:py-3 md:px-8"
          >
            {{ isLogged ? 'Logout' : 'Login' }}
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import router from '@/router'
import { useUserStore } from '@/stores/UserStore'
import { storeToRefs } from 'pinia'

// Accessing user store to check login status
const userStore = useUserStore()
const { isLogged } = storeToRefs(userStore)

// State for mobile menu toggle
const isOpen = ref(false)

// Current route for highlighting active link
const route = useRoute()

// Navigation links array
const navLinks = [
  { text: 'Home', path: '/' },
  { text: 'Mensa', path: '/mensa' },
  { text: 'Sensor', path: '/sensor' },
  { text: 'Settings', path: '/settings' }
]

// Function to toggle mobile menu visibility
const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

// Function to handle login/logout action
const handleAuthAction = () => {
  if (isLogged.value) {
    // Logout if user is logged in
    userStore.logout()
    // Refresh the page to update state
    window.location.href = '/'
  } else {
    // Navigate to login page if user is not logged in
    router.push('/login')
  }
}
</script>
