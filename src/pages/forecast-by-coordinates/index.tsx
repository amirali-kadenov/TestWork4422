import { notFound } from "next/navigation"
import { Suspense } from "react"

import { weatherApi } from "@/entities/weather"
import {
  ForecastDashboard,
  ForecastDashboardSkeleton,
} from "@/widgets/forecast-dashboard"
// import { setCityCookie } from "./lib/set-city-cookie"

type Props = {
  searchParams: Promise<{
    lon?: string
    lat?: string
    setCookie?: boolean
  }>
}

export const ForecastByCoordinatesPage = async (props: Props) => {
  const { lat, lon /* setCookie */ } = await props.searchParams

  if (!lat || !lon) {
    notFound()
  }

  const getForecast = async () => {
    const forecast = await weatherApi.getForecastByCoordinates(lat, lon)

    // if (setCookie) {
    //   setCityCookie(forecast.city.name)
    // }

    return forecast
  }

  return (
    <Suspense fallback={<ForecastDashboardSkeleton />}>
      <ForecastDashboard getForecast={getForecast}></ForecastDashboard>
    </Suspense>
  )
}
