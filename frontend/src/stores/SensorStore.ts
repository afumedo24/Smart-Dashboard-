import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import myRestInstance from '../services/axios/rest.config';
import type { SensorData, SensorSettings, Sensors } from '../services/types/Sensor.type';

export const useSensorStore = defineStore('sensor', () => {
    const sensorData = ref<Array<{ x: number; y: number }>>([]);
    const sensorDataLabels = ref<number[]>([]);
    const allSensors = ref<Sensors[]>([]);
    const frequency = ref<number>(5); // default frequency to 5 seconds


    const activeSensor = computed(() => {
        const activeSensor = allSensors.value.find((sensor) => sensor.isActive === true);
        return activeSensor ? activeSensor.name : '';
    });
    let timer = 0
    let intervalId: number | null = null;

    async function fetchCurrentSensorData() {
        try {
            if (timer === 0) {
                    const newEntry = { x: timer, y: 0};
                    sensorData.value.push(newEntry);
                    sensorDataLabels.value.push(timer);
                }
            if (timer % frequency.value === 0 && timer !== 0) {
                const response = await myRestInstance.get(`/sensor/1/data`);
                const newEntry = { x: timer, y: response.data.values };
                
                if (timer >= 12) {
                    sensorData.value.shift();
                    sensorDataLabels.value.shift();
                }
                
                sensorData.value.push(newEntry);
                sensorDataLabels.value.push(timer);
            }
            timer++;
        } catch (error) {
            console.error('Error fetching SensorData: ', error);
        }
    }

    const start = () => {
        if (intervalId === null) {
            intervalId = window.setInterval(fetchCurrentSensorData, frequency.value * 1000);
            console.log('Interval started');
        }
    };

    const stop = () => {
        if (intervalId !== null) {
            window.clearInterval(intervalId);
            intervalId = null;
            console.log('Interval stopped');
        }
    };

    async function fetchSensorSettings() {
        try {
            const response = await myRestInstance.get(`/sensor/settings`);
            allSensors.value = response.data.sensors;
            frequency.value = response.data.frequency;
        } catch (error) {
            console.error('Error fetching SensorSettings: ', error);
        }
    }

    async function updateSensorSettings() {
        const newSettings: SensorSettings = {
            sensors: allSensors.value,
            frequency: frequency.value,
        };
        try {
            await myRestInstance.put(`/sensor/settings`, newSettings);
            await fetchSensorSettings();
        } catch (error) {
            console.error('Error updating SensorSettings: ', error);
        }
    }

    return {
        sensorData,
        sensorDataLabels,
        allSensors,
        frequency,
        activeSensor,
        fetchCurrentSensorData,
        start,
        stop,
        fetchSensorSettings,
        updateSensorSettings,
    };
});