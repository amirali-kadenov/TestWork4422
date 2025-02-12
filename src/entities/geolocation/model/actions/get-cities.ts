"use server"

import { geolocationApi } from "@/entities/geolocation/model/api"

export const getCities = async (query: string) => {
  try {
    const response = await geolocationApi.getCities(query)

    return response
  } catch (error) {
    console.error("Error fetching cities:", error)

    return null
  }
}
