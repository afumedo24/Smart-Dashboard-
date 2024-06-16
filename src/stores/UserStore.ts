import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { type IUser } from '../services/types/User.type'

export const useUserStore = defineStore('user', () => {
  // this is the state of the store
  const user = ref<IUser[]>([])
  const isLogged = ref<Boolean>(false)
  const token = ref<string>('')

    // this is the getter of the store
    const getUser = computed(() => user.value)

    // this is the action of the store

  return {}
})
