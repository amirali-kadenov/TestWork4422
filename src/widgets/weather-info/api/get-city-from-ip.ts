import axios from "axios"

type City = {
  city: string | null
}

export const getCityFromIp = async () => {
  try {
    const response = await axios.get<City>(`${window.location.origin}/api/city`)

    return response.data.city
  } catch (e) {
    console.error(e)

    return null
  }
}
