"use server"

import { geolocationApi } from "@/entities/geolocation/model/api"

export const getCitySuggestions = async (query: string) => {
  try {
    const response = await geolocationApi.getCitySuggestions(query)

    return response
  } catch (error) {
    console.error("Error fetching cities:", error)

    return null
  }
}
