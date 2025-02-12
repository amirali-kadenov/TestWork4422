"use client"

import clsx from "clsx"
import { Heart } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { NavLink } from "react-bootstrap"
import { PATHS } from "@/shared/constants/paths"

export const HeaderFavoriteButton = () => {
  const pathname = usePathname()

  return (
    <NavLink
      className={clsx("me-2", pathname === PATHS.FAVORITES && "text-success")}
      as={Link}
      href={PATHS.FAVORITES}
    >
      <Heart size={25} />
    </NavLink>
  )
}
