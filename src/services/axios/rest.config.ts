import axios from 'axios'

const myRestInstance = axios.create({
  baseURL: `http://localhost:2424/api`
})

export default myRestInstance
