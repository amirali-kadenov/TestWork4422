import Link from "next/link"
import { Button, Container } from "react-bootstrap"

import { PATHS } from "@/shared/constants/paths"
import { PageWrapper } from "@/shared/ui/page-wrapper"
import { HeaderWithSearch } from "@/widgets/header"

export const NotFoundPage = () => {
  return (
    <>
      <HeaderWithSearch />

      <PageWrapper withCenteredContent>
        <Container className="d-flex flex-column align-items-center justify-content-center page">
          <h2 className="fs-4 fw-semibold">404 Not Found</h2>
          <p>The page you are looking for could not be found.</p>
          <Link href={PATHS.HOME} passHref>
            <Button variant="primary" className="mt-4">
              Go Back
            </Button>
          </Link>
        </Container>
      </PageWrapper>
    </>
  )
}
