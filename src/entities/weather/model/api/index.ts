import { createApi } from "@/shared/api"

import type { Forecast, Weather } from "./types"

const BASE_URL = process.env.OPENWEATHER_API + "/data/2.5/"

const api = createApi(BASE_URL)

export const weatherApi = {
  async getWeather(city: string) {
    const response = await api.get<Weather>("weather", {
      params: {
        q: city,
        units: "metric",
      },
    })

    return response.data
  },

  async getForecast(city: string) {
    const response = await api.get<Forecast>("forecast", {
      params: {
        q: city,
        units: "metric",
      },
    })

    return response.data
  },

  async getForecastByCoordinates(lat: string, lon: string) {
    const response = await api.get<Forecast>("forecast", {
      params: {
        lat,
        lon,
        units: "metric",
      },
    })

    return response.data
  },
}
