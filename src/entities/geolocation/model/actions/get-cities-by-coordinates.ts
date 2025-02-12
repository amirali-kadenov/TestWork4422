"use server"

import { geolocationApi } from "@/entities/geolocation/model/api"

export const getCitiesByCoordinates = geolocationApi.getCitiesByCoordinates
