"use server"

import { geolocationApi } from "@/entities/geolocation/model/api"

export const getCitiesByCoordinates = async (lat: string, lon: string) => {
  try {
    const response = await geolocationApi.getCitiesByCoordinates(lat, lon)

    return response
  } catch (error) {
    console.error("Error fetching cities:", error)

    return null
  }
}
