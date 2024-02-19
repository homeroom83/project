import axios from 'axios'
import { useUserStore } from '@/store/user'

const api = axios.create({
  baseURL: import.meta.env.VITE_API
})

const apiAuth = axios.create({
  baseURL: import.meta.env.VITE_API
})

/*
  1. 呼叫 axios.get / axios.post 時
  2. interceptors.request 請求攔截器
  3. 送出請求
  4. interceptors.response 回應攔截器
  5. 傳到呼叫地方的 .then() .catch
*/
apiAuth.interceptors.request.use(config => {
  const user = useUserStore()
  config.headers.Authorization = 'Bearer ' + user.token
  return config
})

export const useApi = () => {
  return { api, apiAuth }
}
