"use server"

import { weatherApi } from "../api"

export const getWeather = async (city: string) => {
  try {
    const response = await weatherApi.getWeather(city)

    return response
  } catch (error) {
    console.error("Error fetching weather:", error)

    return null
  }
}
