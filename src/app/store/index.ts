import { create } from "zustand"
import { persist } from "zustand/middleware"

type Store = {
  favorites: string[]
  addFavorite: (city: string) => void
  removeFavorite: (city: string) => void
}

export const useStore = create<Store>()(
  persist(
    (set) => ({
      favorites: [],
      addFavorite: (city) =>
        set((state) => ({
          favorites: [...new Set([...state.favorites, city])],
        })),
      removeFavorite: (city) =>
        set((state) => ({
          favorites: state.favorites.filter((c) => c !== city),
        })),
    }),
    {
      name: "weather-store",
    },
  ),
)
