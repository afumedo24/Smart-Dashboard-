import { useNewsStore } from '../stores/NewsStore';
<template>
    <div class="bg-lightShade rounded-xl px-2 py-4">
        <div class="flex items-center justify-between gap-2">
            <div
                class="w-10 h-10 bg-main opacity-10 hover:opacity-50 rounded-full relative flex items-start justify-center">
                <v-icon name="md-keyboardarrowleft" @click="" class="w-10 md:w-12 lg:w-14" scale="2" fill="black" />
            </div>
            <div class="text-center">
                <h3 class="text-2xl font-bold">Hier finden Sie die neuesten Nachrichten </h3>
                <p class="text-lg">author </p>
            </div>
            <div class="w-10 h-10 bg-main opacity-10 hover:opacity-50 rounded-full flex items-start justify-center">
                <v-icon name="md-keyboardarrowright" @click="" class="w-10 md:w-12 lg:w-14" scale="2" fill="black" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useNewsStore } from '../stores/NewsStore'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

const newsstore = useNewsStore()
const { news } = storeToRefs(newsstore)

onMounted(() => {
    newsstore.fetchNews()
})
</script>