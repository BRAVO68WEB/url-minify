import { createContext, useState, useContext } from 'react'

const UserContext = createContext()

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState({})

  function login({ name, email }){
    setUser({ name, email })
  }

  function logout(){
    setUser({})
  }

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  )
}

export function userAuth() {
  return useContext(UserContext)
}
