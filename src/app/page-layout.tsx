"use client"

import { type ReactNode } from "react"

import { PageWrapper } from "@/shared/ui/page-wrapper"
import { HeaderWithSearch } from "@/widgets/header"

type Props = {
  children: ReactNode
}

export const PageLayout = ({ children }: Props) => {
  return (
    <>
      <HeaderWithSearch />
      <PageWrapper>{children}</PageWrapper>
    </>
  )
}
