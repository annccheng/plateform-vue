import axios from "axios"

export const userApi = {
  login: async() => {
    const { data, status } = await axios.post('/mock/login', { username: 'emilys', password: 'emilyspass' })
    return { data: data, code: status }
  },
}