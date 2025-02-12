import { APP_METADATA } from "@/app/metadata/app-metadata"
import { ForecastByCoordinatesParams } from "."

export const generateMetadata = async (props: ForecastByCoordinatesParams) => {
  const params = await props.searchParams

  const lat = decodeURIComponent(params?.lat ?? '')
  const lon = decodeURIComponent(params?.lon ?? '')

  if (!lat || !lon) {
    return APP_METADATA
  }

  return {
    title: `Weather Forecast for ${lat}°, ${lon}°`,
    description: `Get detailed weather forecast, temperature, and conditions for location at latitude ${lat}° and longitude ${lon}°`,
    keywords: [
      'weather forecast',
      'coordinates',
      'latitude',
      'longitude',
      'temperature',
      'weather conditions'
    ],
    openGraph: {
      title: `Weather Forecast - ${lat}°, ${lon}°`,
      description: `Current weather and forecast for location at ${lat}°, ${lon}°. View temperature, precipitation chances, wind speed, and more.`,
      type: 'website',
      locale: 'en_US',
      images: [
        {
          url: '/images/forecast-coordinates-preview.jpg',
          width: 1200,
          height: 630,
          alt: `Weather forecast for coordinates ${lat}°, ${lon}°`
        }
      ]
    }
  }
}
