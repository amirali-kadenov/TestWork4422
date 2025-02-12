export const PATHS = {
  HOME: "/",
  FORECAST: {
    get: (city: string) => `/forecast/${encodeURIComponent(city)}`,

    BY_COORDINATES: {
      get: (lat: string, lon: string) => {
        const params = new URLSearchParams({ lat, lon })

        return `/forecast/by-coordinates?${params}`
      },
    },
  },
  FAVORITES: "/favorites",
}
