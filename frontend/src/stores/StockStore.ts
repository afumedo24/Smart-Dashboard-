import { ref } from 'vue'
import { defineStore } from 'pinia'
import myRestInstance from '../services/axios/rest.config'

export const useStockStore = defineStore('stock', () => {
  // State variables for stock data and labels
  const stockData = ref<number[]>([])
  const stockLabels = ref<string[]>([])

  // Action: Fetches stock data from the API
  async function fetchStock() {
    try {
      const response = await myRestInstance.get(`/services/stocks`)
      // Extracts stock names into stockLabels array
      stockLabels.value = response.data.map((item: { name: string }) => item.name)
      // Extracts market capitalizations into stockData array
      stockData.value = response.data.map((item: { marketCap: number }) => item.marketCap)
    } catch (error) {
      console.error('Error fetching Stocks: ', error)
    }
  }

  // Return reactive properties and action function
  return { stockData, stockLabels, fetchStock }
})