"use client"

import { Heart, HeartOff } from "lucide-react"
import { Button } from "react-bootstrap"

import { useStore } from "@/app/store"

type Props = {
  city: string
}

export const AddToFavorites = ({ city }: Props) => {
  const { favorites, addFavorite, removeFavorite } = useStore()

  const isFavorite = favorites.includes(city)

  if (isFavorite)
    return (
      <Button variant="dark" onClick={() => removeFavorite(city)}>
        Remove from favorites
        <HeartOff className="ms-2"></HeartOff>
      </Button>
    )

  return (
    <Button variant="dark" onClick={() => addFavorite(city)}>
      Add to favorites
      <Heart className="ms-2"></Heart>
    </Button>
  )
}
