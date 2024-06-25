<template>
    <div class="bg-lightShade rounded-xl px-6 py-8">
        <div class="flex items-center justify-between gap-2">
            <div class="w-10 h-10 bg-main opacity-10 hover:opacity-50 rounded-full relative flex items-start justify-center"
                @click="prevNews">
                <v-icon name="md-keyboardarrowleft" class="w-10 md:w-12 lg:w-14" scale="2" fill="black" />
            </div>
            <div v-if="currentNews" class="text-center p-2" @click="openNewsUrl()" :key="currentIndex">
                <h3 class="text-2xl font-medium mb-2">News </h3>
                <p class="text-xl  text-justify hover:underline">{{ currentNews.title }}</p>
            </div>
            <div v-else class="text-center">
                <p class="text-lg font-light">Loading...</p>
            </div>
            <div class="w-10 h-10 bg-main opacity-10 hover:opacity-50 rounded-full flex items-start justify-center"
                @click="nextNews">
                <v-icon name="md-keyboardarrowright" class="w-10 md:w-12 lg:w-14" scale="2" fill="black" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useNewsStore } from '../stores/NewsStore';
import { storeToRefs } from 'pinia';
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';

const newsStore = useNewsStore();
const { news } = storeToRefs(newsStore);

const currentIndex = ref(0);

const currentNews = computed(() => news.value[currentIndex.value] ?? null);

onMounted(() => {
    newsStore.fetchNews().then(() => {
        if (news.value.length > 0) {
            startAutoSlide();
        }
    });
});

onBeforeUnmount(() => {
    stopAutoSlide();
});

const intervalId = ref<number | null>(null);

const startAutoSlide = () => {
    intervalId.value = setInterval(() => {
        nextNews();
    }, 8000);
};

const stopAutoSlide = () => {
    if (intervalId.value !== null) {
        clearInterval(intervalId.value);
    }
};

const nextNews = () => {
    if (news.value.length > 0) {
        currentIndex.value = (currentIndex.value + 1) % news.value.length;
    }
};

const prevNews = () => {
    if (news.value.length > 0) {
        currentIndex.value = (currentIndex.value - 1 + news.value.length) % news.value.length;
    }
};

function openNewsUrl() {
    window.open(currentNews.value.url, '_blank');
}
</script>
