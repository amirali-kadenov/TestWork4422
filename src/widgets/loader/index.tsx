import clsx from "clsx"
import { Col, Container, Row, Spinner } from "react-bootstrap"
import styles from "./loader.module.scss"

export const Loader = () => {
  return (
    <Container
      fluid
      className={clsx(
        "d-flex align-items-center justify-content-center",
        styles.loaderContainer,
      )}
    >
      <Row>
        <Col className="text-center">
          <Spinner
            animation="border"
            role="status"
            variant="primary"
            className={styles.loader}
          >
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          <p className="mt-3 text-white-50">Loading...</p>
        </Col>
      </Row>
    </Container>
  )
}
