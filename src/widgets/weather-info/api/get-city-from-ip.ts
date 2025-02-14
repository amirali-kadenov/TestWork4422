import axios from "axios"

type City = {
  city: string | null
}

type IpApiResponse =
  | {
      error: true
      reason: string
      message: string
      city?: never
    }
  | {
      error?: never
      city: string
    }

export const getCityFromIp = async () => {
  try {
    const { data } = await axios.get<IpApiResponse>("https://ipapi.co/json")

    if (!data.error) {
      return data.city
    }

    const response = await axios.get<City>(`${window.location.origin}/api/city`)

    return response.data.city
  } catch (e) {
    console.warn("Could not get city from ip", e)

    return null
  }
}
