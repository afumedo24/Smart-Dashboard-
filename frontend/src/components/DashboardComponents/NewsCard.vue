<!--
  This Vue component displays a news slider with navigation buttons to cycle through news items.
  It fetches news data from the NewsStore, supports auto-sliding functionality, and opens news URLs
  in a new tab upon clicking. The component ensures responsive design and uses V-Icon for the arrow Icons.
-->
<template>
  <div class="bg-lightShade rounded-xl px-6 py-8">
    <!-- Navigation and news display section -->
    <div class="flex items-center justify-between gap-2">
      <!-- Previous news button -->
      <div class="w-10 h-10 bg-main opacity-10 hover:opacity-50 rounded-full relative flex items-start justify-center"
        @click="prevNews">
        <v-icon name="md-keyboardarrowleft" class="w-10 md:w-12 lg:w-14" scale="2" fill="black" />
      </div>
      <!-- Current news display -->
      <div v-if="currentNews" class="text-center p-2" @click="openNewsUrl()" :key="currentIndex">
        <h3 class="text-2xl text-darkAccent font-bold mb-2">News</h3>
        <p class="text-xl hover:underline hover:text-darkAccent">{{ currentNews.title }}</p>
      </div>
      <!-- Loading state if news is not yet loaded -->
      <div v-else class="text-center">
        <p class="text-lg font-light">Loading...</p>
      </div>
      <!-- Next news button -->
      <div class="w-10 h-10 bg-main opacity-10 hover:opacity-50 rounded-full flex items-start justify-center"
        @click="nextNews">
        <v-icon name="md-keyboardarrowright" class="w-10 md:w-12 lg:w-14" scale="2" fill="black" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useNewsStore } from '@/stores/NewsStore'
import { storeToRefs } from 'pinia'
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

// Access the NewsStore using pinia
const newsStore = useNewsStore()
const { news } = storeToRefs(newsStore)

// Reactive reference for current news index
const currentIndex = ref(0)

// Computed property to retrieve the current news item
const currentNews = computed(() => news.value[currentIndex.value] ?? null)

// Fetch news data when component is mounted
onMounted(() => {
  newsStore.fetchNews().then(() => {
    if (news.value.length > 0) {
      startAutoSlide() // Start auto-sliding if news data is available
    }
  })
})

// Clean up function to stop auto-sliding when component is unmounted
onBeforeUnmount(() => {
  stopAutoSlide()
})

// Interval ID for auto-slide functionality
const intervalId = ref<number | null>(null)

// Function to start auto-sliding through news items
const startAutoSlide = () => {
  intervalId.value = setInterval(() => {
    nextNews()
  }, 8000) // Auto-slide interval set to 8 seconds
}

// Function to stop auto-sliding
const stopAutoSlide = () => {
  if (intervalId.value !== null) {
    clearInterval(intervalId.value)
  }
}

// Function to navigate to the next news item
const nextNews = () => {
  if (news.value.length > 0) {
    currentIndex.value = (currentIndex.value + 1) % news.value.length
  }
}

// Function to navigate to the previous news item
const prevNews = () => {
  if (news.value.length > 0) {
    currentIndex.value = (currentIndex.value - 1 + news.value.length) % news.value.length
  }
}

// Function to open the URL of the current news item in a new tab
function openNewsUrl() {
  window.open(currentNews.value.url, '_blank')
}
</script>