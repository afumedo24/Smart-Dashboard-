import axios from 'axios'
;('use store to get the date and pass it to the url')

const date = '2024-06-03'
const mensaInstance = axios.create({
  baseURL: `https://openmensa.org/api/v2/canteens/198/days/${date}/meals`
})



export default mensaInstance
