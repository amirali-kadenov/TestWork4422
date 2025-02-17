"use client"

import clsx from "clsx"
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
        <span className={clsx(styles.text, "me-2")}>Remove from favorites</span>
        <HeartOff size={20}></HeartOff>
      </Button>
    )

  return (
    <Button variant="dark" onClick={() => addFavorite(city)}>
      <span className={clsx(styles.text, "me-2")}>Add to favorites</span>
      <Heart size={20}></Heart>
    </Button>
  )
}
