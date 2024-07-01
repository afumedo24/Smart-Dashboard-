import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import myRestInstance from '../services/axios/rest.config'
import { type IUser } from '../services/types/User.type'

export const useUserStore = defineStore('user', () => {
  // State variables
  const user = ref(<IUser>{})
  const errorMsg = ref<string>('')

  // Getters
  const getUser = computed(() => user.value) // Retrieves current user object
  const getToken = computed(() => localStorage.getItem('token')) // Retrieves authentication token from localStorage
  const isLogged = computed(() => !!getToken.value) // Checks if user is logged in based on the presence of a token

  // Setter function to update user state
  const setUser = (newUser: IUser) => {
    user.value = newUser
  }

  // Actions

  // Registers a new user with the provided credentials
  async function register() {
    try {
      const response = await myRestInstance.post(`/auth/register`, {
        username: user.value.username,
        email: user.value.email,
        password: user.value.password
      })
      console.log('User registered: ', response.data)
      window.location.href = '/login' // Redirects to login page after successful registration
    } catch (error: any) {
      errorMsg.value = error.response.data.message // Sets error message if registration fails
      console.error('Error registering User: ', error)
    }
  }

  // Logs in the user with the provided credentials
  async function login() {
    try {
      const response = await myRestInstance.post(`/auth/login`, {
        username: user.value.username,
        password: user.value.password
      })
      localStorage.setItem('token', response.data.token) // Stores authentication token in localStorage
      window.location.href = '/' // Redirects to home page after successful login
    } catch (error: any) {
      errorMsg.value = error.response.data.message // Sets error message if login fails
      console.error('Error logging in User: ', error)
    }
  }

  // Logs out the user by removing the authentication token from localStorage
  async function logout() {
    localStorage.removeItem('token') // Removes token from localStorage
  }

  // Fetches the current user data from the server
  async function fetchUser() {
    try {
      const response = await myRestInstance.get(`/user`, {
        headers: {
          Authorization: `${getToken.value}`
        }
      })
      user.value = response.data // Updates user state with fetched user data
    } catch (error: any) {
      console.error('Error fetching User: ', error)
    }
  }

  // Updates the user data on the server
  async function updateUser() {
    try {
      const response = await myRestInstance.patch(`/user`, user.value, {
        headers: {
          Authorization: `${getToken.value}`
        }
      })
      user.value = response.data // Updates user state with updated user data
      window.location.href = '/settings' // Redirects to settings page after successful update
    } catch (error: any) {
      errorMsg.value = error.response.data.message // Sets error message if update fails
      console.error('Error updating User: ', error)
    }
  }

  // Deletes the user account from the server
  async function deleteUser() {
    try {
      const response = await myRestInstance.delete(`/user`, {
        headers: {
          Authorization: `${getToken.value}`
        }
      })
      console.log(response.data)
      localStorage.removeItem('token') // Removes token from localStorage upon deletion
      window.location.href = '/' // Redirects to home page after successful deletion
    } catch (error: any) {
      errorMsg.value = error.response.data.message // Sets error message if deletion fails
      console.error('Error deleting User: ', error)
    }
  }

  // Return reactive properties and action functions
  return {
    user,
    errorMsg,
    getUser,
    getToken,
    isLogged,
    setUser,
    fetchUser,
    updateUser,
    deleteUser,
    register,
    login,
    logout
  }
})