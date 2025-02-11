import axios from "axios"
import { headers } from "next/headers"

const CITY_ENDPOINT = "/api/city"
const DEFAULT_CITY = "New York"

export const getOrigin = async () => {
  const headersList = await headers()
  const host = headersList.get("host")

  return `http://${host}`
}

export const getCity = async () => {
  const origin = await getOrigin()

  const response = await axios.get(origin + CITY_ENDPOINT)

  return response.data.city ?? DEFAULT_CITY
}
