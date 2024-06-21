import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import myRestInstance from '../services/axios/rest.config'
import { type IUser } from '../services/types/User.type'

export const useUserStore = defineStore('user', () => {
  // this is the state of the store
  const user = ref(<IUser>{})
  const errorMsg = ref<string>('')

  // this is the getter of the store
  const getUser = computed(() => user.value)
  const getToken = computed(() => localStorage.getItem('token'))
  const isLogged = computed(() => !!getToken.value)

  const setUser = (newUser: IUser) => {
    user.value = newUser
  }

  // this is the action of the store
  async function register() {
    try {
      const response = await myRestInstance.post(`/auth/register`, {
        username: user.value.username,
        email: user.value.email,
        password: user.value.password
      })
      console.log('User registered: ', response.data)
      window.location.href = '/login'
    } catch (error: any) {
      errorMsg.value = error.response.data.message
      console.error('Error fetching User: ', error)
    }
  }

  async function login() {
    try {
      const response = await myRestInstance.post(`/auth/login`, {
        username: user.value.username,
        password: user.value.password
      })
      localStorage.setItem('token', response.data.token)
      window.location.href = '/'
    } catch (error: any) {
      errorMsg.value = error.response.data.message
      console.error('Error fetching User: ', error)
    }
  }

  async function logout() {
    localStorage.removeItem('token')
  }

  async function fetchUser() {
    try {
      const response = await myRestInstance.get(`/user`, {
        headers: {
          Authorization: `${getToken.value}`
        }
      })
      user.value = response.data
    } catch (error: any) {
      console.error('Error fetching User: ', error)
    }
  }

  async function updateUser() {
    try {
      const response = await myRestInstance.patch(`/user`, user.value, {
        headers: {
          Authorization: `${getToken.value}`
        }
      })
      user.value = response.data
      window.location.href = '/settings'
    } catch (error: any) {
      errorMsg.value = error.response.data.message
      console.error('Error updating User: ', error)
    }
  }

  async function deleteUser() {
    try {
      const response = await myRestInstance.delete(`/user`, {
        headers: {
          Authorization: `${getToken.value}`
        }
      })
      console.log(response.data)
      localStorage.removeItem('token')
      window.location.href = '/'
    } catch (error: any) {
      errorMsg.value = error.response.data.message
      console.error('Error updating User: ', error)
    }
  }

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
