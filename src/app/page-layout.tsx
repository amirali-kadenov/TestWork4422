"use client"

import type { ReactNode } from "react"
import { Col } from "react-bootstrap"

import { CitySearch } from "@/features/city-search"
import { PageWrapper } from "@/shared/ui/page-wrapper"
import { Header } from "@/widgets/header"

type Props = {
  children: ReactNode
}

export const PageLayout = ({ children }: Props) => {
  return (
    <>
      <Header>
        <Col>
          <CitySearch />
        </Col>
      </Header>

      <PageWrapper>{children}</PageWrapper>
    </>
  )
}
