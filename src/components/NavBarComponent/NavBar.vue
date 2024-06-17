<!-- 
      This is the NavBar component. It is a fixed component at the top of the page. 
      It contains the logo of the of the University, the navigation links, and a button for
      login/logout. The navigation links are defined in the navLinks array. The active 
      route is highlighted. The mobile menu is toggled by clicking on the burger menu icon.
      The login/logout button is handled by the handleAuthAction function. If the user is logged in,
      the button text will be 'Logout' and the user will be logged out when clicked. If the user is not logged in,
      the button text will be 'Login' and the user will be redirected to the login page when clicked.
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
        <!-- Button for Login/Logout -->
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
import router from '../../router'
import { useUserStore } from '../../stores/UserStore'
import { storeToRefs } from 'pinia'

// Access the user store and check if the user is logged in
// based on the state the Button text and actions will be changed
const userStore = useUserStore()
const { isLogged } = storeToRefs(userStore)

// a ref for toggling the mobile menu
const isOpen = ref(false)

// to access the current route for the highlighting
// of the active route on NavBar
const route = useRoute()

// Define navigation links
const navLinks = [
  { text: 'Home', path: '/' },
  { text: 'Mensa', path: '/mensa' },
  { text: 'Sensor', path: '/sensor' },
  { text: 'Settings', path: '/settings' }
]

// to open/close the mobile menu
const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

// a function to handle the login/logout action based on the isLogged state
const handleAuthAction = () => {
  /*
    Check if the user is logged in to determine the action
    If the user is logged in, call the logout function
    If the user is not logged in, navigate to the login page
  */
  if (isLogged.value) {
    // Call logout function from the user store and redirect to home page
    userStore.logout()
    // I am using window.location.href to completely refresh the page,
    // so that reactive data is updated
    window.location.href = '/'
  } else {
    // Navigate to the login page
    router.push('/login')
  }
}
</script>
