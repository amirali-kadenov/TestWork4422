import { Droplet, Wind } from "lucide-react"
import { cookies } from "next/headers"
import Link from "next/link"
import React from "react"
import { WeatherIcon, weatherApi } from "@/entities/weather"
import { getCity } from "@/shared/api/get-city"
import { KEYS } from "@/shared/constants/keys"
import { PATHS } from "@/shared/constants/paths"

export const WeatherInfo = async () => {
  const cookiesStore = await cookies()

  const cookieCity = cookiesStore.get(KEYS.CITY)?.value
  const city = cookieCity ?? (await getCity())

  const weather = await weatherApi.getWeather(city)

  if (!weather) return null

  return (
    <div className="p-4 rounded-4 bg-dark text-white w-100">
      <div className="d-flex mt-4 justify-content-center align-items-center gap-5">
        <WeatherIcon weather={weather} size={220} />

        <div className="text-center">
          <h1 className="display-3 fw-bold">
            {Math.round(weather.main.temp)}°C
          </h1>
          <p className="fs-4 text-warning">{weather.weather[0].main}</p>
          <h5 className="fs-5 text-secondary">
            {weather.name}, {weather.sys.country}
          </h5>

          <div className="d-flex justify-content-around mt-3 gap-4">
            <div className="text-center">
              <Droplet size={24} />
              <p className="m-0">{weather.main.humidity}% Humidity</p>
            </div>

            <div className="text-center">
              <Wind size={24} />
              <p className="m-0">{weather.wind.speed} Km/h Wind Speed</p>
            </div>
          </div>

          <Link
            href={PATHS.FORECAST.get(weather.name)}
            className="text-decoration-underline text-warning mt-3 d-block"
          >
            Show More +
          </Link>
        </div>
      </div>
    </div>
  )
}
