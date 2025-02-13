"use client"

import { useEffect } from "react"
import { PageWrapper } from "@/shared/ui/page-wrapper"
import { HeaderWithSearch } from "@/widgets/header"

type Props = {
  error: Error & { digest?: string }
  reset: () => void
}

export const ErrorPage = ({ error, reset }: Props) => {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <>
      <HeaderWithSearch />

      <PageWrapper withCenteredContent>
        <div>
          <h2 className="text-center">Something went wrong!</h2>
          <button className="mt-3 btn btn-primary" onClick={reset}>
            Try again
          </button>
        </div>
      </PageWrapper>
    </>
  )
}
