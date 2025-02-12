import { NextResponse } from "next/server"
import { DEFAULT_CITY, IP_API_URL, LOCALHOST_IP } from "./lib/constants"
import { getIp } from "./lib/get-ip"

import type { IpApiResponse } from "./lib/types"

// Get user city
export async function GET() {
  try {
    const ip = await getIp()

    let ipApiUrl = IP_API_URL

    if (ip !== LOCALHOST_IP) {
      ipApiUrl += ip
    }

    const response = await fetch(`${ipApiUrl}/json/`)

    const json = (await response.json()) as IpApiResponse

    if (json.error) {
      console.error("Failed to get location", json)

      return NextResponse.json({ city: DEFAULT_CITY })
    }

    return NextResponse.json({ city: json.city })
  } catch (error) {
    console.error("Failed to get location", error)

    return NextResponse.json({ data: DEFAULT_CITY })
  }
}
