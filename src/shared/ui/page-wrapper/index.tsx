import clsx from "clsx"

import type { ComponentPropsWithoutRef } from "react"
import styles from "./page-wrapper.module.scss"

type Props = ComponentPropsWithoutRef<"main">

export const PageWrapper = (props: Props) => {
  return (
    <main {...props} className={clsx(styles.pageWrapper, props.className)} />
  )
}
