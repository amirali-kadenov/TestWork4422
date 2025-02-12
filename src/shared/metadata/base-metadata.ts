import type { Metadata } from "next"

export const BASE_METADATA: Metadata = {
  title: "Weather Forecast",
  description: "Weather forecast application with real-time data",
  keywords: ["weather", "forecast", "temperature", "precipitation"],
  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    title: "Weather Forecast",
    description: "Get accurate weather forecasts for any location",
    url: process.env.NEXT_PUBLIC_ORIGIN,
    siteName: "Weather Forecast App",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "Weather Forecast App Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Weather Forecast",
    description: "Get accurate weather forecasts for any location",
  },
}
