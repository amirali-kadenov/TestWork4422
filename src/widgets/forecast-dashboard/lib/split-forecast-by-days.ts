import dayjs from "dayjs"

import type { Forecast, ForecastWeather } from "@/entities/weather"
import { TIME_FORMATS } from "@/shared/constants/time-formats"

export type SplittedForecastEntry = {
  date: dayjs.Dayjs
  days: ForecastWeather[]
}

type SplittedForecast = {
  first: SplittedForecastEntry
  second: SplittedForecastEntry
  third: SplittedForecastEntry
}

export const splitForecastByDays = (forecast: Forecast): SplittedForecast => {
  const firstDay = dayjs(forecast.list[0].dt_txt, TIME_FORMATS.SYSTEM)
  const secondDay = firstDay.add(1, "day")
  const thirdDay = firstDay.add(2, "day")

  const result: SplittedForecast = {
    first: {
      date: firstDay,
      days: [],
    },
    second: {
      date: secondDay,
      days: [],
    },
    third: {
      date: thirdDay,
      days: [],
    },
  }

  forecast.list.forEach((item) => {
    const itemDate = dayjs(item.dt_txt, TIME_FORMATS.SYSTEM)

    if (itemDate.isSame(firstDay, "day")) {
      return result.first.days.push(item)
    }

    if (itemDate.isSame(secondDay, "day")) {
      return result.second.days.push(item)
    }

    if (itemDate.isSame(thirdDay, "day")) {
      return result.third.days.push(item)
    }
  })

  return result
}
