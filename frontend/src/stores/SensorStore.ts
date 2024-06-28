import { ref } from 'vue'
import { defineStore } from 'pinia'
import myRestInstance from '../services/axios/rest.config'
import type { SensorData, SensorSettings, Sensors } from '../services/types/Sensor.type'

export const useSensorStore = defineStore('sensor', () => {
    // this is the state of the store
    const sensorData = ref<SensorData[]>([])
    const sensorsSettings = ref<SensorSettings[]>([])
    const allsensors = ref<Sensors[]>([])
    const frequency = ref<number>(0)

    // this is the action of the store
    async function fetchSensorSettings() {
        try {
            const response = await myRestInstance.get(`/sensor/settings`)
            sensorsSettings.value = response.data
            allsensors.value = response.data.sensors
            frequency.value = response.data.frequency
            console.log('sensors saved: ', allsensors.value)
            console.log('frequency saved: ', frequency.value)
            console.log('Sensor Settings fetched: ', sensorsSettings.value)
        } catch (error) {
            console.error('Error fetching SensorSettings: ', error)
        }
    }

    async function updateSensorSettings() {
        const newSettings: SensorSettings = {
            sensors: allsensors.value,
            frequency: frequency.value
        }
        try {
            const response = await myRestInstance.put(`/sensor/settings`, newSettings)
            sensorsSettings.value = response.data
            allsensors.value = response.data.sensors
            frequency.value = response.data.frequency
            console.log('sensors saved: ', allsensors.value)
            console.log('frequency saved: ', frequency.value)
            console.log('Sensor Settings updated: ', sensorsSettings.value)
        } catch (error) {
            console.error('Error updating SensorSettings: ', error)
        }
    }

    return { sensorData, sensorsSettings, fetchSensorSettings, allsensors, frequency, updateSensorSettings }
})