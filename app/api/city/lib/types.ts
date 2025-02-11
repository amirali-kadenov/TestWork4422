export type IpApiResponse =
  | {
      error: true
      reason: string
      message: string
      city?: never
    }
  | {
      error?: never
      city: string
    }
