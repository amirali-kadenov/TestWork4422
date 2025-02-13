"use client"
import type { ReactNode } from "react"
import { SWRConfig } from "swr"

type Props = {
  children: ReactNode
}

export const SWRProvider = ({ children }: Props) => {
  return <SWRConfig>{children}</SWRConfig>
}
