<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)
const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
// Define navigation links
const navLinks = [
  { text: 'Home', path: '/' },
  { text: 'Mensa', path: '/mensa' },
  { text: 'Health', path: '/health' },
  { text: 'Appointment', path: '/appointment' }
]
</script>

<template>
  <nav class="w-full fixed top-0 left-0 drop-shadow-md">
    <div class="md:px-10 py-8 px-7 md:flex justify-between items-center bg-thd_darkblue text-white">
      <!-- Logo & Header here -->
      <!-- 
        <div class="flex text-2xl cursor-pointer items-center gap-1">
          <v-icon name="si-homeassistant" scale="2.3" fill="#1A4273" />
          <span class="font-bold lg:text-3xl"> Smart Home App </span>
        </div>
   -->
      <div>
        <img src="../assets/thd_logo_weis.png" class="h-12 md:h-14 cursor-pointer" />
      </div>

      <!-- BurgerMenu  here -->
      <div class="absolute right-8 top-3.5 cursor-pointer md:hidden" @click="toggleMenu">
        <v-icon :name="isOpen ? 'io-close' : 'gi-hamburger-menu'" scale="2.3" fill="white" />
      </div>

      <!-- Navigation Links here -->
      <div>
        <!-- 
        <RouterView />
        -->
        <ul
          class="md:flex md:items-center md:pb-0 pb-12 bg-thd_darkblue text-white absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in"
          :class="isOpen ? 'block' : 'hidden'"
        >
          <RouterLink v-for="(links, index) in navLinks" :key="index" :to="links.path">
            <p
              class="my-7 md:my-0 md:ml-8 font-saira font-medium text-2xl cursor-pointer hover:text-thd_donaublue"
              :class="links.path === $route.path ? 'text-thd_ai_red' : 'text-white'"
            >
              {{ links.text }}
            </p>
          </RouterLink>

          <button
            class="bg-thd_donaublue text-white text-2xl py-3 px-8 md:ml-8 rounded-[10px] md:static"
          >
            Login
          </button>
        </ul>
      </div>
    </div>
  </nav>

  <slot />
</template>
