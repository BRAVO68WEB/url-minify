import UserAuth from './usercontext'
import { useState } from 'react'
import axios from 'helpers/Axios'

const UserAuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const login = (data) => {
    axios
      .post(`http://localhost:5000/user/login`, {
        email: data.email,
        password: data.password,
      })
      .then((data) => {
        console.log(data.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  const createAcc = (data) => {
    axios
      .post(`http://localhost:5000/user/register`, {
        email: data.email,
        password: data.password,
        name: data.name,
      })
      .then((data) => {
        console.log(data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  const logout = () => {
    setUser(null)
  }
  const context = { user, login, logout, createAcc }

  return <UserAuth.Provider value={context}>{children}</UserAuth.Provider>
}
export default UserAuthProvider
