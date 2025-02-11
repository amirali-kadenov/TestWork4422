import clsx from "clsx"
import { Heart, CloudSun } from "lucide-react"
import Link from "next/link"
import type React from "react"
import { Suspense, type ReactNode } from "react"
import {
  Navbar,
  Nav,
  Container,
  NavLink,
  Col,
  NavbarBrand,
  NavbarToggle,
  NavbarCollapse,
} from "react-bootstrap"

import { UseCurrentLocation } from "@/features/use-current-location"
import { PATHS } from "@/shared/constants/paths"
import style from "./header.module.scss"

type Props = {
  children?: ReactNode
}

export const Header = ({ children }: Props) => {
  return (
    <header>
      <Navbar variant="dark" expand="md" className="py-4" bg="dark">
        <Container className="d-flex justify-content-between">
          <Col xs={8} sm={4}>
            <NavbarBrand
              as={Link}
              href={PATHS.HOME}
              className="fw-bold d-flex align-items-end gap-2"
            >
              <CloudSun width={30} height={30} />
              weather-app
            </NavbarBrand>
          </Col>

          <NavbarToggle aria-controls="controls" />

          <NavbarCollapse id="controls" className={clsx(style.navbar)}>
            {children}

            <Col xs={3} md={6}>
              <Nav className="justify-content-end flex-row d-flex">
                <NavLink className="me-2" as={Link} href={PATHS.FAVORITES}>
                  <Heart size={25} />
                </NavLink>

                <Suspense>
                  <UseCurrentLocation />
                </Suspense>
              </Nav>
            </Col>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </header>
  )
}
