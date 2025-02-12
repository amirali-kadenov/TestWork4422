"use client"

import { CloudOff } from "lucide-react"
import { useRouter } from "next/navigation"
import { Button } from "react-bootstrap"

export const WeatherNotFoundPage = () => {
  const router = useRouter()

  return (
    <div className="d-flex flex-column justify-content-center align-items-center min-vh-100 text-center px-4">
      <CloudOff size={64} className="mb-4 text-white-50" />

      <h1 className="mb-3">Weather Data Not Found</h1>

      <p className="text-white-50 mb-4">
        We could not find weather data for this location. Please try searching
        for a different city.
      </p>

      <div className="d-flex gap-3">
        <Button variant="primary" onClick={() => router.push("/")}>
          Return Home
        </Button>

        <Button variant="outline-secondary" onClick={() => router.back()}>
          Go Back
        </Button>
      </div>
    </div>
  )
}
