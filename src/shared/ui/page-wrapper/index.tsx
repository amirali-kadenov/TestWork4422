import clsx from "clsx"

import type { ComponentPropsWithoutRef } from "react"
import style from "./page-wrapper.module.scss"

type Props = ComponentPropsWithoutRef<"main">

export const PageWrapper = (props: Props) => {
  return (
    <main {...props} className={clsx(style.pageWrapper, props.className)} />
  )
}
