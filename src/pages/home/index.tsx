import { CitySearch } from "@/features/city-search/ui/city-search"
import { PageWrapper } from "@/shared/ui/page-wrapper"
import { Header } from "@/widgets/header"
import { WeatherInfo } from "@/widgets/weather-info"

export const Home = async () => {
  return (
    <>
      <Header />

      <PageWrapper withCenteredContent className="flex-column">
        <CitySearch variant="md" />

        <WeatherInfo />
      </PageWrapper>
    </>
  )
}
