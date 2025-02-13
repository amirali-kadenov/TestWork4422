"use client"

import { Suspense, type ReactNode } from "react"

import { PageWrapper } from "@/shared/ui/page-wrapper"
import { HeaderWithSearch } from "@/widgets/header"
import { Loader } from "@/widgets/loader"

type Props = {
  children: ReactNode
}

export const PageLayout = ({ children }: Props) => {
  return (
    <>
      <HeaderWithSearch />
      <PageWrapper>
        <Suspense fallback={<Loader />}>{children}</Suspense>
      </PageWrapper>
    </>
  )
}
