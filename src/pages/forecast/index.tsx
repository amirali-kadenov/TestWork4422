import { Suspense } from "react"

import { weatherApi } from "@/entities/weather"
import {
  ForecastDashboard,
  ForecastDashboardSkeleton,
} from "@/widgets/forecast-dashboard"

export type ForecastPageProps = {
  params: Promise<{
    city: string
  }>
}

export const ForecastPage = async (props: ForecastPageProps) => {
  const params = await props.params

  const city = decodeURIComponent(params.city)

  const getForecast = async () => await weatherApi.getForecast(city)

  return (
    <Suspense fallback={<ForecastDashboardSkeleton />}>
      <ForecastDashboard getForecast={getForecast} />
    </Suspense>
  )
}
