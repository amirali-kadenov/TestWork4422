import clsx from "clsx"

import type { ReactNode } from "react"
import styles from "./page-wrapper.module.scss"

export type PageWrapperProps = {
  className?: string
  withCenteredContent?: boolean
  children: ReactNode
}

export const PageWrapper = ({
  className,
  withCenteredContent,
  children,
}: PageWrapperProps) => {
  return (
    <main
      className={clsx(
        styles.pageWrapper,
        withCenteredContent &&
          "d-flex align-items-center justify-content-center",
        className,
      )}
    >
      {children}
    </main>
  )
}
