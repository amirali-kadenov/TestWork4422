"use server"
import { cookies } from "next/headers"
import { KEYS } from "@/shared/constants/keys"

export const setCityCookie = async (city: string) => {
  "use server"

  const cookiesStore = await cookies()

  cookiesStore.set(KEYS.USER_CITY, city, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: Infinity,
  })
}
