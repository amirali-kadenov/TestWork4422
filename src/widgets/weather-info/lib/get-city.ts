import { cookies } from "next/headers"
import { KEYS } from "@/shared/constants/keys"
import { getCityFromIp } from "./get-city-from-ip"

const DEFAULT_CITY = "New York"

export const getCity = async () => {
  const cookiesStore = await cookies()

  const cookiesCity = cookiesStore.get(KEYS.CITY)?.value

  if (cookiesCity) {
    return cookiesCity
  }

  const city = await getCityFromIp()

  if (city) {
    cookiesStore.set(KEYS.CITY, city, { expires: 7 })

    return city
  }

  return DEFAULT_CITY
}
