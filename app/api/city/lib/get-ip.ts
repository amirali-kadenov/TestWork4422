import { headers } from "next/headers"

const removeIpv6Prefix = (ip: string) => {
  if (ip.substring(0, 7) == "::ffff:") {
    ip = ip.substring(7)
  }

  return ip
}

export const getIp = async () => {
  const headersList = await headers()

  const forwardedFor = headersList.get("x-forwarded-for")

  let ip = forwardedFor?.split(",")[0]

  ip = removeIpv6Prefix(ip ?? "")

  return ip
}
