import axios, { AxiosInstance } from 'axios'

const api: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3562',
})

type login = {
  code: string
  username: string
}

export class service {
  static async login(username: string, password: string): Promise<any> {
    const user = await api.post(`/login`, {
      username,
      password,
    })

    return user
  }

  static async register(
    username: string,
    password: string,
    cpf: string
  ): Promise<any> {
    const user = await api.post(`/login`, {
      username,
      password,
      cpf,
    })

    return user
  }

  static async getUserByCode(code: string): Promise<any> {
    const user = await api.get(`//users/${code}`)

    return user
  }
}
