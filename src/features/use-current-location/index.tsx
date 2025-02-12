"use client"

import clsx from "clsx"
import Cookies from "js-cookie"
import { MapPin } from "lucide-react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { NavLink } from "react-bootstrap"

import { getCitiesByCoordinates } from "@/entities/geolocation"
import { KEYS } from "@/shared/constants/keys"
import { PATHS } from "@/shared/constants/paths"

export const UseCurrentLocation = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()

  const getLocation = () => {
    if (!navigator.geolocation) return

    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords

      const lat = String(latitude)
      const lon = String(longitude)

      localStorage.setItem(KEYS.LAT, lat)
      localStorage.setItem(KEYS.LON, lon)

      const cities = await getCitiesByCoordinates(lat, lon)

      const city = cities?.[0].name
      let path = PATHS.FORECAST.BY_COORDINATES.get(lat, lon)

      if (city) {
        Cookies.set(KEYS.CITY, city, { expires: 7 })
        path = PATHS.FORECAST.get(city)
      }

      router.push(path)
    })
  }

  const lat = searchParams?.get(KEYS.LAT)
  const lon = searchParams?.get(KEYS.LON)
  const city = Cookies.get(KEYS.CITY)

  const isLatitudeMatch = lat && lat === localStorage.getItem(KEYS.LAT)
  const isLongitudeMatch = lon && lon === localStorage.getItem(KEYS.LON)
  const isCityMatch = city && pathname === PATHS.FORECAST.get(city)

  const isActive = (isLatitudeMatch && isLongitudeMatch) || isCityMatch

  return (
    <NavLink
      as="button"
      className={clsx(
        "d-flex align-items-center gap-2 rounded-pill",
        isActive && "text-success",
      )}
      onClick={getLocation}
    >
      <MapPin />
    </NavLink>
  )
}
