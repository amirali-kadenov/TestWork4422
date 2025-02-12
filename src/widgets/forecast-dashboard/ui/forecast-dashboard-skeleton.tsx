"use client"

import clsx from "clsx"
import {
  Card,
  Container,
  Row,
  Col,
  CardBody,
  Placeholder,
} from "react-bootstrap"
import styles from "./forecast-dashboard.module.scss"

export const ForecastDashboardSkeleton = () => {
  return (
    <Container className="p-4 bg-dark">
      <Card className="bg-dark text-light border-secondary">
        <CardBody className="p-4">
          <Placeholder as="div" animation="glow" className="mb-4">
            <Placeholder xs={4} />
          </Placeholder>

          <Row>
            <Col md={6}>
              <Placeholder as="div" animation="glow" className="mb-4">
                <Placeholder xs={6} className="mb-3" />
                <Placeholder xs={4} className="mb-3" />
                <Placeholder xs={8} className="mb-3" />
              </Placeholder>

              <Row className="g-3 mt-3">
                {[1, 2, 3, 4].map((i) => (
                  <Col xs={6} key={i}>
                    <Card className="bg-dark text-light border-secondary">
                      <CardBody>
                        <Placeholder as="div" animation="glow">
                          <Placeholder xs={8} className="mb-2" />
                          <Placeholder xs={6} />
                        </Placeholder>
                      </CardBody>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>

            <Col md={6}>
              {[1, 2].map((i) => (
                <Card
                  className="bg-dark text-light border-secondary mb-4"
                  key={i}
                >
                  <CardBody>
                    <Placeholder as="div" animation="glow">
                      <Placeholder xs={12} size="lg" />
                      <Placeholder xs={12} />
                    </Placeholder>
                  </CardBody>
                </Card>
              ))}

              <Row className="g-3">
                {[1, 2].map((i) => (
                  <Col xs={6} key={i}>
                    <Card className="bg-dark text-light border-secondary">
                      <CardBody>
                        <Placeholder as="div" animation="glow">
                          <Placeholder xs={8} className="mb-2" />
                          <Placeholder xs={6} />
                        </Placeholder>
                      </CardBody>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </CardBody>
      </Card>

      <div className="d-flex flex-column gap-5 mt-5">
        {[1, 2, 3].map((_, i) => (
          <div key={i}>
            <Placeholder as="div" animation="glow">
              <Placeholder xs={4} />
            </Placeholder>

            <Card
              className={clsx(
                "bg-dark text-light border-secondary mt-4 overflow-hidden",
                styles.forecast,
              )}
            >
              <CardBody className="p-4 mt-2">
                <Row className="flex-nowrap">
                  {[1, 2, 3, 4, 5, 6].map((_, i) => (
                    <Col
                      key={i}
                      style={{ minWidth: 160 }}
                      className={styles.forecastItem}
                    >
                      <Card className="bg-dark text-light border-secondary">
                        <CardBody>
                          <Placeholder as="div" animation="glow">
                            <Placeholder xs={7} className="mb-3" />
                            <Placeholder xs={9} className="mb-3" />
                            <Placeholder xs={8} />
                          </Placeholder>
                        </CardBody>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
    </Container>
  )
}
