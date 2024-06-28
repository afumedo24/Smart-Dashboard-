<template>
    <div
        class="flex flex-col items-center justify-center mt-12 bg-lightShade rounded-xl shadow-md p-10 md:w-[600px] mx-auto">
        <h2 class="text-4xl md:text-5xl font-bold text-center mb-8">Sensor Settings</h2>

        <div v-if="!allSensors && !frequency" class="text-center">
            <p class="text-center text-2xl md:text-4xl lg:text-6xl p-8 md:p-16">Loading...</p>
        </div>

        <div v-else class="">
            <div v-for="sensor in allSensors" :key="sensor.id" class="my-2 ">
                <input type="checkbox" :id="`checkbox-${sensor.id}`" v-model="sensor.isActive"
                    @change="handleCheckboxChange(sensor.id)" :disabled="!isEditing" />
                <label :for="`checkbox-${sensor.id}`" class="w-full p-4 mb-4 md:text-xl ">
                    {{ sensor.name }}</label>
            </div>
            <div class="w-full mb-4">
                <label for="frequency-input" class="block text-md font-medium">Frequency</label>
                <input id="frequency-input" type="text" v-model="frequency" :disabled="!isEditing"
                    class="w-full p-4 md:text-lg rounded-xl focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none" />
            </div>
        </div>
        <button @click="toggleEditing" class="bg-secondary text-white md:text-lg rounded-lg px-6 py-2">
            {{ isEditing ? 'Submit' : 'Update' }}
        </button>
    </div>
</template>



<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useSensorStore } from '../stores/SensorStore';
import { storeToRefs } from 'pinia';

// Fetch sensor store and reactive properties
const sensorStore = useSensorStore();
const { allSensors, frequency } = storeToRefs(sensorStore);

const isEditing = ref(false);

onMounted(async () => {
    await sensorStore.fetchSensorSettings();
});

// Method to handle checkbox selection
const handleCheckboxChange = (id: number) => {
    // Iterate over all sensors and update their isActive property
    allSensors.value.forEach(sensor => {
        sensor.isActive = sensor.id === id;
    });
};

// Toggle editing state
const toggleEditing = () => {
    if (isEditing.value) {
        // Handle the submit action
        sensorStore.updateSensorSettings();
    }
    isEditing.value = !isEditing.value;
};
</script>
