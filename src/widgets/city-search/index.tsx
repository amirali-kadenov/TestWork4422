"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import styles from "./city-search.module.scss"

export const CitySearch = () => {
  const [city, setCity] = useState("")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push(`/?city=${encodeURIComponent(city)}`)
  }

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        className={styles.searchInput}
      />
      <button type="submit" className={styles.searchButton}>
        Search
      </button>
    </form>
  )
}
