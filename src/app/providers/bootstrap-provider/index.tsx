"use client"

import { SSRProvider } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.css"
import type { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export const BootstrapProvider = ({ children }: Props) => {
  return <SSRProvider>{children}</SSRProvider>
}
