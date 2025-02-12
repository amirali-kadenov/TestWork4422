import { Api } from "@/shared/api"

import type { Forecast, Weather } from "./types"

const BASE_URL = process.env.OPENWEATHER_API + "/data/2.5/"

const api = new Api(BASE_URL)

export const weatherApi = {
  async getWeather(city: string) {
    return await api.get<Weather>("weather", {
      params: {
        q: city,
        units: "metric",
      },
    })
  },

  async getForecast(city: string) {
    return await api.get<Forecast>("forecast", {
      params: {
        q: city,
        units: "metric",
      },
    })
  },

  async getForecastByCoordinates(lat: string, lon: string) {
    return await api.get<Forecast>("forecast", {
      params: {
        lat,
        lon,
        units: "metric",
      },
    })
  },
}
