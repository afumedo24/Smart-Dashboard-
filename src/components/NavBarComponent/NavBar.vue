<!-- 
  This is the Navigation Bar component. 
  It contains the logo, navigation links, and a burger menu for mobile devices.
  The navigation links are defined in the script setup block.
  The navigation links are displayed conditionally based on the isOpen ref.
  The toggleMenu function is used to toggle the isOpen ref when the burger menu is clicked.
  The RouterLink component is used to navigate to different routes in the application.
  The $route.path is used to determine the active route and apply styling accordingly.
-->

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import router from '../../router'
const isOpen = ref(false) // Ref for toggling the mobile menu

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

// Define navigation links
const navLinks = [
  { text: 'Home', path: '/' },
  { text: 'Mensa', path: '/mensa' },
  { text: 'Sensor', path: '/sensor' },
  { text: 'Settings', path: '/settings' }
]

const route = useRoute() // Access the current route
</script>

<!-- z-index added for the menu to overlay other stuff  -->

<template>
  <nav class="w-full top-0 left-0 drop-shadow-md fixed z-10">
    <div class="md:px-10 py-8 px-7 md:flex justify-between items-center bg-main text-white">
      <!-- Logo -->

      <img
        @click="router.push('/')"
        src="../../assets/thd_logo_weis.png"
        class="h-10 md:h-11 lg:h-14 cursor-pointer"
      />

      <!-- Burger Menu -->
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
        <li class="md:ml-8 my-7 md:my-0">
          <button
            @click="router.push('/login')"
            class="bg-secondary text-white py-2 px-6 rounded-lg text-lg md:text-xl lg:text-2xl md:py-3 md:px-8"
          >
            Login
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>
