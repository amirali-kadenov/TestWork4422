// import { Suspense } from "react"
// import CitySearch from "../components/CitySearch"
// import CurrentWeather from "../components/CurrentWeather"
// import { getWeather } from "../utils/api"
import { CitySearch } from "@/widgets/city-search"
import styles from "./home.module.scss"

type Props = {
  searchParams: {
    city?: string
  }
}

export const Home = async ({} /* searchParams */ : Props) => {
  // const city = await searchParams.city

  // console.log({ city })

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Weather App</h1>
        <CitySearch />
        {/* {city && (
          <Suspense fallback={<p>Loading weather data...</p>}>
            <WeatherInfo city={city} />
          </Suspense>
        )} */}
      </main>
    </div>
  )
}

// const WeatherInfo = async ({ city }: { city: string }) => {
//   const weather = await getWeather(city)
//   return (
//     <CurrentWeather
//       city={weather.name}
//       temperature={weather.main.temp}
//       description={weather.weather[0].description}
//       icon={weather.weather[0].icon}
//     />
//   )
// }
