import clsx from "clsx"

import type { ReactNode } from "react"
import styles from "./page-wrapper.module.scss"

type Props = {
  className?: string
  withCenteredContent?: boolean
  children: ReactNode
}

export const PageWrapper = ({
  className,
  withCenteredContent,
  children,
}: Props) => {
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
