import { Api } from "@/shared/api"

import type { CitySuggestion } from "./types"

const LIMIT = 20
const BASE_URL = process.env.OPENWEATHER_API + "/geo/1.0/"

const api = new Api(BASE_URL)

export const geolocationApi = {
  async getCities(query: string) {
    return await api.get<CitySuggestion[]>(`direct`, {
      params: {
        q: query,
        limit: LIMIT,
      },
    })
  },

  async getCitiesByCoordinates(lat: string, lon: string) {
    return await api.get<CitySuggestion[]>(`reverse`, {
      params: {
        lat,
        lon,
        limit: LIMIT,
      },
    })
  },
}
