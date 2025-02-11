export const PATHS = {
  HOME: "/",
  FORECAST: {
    get: (city: string) => `/forecast/${city}`,
    BY_COORDINATES: {
      get: (lon: string, lat: string) => {
        const params = new URLSearchParams({ lon, lat, setCookie: "true" })

        return `/forecast/by-coordinates?${params}`
      },
    },
  },
  FAVORITES: "/favorites",
}
