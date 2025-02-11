import { Suspense } from "react"

import { weatherApi } from "@/entities/weather"
import {
  ForecastDashboard,
  ForecastDashboardSkeleton,
} from "@/widgets/forecast-dashboard"

type Props = {
  params: Promise<{
    city: string
  }>
}

export const ForecastPage = async (props: Props) => {
  const params = await props.params

  const city = decodeURIComponent(params.city)

  const getForecast = async () => await weatherApi.getForecast(city)

  return (
    <Suspense fallback={<ForecastDashboardSkeleton />}>
      <ForecastDashboard getForecast={getForecast}></ForecastDashboard>
    </Suspense>
  )
}
