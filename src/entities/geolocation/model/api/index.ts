import { createApi } from "@/shared/api"

import type { CitySuggestion } from "./types"

const BASE_URL = process.env.OPENWEATHER_API + "/geo/1.0/"

const api = createApi(BASE_URL)

export const geolocationApi = {
  async getCitySuggestions(query: string) {
    const response = await api.get<CitySuggestion[]>(`direct`, {
      params: {
        q: query,
        limit: 20,
      },
    })

    return response.data
  },
}
