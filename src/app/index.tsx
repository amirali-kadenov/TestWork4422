import "./styles/globals.scss"
import { inter } from "./fonts/inter"
import { type Metadata } from "next"
import type { ReactNode } from "react"
import { BootstrapProvider } from "./providers/bootstrap-provider"

export const metadata: Metadata = {
  title: "Weather App",
  description: "Description",
}

type Props = {
  children: ReactNode
}

export const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BootstrapProvider>{children}</BootstrapProvider>
      </body>
    </html>
  )
}
