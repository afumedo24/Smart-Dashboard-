import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import myRestInstance from '../services/axios/rest.config'
import { type INews } from '../services/types/News.type'

export const useNewsStore = defineStore('news', () => {
  // this is the state of the store
    const news = ref<INews[]>([])

  // this is the getter of the store
  const getNews = computed(() => news.value)

  // this is the action of the store
  async function fetchNews() {
    try {
      const response = await myRestInstance.get(`/services/news`)
      news.value = response.data
    } catch (error) {
      console.error('Error fetching News: ', error)
    }
  }

  return { news, getNews, fetchNews }
})
