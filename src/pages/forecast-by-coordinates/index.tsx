import { notFound } from "next/navigation"
import { Suspense } from "react"

import { weatherApi } from "@/entities/weather"
import {
  ForecastDashboard,
  ForecastDashboardSkeleton,
} from "@/widgets/forecast-dashboard"

export type ForecastByCoordinatesParams = {
  searchParams: Promise<{
    lon?: string
    lat?: string
  }>
}

export const ForecastByCoordinatesPage = async (
  props: ForecastByCoordinatesParams,
) => {
  const { lat, lon } = await props.searchParams

  if (!lat || !lon) notFound()

  const getForecast = () => weatherApi.getForecastByCoordinates(lat, lon)

  return (
    <Suspense fallback={<ForecastDashboardSkeleton />}>
      <ForecastDashboard getForecast={getForecast} />
    </Suspense>
  )
}
