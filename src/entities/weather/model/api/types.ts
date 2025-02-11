// Common types for coordinates and weather conditions
export type Coordinates = {
  lon: number
  lat: number
}

export type WeatherCondition = {
  id: number
  main: string
  description: string
  icon: string
}

export type MainWeatherData = {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  humidity: number
}

export type Wind = {
  speed: number
  deg: number
}

export type Clouds = {
  all: number
}

// Shared structure for API responses
export type BaseWeather = {
  weather: WeatherCondition[]
  main: MainWeatherData
  wind: Wind
  clouds: Clouds
  visibility: number
  dt: number
}

// **Weather API Response**
export type Weather = {
  coord: Coordinates
  base: string
  sys: {
    type: number
    id: number
    country: string
    sunrise: number
    sunset: number
  }
  timezone: number
  id: number
  name: string
  cod: number
} & BaseWeather

// **Forecast API Response**
export type ForecastWeather = {
  pop: number
  sys: {
    pod: string
  }
  dt_txt: string
} & BaseWeather

export type Forecast = {
  cod: string
  message: number
  cnt: number
  list: ForecastWeather[]
  city: {
    id: number
    name: string
    coord: Coordinates
    country: string
    timezone: number
    sunrise: number
    sunset: number
  }
}

// **City Suggestion Response**
export type CitySuggestion = {
  name: string
  local_names?: Record<string, string>
  lat: number
  lon: number
  country: string
  state?: string
}
