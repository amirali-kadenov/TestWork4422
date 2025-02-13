import Cookies from "js-cookie"
import useSWRImmutable from "swr/immutable"
import { getWeather } from "@/entities/weather"
import { KEYS } from "@/shared/constants/keys"
import { getCity } from "./get-city"

export const useWeather = () => {
  return useSWRImmutable(["weather", Cookies.get(KEYS.CITY)], async () => {
    const city = await getCity()

    const weather = await getWeather(city)

    return weather
  })
}
