import axios from "axios"
import { headers } from "next/headers"

type City = {
  city: string | null
}

export const getCityFromIp = async (): Promise<string | null> => {
  const headersList = await headers()

  const host = headersList.get("host")

  if (!host) return null

  const response = await axios.get<City>(`http://${host}/api/city`)

  return response.data.city
}
