import {
  Sun,
  Moon,
  CloudSun,
  CloudMoon,
  Cloud,
  CloudDrizzle,
  CloudRain,
  CloudLightning,
  Snowflake,
  CloudFog,
  CircleHelp,
} from "lucide-react"

import type { ForecastWeather, Weather } from "../model/api/types"

type IconConfig = { [key: string]: [typeof Sun, string] }

const ICON_CONFIG: IconConfig = {
  "01d": [Sun, "var(--bs-warning)"],
  "01n": [Moon, "var(--bs-gray-500)"],
  "02d": [CloudSun, "var(--bs-warning)"],
  "02n": [CloudMoon, "var(--bs-gray-500)"],
  "03d": [Cloud, "var(--bs-secondary)"],
  "03n": [Cloud, "var(--bs-secondary)"],
  "04d": [Cloud, "var(--bs-secondary)"],
  "04n": [Cloud, "var(--bs-secondary)"],
  "09d": [CloudDrizzle, "var(--bs-info)"],
  "09n": [CloudDrizzle, "var(--bs-info)"],
  "10d": [CloudRain, "var(--bs-primary)"],
  "10n": [CloudRain, "var(--bs-primary)"],
  "11d": [CloudLightning, "var(--bs-danger)"],
  "11n": [CloudLightning, "var(--bs-danger)"],
  "13d": [Snowflake, "var(--bs-light)"],
  "13n": [Snowflake, "var(--bs-light)"],
  "50d": [CloudFog, "var(--bs-secondary)"],
  "50n": [CloudFog, "var(--bs-secondary)"],
}

const DEFAULT_CONFIG = [CircleHelp, "var(--bs-secondary)"]

type Props = {
  weather: Weather | ForecastWeather
  size?: number
}

export const WeatherIcon = ({ weather, size = 30 }: Props) => {
  const [Icon, color] = ICON_CONFIG[weather.weather[0].icon] ?? DEFAULT_CONFIG

  return <Icon color={color} size={size} />
}
