import axios from 'axios'

export const fetchUser = (page: number = 1) => {
    return axios.get(`https://reqres.in/api/users?page=${page}`)
}