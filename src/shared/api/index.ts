import axios from "axios"

const API = process.env.OPENWEATHER_API
const API_KEY = process.env.OPENWEATHER_API_KEY

export const api = axios.create({
  baseURL: API,
})

api.interceptors.request.use((config) => {
  config.params = {
    ...config.params,
    appid: API_KEY,
  }

  return config
})
