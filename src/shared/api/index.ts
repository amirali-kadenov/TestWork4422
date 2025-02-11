import axios from "axios"

import type { InternalAxiosRequestConfig } from "axios"

const injectApiKey = (config: InternalAxiosRequestConfig) => {
  config.params.appid = process.env.OPENWEATHER_API_KEY

  return config
}

export const createApi = (baseURL: string) => {
  const api = axios.create({ baseURL })

  api.interceptors.request.use(injectApiKey)

  return api
}
