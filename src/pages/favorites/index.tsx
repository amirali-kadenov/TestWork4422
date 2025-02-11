"use client"

import clsx from "clsx"
import { HeartOff } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Button, Container } from "react-bootstrap"

import { useStore } from "@/app/store"
import { PATHS } from "@/shared/constants/paths"

import { useDeleteModal } from "./model/use-delete-modal"
import { useCityToWeatherMap } from "./model/use-weather-data"
import { ConfirmDeleteModal } from "./ui/confirm-delete-modal"
import styles from "./ui/favorites.module.scss"

export const FavoritesPage = () => {
  const { favorites, removeFavorite } = useStore()

  const map = useCityToWeatherMap(favorites)
  const deleteModal = useDeleteModal()

  const [cityToRemove, setCityToRemove] = useState("")

  return (
    <Container className="py-5">
      <ConfirmDeleteModal
        state={deleteModal}
        onDelete={() => removeFavorite(cityToRemove)}
      />

      <h1 className="text-center mb-4 text-light h-3">Favorite Cities</h1>

      <div>
        {favorites.map((city) => {
          const data = map[city]

          return (
            <Link
              href={PATHS.FORECAST.get(city)}
              key={city}
              className={clsx(
                "text-light d-flex align-items-center justify-content-between",
                styles.item,
              )}
            >
              <div className="d-flex align-items-center gap-2">
                <h3 className="h5 mb-0">{city}</h3>

                {data && (
                  <div className="d-flex align-items-center gap-2">
                    <p className="text-white-50 mb-0">{data.sys.country}</p>
                    <p className="ms-4 mb-0">{Math.round(data.main.temp)}°C</p>
                  </div>
                )}
              </div>

              <Button
                variant="dark"
                size="sm"
                className="me-2"
                onClick={(e) => {
                  e.preventDefault()
                  setCityToRemove(city)
                  deleteModal.open()
                }}
              >
                <HeartOff />
              </Button>
            </Link>
          )
        })}
      </div>
    </Container>
  )
}
