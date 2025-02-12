import { MapPin } from "lucide-react"
import { notFound } from "next/navigation"
import { Card, Container, Row, Col, CardBody } from "react-bootstrap"

import type { Forecast } from "@/entities/weather"
import {
  WeatherCard,
  WeatherUVIndex,
  WeatherForecast,
  WeatherWindInfo,
} from "@/entities/weather"
import { AddToFavorites } from "@/features/add-to-favorites"
import { splitForecastByDays } from "../lib/split-forecast-by-days"

type Props = {
  getForecast: () => Promise<Forecast | null>
}

export const ForecastDashboard = async ({ getForecast }: Props) => {
  const forecast = await getForecast()

  if (!forecast) return notFound()

  const { first, second, third } = splitForecastByDays(forecast)

  const currentWeather = forecast.list[0]

  return (
    <Container>
      <Card className="bg-dark text-light border-secondary">
        <CardBody className="p-4">
          <div className="mb-4 d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <MapPin className="me-2"></MapPin>
              <span>
                {forecast.city.name}, {forecast.city.country}
              </span>
            </div>

            <AddToFavorites city={forecast.city.name} />
          </div>

          <Row>
            <Col md={6}>
              <h1 className="display-1 fw-bold mb-0">
                {Math.round(currentWeather.main.temp)}°
              </h1>
              <h2 className="h3 mb-3 text-warning">
                {currentWeather.weather[0].main}
              </h2>
              <p className="text-white-50">
                {currentWeather.weather[0].description}. The high will be{" "}
                {Math.round(currentWeather.main.temp_max)}°C.
              </p>
            </Col>

            <Col md={6}>
              <Row className="g-3">
                <Col xs={6}>
                  <WeatherUVIndex uvIndex={3} />
                </Col>
                <Col xs={6}>
                  <WeatherWindInfo
                    speed={currentWeather.wind.speed}
                    deg={currentWeather.wind.deg}
                  />
                </Col>
              </Row>
            </Col>
          </Row>

          <Row className="g-3 mt-3 mb-4">
            <Col>
              <WeatherCard
                title="FEELS LIKE"
                value={Math.round(currentWeather.main.feels_like)}
                description="Similar to the actual temperature"
              />
            </Col>
            <Col>
              <WeatherCard
                title="PRECIPITATION"
                value={`${Math.round(currentWeather.pop * 100)}%`}
                description="Chance of rain"
              />
            </Col>
            <Col>
              <WeatherCard
                title="VISIBILITY"
                value={`${currentWeather.visibility / 1000} km`}
              />
            </Col>
            <Col>
              <WeatherCard
                title="HUMIDITY"
                value={`${currentWeather.main.humidity}%`}
                description="Current humidity level"
              />
            </Col>
          </Row>
        </CardBody>
      </Card>

      <h2 className="h2 mt-5">Forecast</h2>

      <div className="d-flex flex-column gap-1 mt-4">
        <WeatherForecast forecast={first} />
        <WeatherForecast forecast={second} />
        <WeatherForecast forecast={third} />
      </div>
    </Container>
  )
}
