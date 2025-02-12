"use client"

import clsx from "clsx"
import type React from "react"
import { Card, Col, Container, Placeholder, Row } from "react-bootstrap"

import styles from "./weather-info.module.scss"

export const WeatherInfoSkeleton: React.FC = () => {
  return (
    <Container className="mt-5">
      <Card className="p-4 bg-dark rounded-4 text-white w-100 ">
        <Row className="mb-4 flex-nowrap">
          <Col xs={6} className="d-flex justify-content-end pe-md-5">
            <Placeholder as={Card.Text} animation="glow">
              <Placeholder
                xs={8}
                size="lg"
                className={clsx(styles.circle, "ml-auto")}
              />
            </Placeholder>
          </Col>
          <Col xs={6} className={styles.content}>
            <Placeholder
              animation="glow"
              className="d-flex flex-column justify-content-center"
            >
              <Placeholder xs={4} size="lg" className="mb-3" />
              <Placeholder xs={8} size="lg" className="mb-3" />
              <Placeholder xs={10} size="lg" className="mb-3" />
              <Placeholder xs={8} size="lg" className="mb-3" />
              <Placeholder xs={4} size="lg" className="mb-3" />
              <Placeholder xs={6} size="lg" className="mb-3" />
            </Placeholder>
          </Col>
        </Row>
      </Card>
    </Container>
  )
}
