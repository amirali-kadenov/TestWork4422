"use client"

import clsx from "clsx"
import { MapPin } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import { NavLink } from "react-bootstrap"

import { KEYS } from "@/shared/constants/keys"
import { PATHS } from "@/shared/constants/paths"

export const UseCurrentLocation = () => {
  const router = useRouter()
  const params = useSearchParams()

  const onSuccess = (position: GeolocationPosition) => {
    const { latitude, longitude } = position.coords

    const path = PATHS.FORECAST.BY_COORDINATES.get(
      String(longitude),
      String(latitude),
    )

    localStorage.setItem(KEYS.LAT, String(latitude))
    localStorage.setItem(KEYS.LON, String(longitude))

    router.push(path)
  }

  const onError = (error: GeolocationPositionError) => {
    console.error("Error getting location:", error)
  }

  const getLocation = () => {
    if (!navigator.geolocation) return

    navigator.geolocation.getCurrentPosition(onSuccess, onError)
  }

  const isActive =
    params?.get(KEYS.LAT) === localStorage.getItem(KEYS.LAT) &&
    params?.get(KEYS.LON) === localStorage.getItem(KEYS.LON)

  return (
    <NavLink
      as="button"
      className={clsx(
        "d-flex align-items-center gap-2 rounded-pill",
        isActive && "text-warning",
      )}
      onClick={getLocation}
    >
      <MapPin />
    </NavLink>
  )
}
