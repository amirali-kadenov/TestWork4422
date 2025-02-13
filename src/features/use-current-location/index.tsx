"use client"

import clsx from "clsx"
import Cookies from "js-cookie"
import { MapPin } from "lucide-react"
import { useRouter } from "next/navigation"
import { NavLink } from "react-bootstrap"

import { getCitiesByCoordinates } from "@/entities/geolocation"
import { KEYS } from "@/shared/constants/keys"
import { PATHS } from "@/shared/constants/paths"
import { useIsActive } from "./lib/use-is-active"

export const UseCurrentLocation = () => {
  const router = useRouter()
  const isActive = useIsActive()

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
