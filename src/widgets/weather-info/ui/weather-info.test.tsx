import { render, screen } from "@testing-library/react"
import type { Weather } from "@/entities/weather"
import { weatherApi } from "@/entities/weather"
import type { DeepPartial } from "@/shared/types/utils"
import { WeatherInfo } from "./weather-info"

jest.mock("@/entities/weather", () => ({
  weatherApi: {
    getWeather: jest.fn(),
  },
  WeatherIcon: jest.fn(),
}))

jest.mock("../lib/get-city.ts", () => ({
  getCity: jest.fn().mockResolvedValue("London"),
}))

const mockWeatherData: DeepPartial<Weather> = {
  main: {
    temp: 20,
    humidity: 65,
  },
  weather: [{ main: "Cloudy" }],
  name: "London",
  sys: { country: "GB" },
  wind: { speed: 5 },
}

describe("WeatherInfo", () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it("renders weather information correctly", async () => {
    ;(weatherApi.getWeather as jest.Mock).mockResolvedValue(mockWeatherData)

    render(await WeatherInfo())

    expect(screen.getByText("20°C")).toBeInTheDocument()
    expect(screen.getByText("Cloudy")).toBeInTheDocument()
    expect(screen.getByText("London, GB")).toBeInTheDocument()
    expect(screen.getByText("65% Humidity")).toBeInTheDocument()
    expect(screen.getByText("5 Km/h Wind Speed")).toBeInTheDocument()
  })

  it("returns null when weather data is not available", async () => {
    ;(weatherApi.getWeather as jest.Mock).mockResolvedValue(null)

    const { container } = render(await WeatherInfo())
    expect(container.firstChild).toBeNull()
  })
})
