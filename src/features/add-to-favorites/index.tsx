"use client"

import { Heart, HeartOff } from "lucide-react"
import { Button } from "react-bootstrap"

import { useStore } from "@/app/store"

import styles from "./add-to-favorites.module.scss"

type Props = {
  city: string
}

export const AddToFavorites = ({ city }: Props) => {
  const { favorites, addFavorite, removeFavorite } = useStore()

  const isFavorite = favorites.includes(city)

  if (isFavorite)
    return (
      <Button variant="dark" onClick={() => removeFavorite(city)}>
        <span className={styles.text}>Remove from favorites</span>
        <HeartOff className="ms-2"></HeartOff>
      </Button>
    )

  return (
    <Button variant="dark" onClick={() => addFavorite(city)}>
      <span className={styles.text}>Add to favorites</span>
      <Heart className="ms-2"></Heart>
    </Button>
  )
}
