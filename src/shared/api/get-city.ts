import axios from "axios"
import { headers } from "next/headers"

const CITY_ENDPOINT = "/api/city"
const DEFAULT_CITY = "New York"

export const getOrigin = async () => {
  const headersList = await headers()
  const host = headersList.get("host")

  return `http://${host}`
}

type City = {
  city: string
}

export const getCity = async (): Promise<string> => {
  const origin = await getOrigin()

  const response = await axios.get<City>(origin + CITY_ENDPOINT, {
    withCredentials: true,
  })

  return response.data.city ?? DEFAULT_CITY
}
