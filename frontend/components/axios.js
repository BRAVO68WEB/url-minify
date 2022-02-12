import axios from 'axios'

const URL = process.env.NEXT_PUBLIC_BACKEND_API;

const instance = axios.create({
    baseURL: URL,
    headers: {
      "Content-Type": "application/json",
    },
})

export default instance