import type { AxiosInstance } from 'axios'
import axios from 'axios'

const url: string = import.meta.env.VITE_BASE_URL

const api: AxiosInstance = axios.create({
  baseURL: url,
})

export { api }
