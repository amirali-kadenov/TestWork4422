import { Suspense } from "react"

import { CitySearch } from "@/features/city-search/ui/city-search"
import { PageWrapper } from "@/shared/ui/page-wrapper"
import { Header } from "@/widgets/header"
import { WeatherInfo, WeatherInfoSkeleton } from "@/widgets/weather-info"

export const Home = async () => {
  return (
    <>
      <Header />

      <PageWrapper className="flexCenter flex-column">
        <CitySearch variant="md" />

        <Suspense fallback={<WeatherInfoSkeleton />}>
          <WeatherInfo />
        </Suspense>
      </PageWrapper>
    </>
  )
}
