import Cookies from "js-cookie"
import { usePathname, useSearchParams } from "next/navigation"
import { KEYS } from "@/shared/constants/keys"
import { PATHS } from "@/shared/constants/paths"

export const useIsActive = () => {
  const searchParams = useSearchParams()
  const pathname = usePathname()

  const city = Cookies.get(KEYS.CITY)
  const isCityMatch = city && pathname === PATHS.FORECAST.get(city)

  if (isCityMatch) return true

  const lat = searchParams?.get(KEYS.LAT)
  const lon = searchParams?.get(KEYS.LON)

  const isLatitudeMatch = lat && lat === localStorage.getItem(KEYS.LAT)
  const isLongitudeMatch = lon && lon === localStorage.getItem(KEYS.LON)

  return isLatitudeMatch && isLongitudeMatch
}
