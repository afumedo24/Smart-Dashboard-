import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import myRestInstance from '../services/axios/rest.config'
import { type IUser } from '../services/types/User.type'

export const useUserStore = defineStore('user', () => {
  // this is the state of the store
  const user = ref(<IUser>{})
  const isLogged = ref<Boolean>(false)
  const errorMsg = ref<string>('')

  // this is the getter of the store
  //const getUser = computed(() => user.value)

  const getToken = computed(() => localStorage.getItem('token'))

  const setUser = (newUser: IUser) => {
    console.log('User set: ', newUser)
    user.value = newUser
  }
  // this is the action of the store
  async function login() {
    try {
      const response = await myRestInstance.post(`/auth/login`, {
        username: user.value.username,
        password: user.value.password
      })
      isLogged.value = true
      localStorage.setItem('token', response.data.token)
    } catch (error: any) {
      errorMsg.value = error.response.data.message
      isLogged.value = false
      console.error('Error fetching User: ', error)
    }
  }

  async function logout() {
    isLogged.value = false
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

  return { user, isLogged, errorMsg, getToken, setUser, fetchUser, login, logout }
})
