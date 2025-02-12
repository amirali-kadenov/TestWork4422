"use client"

import "react-bootstrap-typeahead/css/Typeahead.css"
import clsx from "clsx"
import { Search } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import type React from "react"
import { Spinner } from "react-bootstrap"
import { Menu, MenuItem, Typeahead } from "react-bootstrap-typeahead"

import { getCities } from "@/entities/geolocation"
import type { CitySuggestion } from "@/entities/weather"
import { PATHS } from "@/shared/constants/paths"

import styles from "./city-search.module.scss"

type Props = {
  className?: string
  inputClassName?: string
  variant?: Variants
}

type Variants = "md"

export const CitySearch = ({ className, inputClassName, variant }: Props) => {
  const router = useRouter()

  const [options, setOptions] = useState<CitySuggestion[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchCities = async (query = "") => {
    setIsLoading(true)

    try {
      const citySuggestions = await getCities(query)

      if (citySuggestions) {
        setOptions(citySuggestions)
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div
      className={clsx(
        "position-relative",
        variant && styles[variant],
        className,
      )}
    >
      <Typeahead
        id="autocomplete-search"
        labelKey="name"
        placeholder="Search city"
        onInputChange={fetchCities}
        options={options}
        isLoading={isLoading}
        inputProps={{ className: clsx(styles.input, inputClassName) }}
        renderMenu={(options, _, state) => {
          if (!options.length) return null

          return (
            <Menu className={styles.menu}>
              {options.map((option, index) => {
                const { name, country } = option as CitySuggestion

                const handleClick = () => {
                  router.push(PATHS.FORECAST.get(name))
                  state.hideMenu()
                }

                return (
                  <MenuItem
                    onClick={handleClick}
                    option={option}
                    position={index}
                    key={index}
                    className={styles.menuItem}
                  >
                    <span>{name}</span>
                    <span>{country}</span>
                  </MenuItem>
                )
              })}
            </Menu>
          )
        }}
      ></Typeahead>
      <div className={clsx(styles.iconContainer, "text-secondary")}>
        {isLoading ? (
          <Spinner animation="border" size="sm" variant="dark" />
        ) : (
          <Search size={variant === "md" ? 24 : 16} />
        )}
      </div>
    </div>
  )
}
