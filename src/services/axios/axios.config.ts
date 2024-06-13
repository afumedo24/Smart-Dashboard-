import axios from 'axios'

const mensaInstance = axios.create({
  baseURL: `https://openmensa.org/api/v2/canteens/198/days`
})

export default mensaInstance
