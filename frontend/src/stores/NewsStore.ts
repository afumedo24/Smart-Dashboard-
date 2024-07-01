import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import myRestInstance from '../services/axios/rest.config' // Import Axios instance for REST API
import { type INews } from '../services/types/News.type' // Import type definition for News

export const useNewsStore = defineStore('news', () => {
  // State variable: Array to store fetched news items
  const news = ref<INews[]>([])

  // Computed property: Retrieves the current state of news
  const getNews = computed(() => news.value)

  // Action: Fetches news data from the API
  async function fetchNews() {
    try {
      const response = await myRestInstance.get(`/services/news`)
      news.value = response.data // Update news array with fetched data
    } catch (error) {
      console.error('Error fetching News: ', error) // Log error if fetching fails
    }
  }

  // Return all reactive properties and functions
  return {
    news, 
    getNews, 
    fetchNews 
  }
})