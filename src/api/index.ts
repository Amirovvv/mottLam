import axios, { AxiosInstance } from 'axios'

const url: string = import.meta.env.VITE_BASE_URL

const api: AxiosInstance = axios.create({
  baseURL: url
})

export { api }