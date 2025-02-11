import { useEffect, useState } from "react"

import type { Weather } from "@/entities/weather"
import { getWeather } from "@/entities/weather/model/actions/get-weather"

type CityToWeatherMap = Record<string, Weather>

export const useCityToWeatherMap = (favorites: string[]) => {
  const [weatherData, setWeatherData] = useState<CityToWeatherMap>({})

  useEffect(() => {
    const getData = async () => {
      const requests = favorites.map((city) => getWeather(city))

      const promises = await Promise.all(requests)

      const weatherData = promises.reduce<CityToWeatherMap>((acc, weather) => {
        if (!weather) return acc

        acc[weather.name] = weather

        return acc
      }, {})

      setWeatherData(weatherData)
    }

    getData()
  }, [favorites])

  return weatherData
}
