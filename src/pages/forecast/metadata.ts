import { ForecastPageProps } from "."

export async function generateMetadata(props: ForecastPageProps) {
  const params = await props.params

  const city = decodeURIComponent(params.city)

  return {
    title: `Weather Forecast for ${city}`,
    description: `Get detailed weather forecast, temperature, precipitation, and wind conditions for ${city}`,
    keywords: [
      'weather forecast',
      city,
      'temperature',
      'precipitation',
      'weather conditions'
    ],
    openGraph: {
      title: `Weather Forecast - ${city}`,
      description: `Current weather and 3-day forecast for ${city}. View temperature, precipitation chances, wind speed, and more.`,
      type: 'website',
      locale: 'en_US',
      images: [
        {
          url: '/images/forecast-preview.jpg',
          width: 1200,
          height: 630,
          alt: `Weather forecast for ${city}`
        }
      ]
    }
  }
}
