import axios, { AxiosInstance } from 'axios'

const api: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3562',
})

export class service {
  static async login(email: string, password: string): Promise<any> {
    const user = await api.post(`/login`, {
      email,
      password,
    })

    return user
  }

  static async register(
    email: string,
    username: string,
    password: string
  ): Promise<any> {
    const user = await api.post(`/users`, {
      email,
      username,
      password,
    })

    return user
  }

  static async getUserByCode(code: string): Promise<any> {
    const user = await api.get(`//users/${code}`)

    return user
  }
}
