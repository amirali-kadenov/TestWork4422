"use client"

import {
  Card,
  Container,
  Row,
  Col,
  CardBody,
  Placeholder,
} from "react-bootstrap"

export const ForecastDashboardSkeleton = () => {
  return (
    <div className="p-4 bg-dark">
      <Container>
        <Row className="mb-4">
          <Col md={4}>
            <Card className="bg-dark text-light border-secondary">
              <CardBody>
                <Placeholder as={Card.Text} animation="glow">
                  <Placeholder xs={8} size="lg" className="mb-3" />
                  <Placeholder xs={12} size="lg" className="mb-3" />
                  <Placeholder xs={10} />
                </Placeholder>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Card className="bg-dark text-light border-secondary">
          <CardBody className="p-4">
            <Placeholder as="div" animation="glow" className="mb-4">
              <Placeholder xs={4} />
            </Placeholder>

            <Row>
              <Col md={6}>
                <Placeholder as="div" animation="glow" className="mb-4">
                  <Placeholder xs={6} size="lg" className="mb-3" />
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
                <Card className="bg-dark text-light border-secondary mb-4">
                  <CardBody>
                    <Placeholder as="div" animation="glow">
                      <Placeholder xs={12} size="lg" />
                      <Placeholder xs={12} />
                    </Placeholder>
                  </CardBody>
                </Card>

                <Card className="bg-dark text-light border-secondary mb-4">
                  <CardBody>
                    <Placeholder as="div" animation="glow">
                      <Placeholder xs={12} size="lg" />
                      <Placeholder xs={12} />
                    </Placeholder>
                  </CardBody>
                </Card>

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
      </Container>
    </div>
  )
}
