import axios from 'axios'

const API_URL = process.env.NEXT_PUBLIC_API_URL

export default axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
})
