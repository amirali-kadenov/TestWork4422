"use client"

import type { PageWrapperProps } from "@/shared/ui/page-wrapper"
import { PageWrapper } from "@/shared/ui/page-wrapper"
import { HeaderWithSearch } from "@/widgets/header"

type Props = Pick<PageWrapperProps, "withCenteredContent" | "children">

export const PageLayout = (props: Props) => {
  return (
    <>
      <HeaderWithSearch />
      <PageWrapper {...props} />
    </>
  )
}
