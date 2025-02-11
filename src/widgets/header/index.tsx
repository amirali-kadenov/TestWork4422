import { Heart, CloudSun } from "lucide-react"
import Link from "next/link"
import type React from "react"
import { Suspense, type ReactNode } from "react"
import { Navbar, Nav, Container, NavLink, Col } from "react-bootstrap"

import { UseCurrentLocation } from "@/features/use-current-location"
import { PATHS } from "@/shared/constants/paths"

type Props = {
  children?: ReactNode
}

export const Header = ({ children }: Props) => {
  return (
    <header>
      <Navbar variant="dark" expand="lg" className="py-4">
        <Container className="justify-content-between">
          <Col xs={4}>
            <NavLink
              as={Link}
              href={PATHS.HOME}
              className="fw-bold d-flex align-items-end gap-2"
            >
              <CloudSun width={30} height={30} />
              weather-app
            </NavLink>
          </Col>

          {children}

          <Col xs={4} className="justify-content-end d-flex">
            <Nav>
              <NavLink className="me-2" as={Link} href={PATHS.FAVORITES}>
                <Heart size={25} />
              </NavLink>

              <Suspense>
                <UseCurrentLocation />
              </Suspense>
            </Nav>
          </Col>
        </Container>
      </Navbar>
    </header>
  )
}
