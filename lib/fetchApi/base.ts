import axios from "axios"

const axiosBase = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true,
    timeout: 1000,
})

export default axiosBase
