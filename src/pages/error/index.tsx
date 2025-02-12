"use client"

import clsx from "clsx"
import { useEffect } from "react"
import styles from "./error-page.module.scss"

type Props = {
  error: Error & { digest?: string }
  reset: () => void
}

export const ErrorPage = ({ error, reset }: Props) => {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div
      className={clsx(
        "d-flex h-100 flex-column align-items-center justify-content-center",
        styles.page,
      )}
    >
      <h2 className="text-center">Something went wrong!</h2>
      <button className="mt-3 btn btn-primary" onClick={reset}>
        Try again
      </button>
    </div>
  )
}
