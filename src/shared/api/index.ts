import axios from "axios"

import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios"

export class Api {
  private readonly _api: AxiosInstance

  constructor(private readonly baseUrl: string) {
    this._api = axios.create({
      baseURL: this.baseUrl,
      withCredentials: true,
    })

    this._api.interceptors.request.use(this.injectApiKey)
  }

  get = async <T = unknown, D = unknown>(
    url: string,
    config?: AxiosRequestConfig<D>,
  ) => {
    try {
      const response = await this._api.get<T, AxiosResponse<T>, D>(url, config)

      return response.data
    } catch (e) {
      console.warn(e)

      return null
    }
  }

  injectApiKey(config: InternalAxiosRequestConfig) {
    config.params.appid = process.env.OPENWEATHER_API_KEY

    return config
  }
}
