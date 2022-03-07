import UserAuth from "./usercontext"
import { useState } from 'react'
import axios from "axios"

const UserAuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const login = () => {
        setUser('default')
    }
    const createAcc = (data) => {
        axios.post('http://localhost:5000/user/register/', {
            email: data.email,
            password: data.password,
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    const logout = () => {
        setUser(null)
    }
    const context = { user, login, logout, createAcc }

    return <UserAuth.Provider value={context}>{children}</UserAuth.Provider>
}
export default UserAuthProvider;