<template>
    <div class="bg-darkShade rounded-xl px-6 py-8 text-white ">
        <div class="text-center">
            <h3 class="text-xl font-medium mb-2"> Todays Menu </h3>
            <div v-if="loading" class=" p</div>-2">
                <p class="text-lg font-light">Loading...</p>
            </div>
            <div v-else-if="menus.length === 0" class=" text-xl md:text-2xl lg:text-3xl p-8">
                No menu available
            </div>
            <div v-else class="p-1 mx-3">
                <div v-for="menu in menus" :key="menu.id" class="p-1 mx-3">
                    <p class="text-[9px]">{{ menu.category }}</p>
                    <p class="text-md text-darkAccent">{{ menu.name }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { useMensaStore } from '../../stores/MensaStore'
import { storeToRefs } from 'pinia'

const loading = ref(true)
const mensaStore = useMensaStore()
const { menus } = storeToRefs(mensaStore)

onMounted(() => {
    mensaStore.fetchMenu()
    loading.value = false
    console.log(menus)
})

</script>
