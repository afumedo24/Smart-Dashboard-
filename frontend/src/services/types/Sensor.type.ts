


export interface Sensors {
    id: number,
    name: string
    isActive: boolean,
}

export interface SensorData {
    x: number,
    y: number
}

export interface SensorSettings {
    sensors: Sensors[],
    frequency: number
}
