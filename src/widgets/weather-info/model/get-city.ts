import Cookies from "js-cookie"
import { KEYS } from "@/shared/constants/keys"
import { getCityFromIp } from "../api/get-city-from-ip"

const DEFAULT_CITY = "New York"

export const getCity = async () => {
  const cookieCity = Cookies.get(KEYS.CITY)

  if (cookieCity) return cookieCity

  const ipCity = await getCityFromIp()

  if (ipCity) {
    Cookies.set(KEYS.CITY, ipCity, { expires: 7 })

    return ipCity
  }

  return DEFAULT_CITY
}
