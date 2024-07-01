import { ref } from 'vue'
import { defineStore } from 'pinia'
import myRestInstance from '../services/axios/rest.config'

export const useStockStore = defineStore('stock', () => {
  // this is the state of the store
  const stockData = ref(<number[]>[])
  const stockLabels = ref(<string[]>[])

  // this is the action of the store
  async function fetchStock() {
    try {
      const response = await myRestInstance.get(`/services/stocks`)
      stockLabels.value = response.data.map((item: { name: string }) => item.name)
      stockData.value = response.data.map((item: { marketCap: number }) => item.marketCap)
    } catch (error) {
      console.error('Error fetching Stocks: ', error)
    }
  }

  return { stockData, stockLabels, fetchStock }
})
