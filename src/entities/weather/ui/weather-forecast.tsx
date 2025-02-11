import clsx from "clsx"
import dayjs from "dayjs"
import { Card, CardBody } from "react-bootstrap"

import { TIME_FORMATS } from "@/shared/constants/time-formats"

import type { SplittedForecastEntry } from "@/widgets/forecast-dashboard/lib/split-forecast-by-days"
import { WeatherIcon } from "./weather-icon"

type Props = {
  className?: string
  forecast: SplittedForecastEntry
}

export const WeatherForecast = ({
  className,
  forecast: { date, days },
}: Props) => {
  const title = date.format(TIME_FORMATS.DAY)

  return (
    <Card
      className={clsx(
        "bg-dark bg-opacity-50 border-secondary mb-4 text-white overflow-auto",
        className,
      )}
    >
      <CardBody>
        <h6>{title}</h6>
        <div className="d-flex text-center gap-4 mt-4">
          {days.map((item) => (
            <div
              key={item.dt}
              className="py-3 px-5 d-flex flex-column gap-3 align-items-center"
            >
              <div className="small mb-1 text-white-50">
                {dayjs(item.dt_txt, TIME_FORMATS.SYSTEM).format(
                  TIME_FORMATS.TIME,
                )}
              </div>

              <div className="h5 mb-1">{Math.round(item.main.temp)}°</div>

              <WeatherIcon weather={item} />
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  )
}
