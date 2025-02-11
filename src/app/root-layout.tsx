import "./styles/globals.scss"
import "bootstrap/dist/css/bootstrap.css"
import clsx from "clsx"
import { type Metadata } from "next"

import type { ReactNode } from "react"
import { inter } from "./fonts/inter"

export const metadata: Metadata = {
  title: "Weather App",
  description: "Description",
}

type Props = {
  children: ReactNode
}

export const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body className={clsx(inter.className, "bg-dark text-light")}>
        {children}
      </body>
    </html>
  )
}
