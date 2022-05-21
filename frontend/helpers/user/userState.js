import UserAuth from './usercontext'
import { useState } from 'react'
import axios from 'helpers/Axios'
import { useEffect } from 'react'

const storeJWT = (data) => {
  let jwt = data
  try {
    localStorage.setItem('jwt', jwt)
    return false
  } catch (e) {
    return true
  }
}

const fetchJWT = () => {
  try {
    let jwt = localStorage.getItem('jwt')
    return jwt
  } catch (e) {
    return false
  }
}

const UserAuthProvider = ({ children }) => {
   const handleLightMode = () => {
    setMode('dark')
  }
  const handleDarkMode = () => {
    setMode('light')
  }
  const [mode,setMode] = useState('light')
  const [user, setUser] = useState(null)
  const [jwt, setJwt] = useState(null)
  const [showPopUp,setPopUp] = useState(false)

  const popupHandler = (bool)=>{
    setPopUp(bool)
  }

  const login = async ({ email, password }) => {
    let login = true
    await axios
      .post(`/user/login`, {
        email: email,
        password: password,
      })
      .then(function (response) {
        setJwt(response.data.access_token)
        storeJWT(response.data.access_token)
      })
      .catch(function (error) {
        login = false
        console.error(error)
      })
    return login
  }
  const createAcc = async ({ email, password, name }) => {
    let register = true
    await axios
      .post(`/user/register`, {
        email: email,
        password: password,
        name: name,
      })
      .then(function (response) {
        console.log(response)
        setJwt(response.data)
        storeJWT(response.data)
      })
      .catch(function (error) {
        register = false
        console.error(error)
      })
    return register
  }
  const fetchUser = async () => {
    if (!jwt) {
      return
    }
    axios({
      headers: {
        Authorization: jwt,
      },
      method: 'GET',
      url: '/user/me',
    })
      .then((user) => {
          console.log(user);
        setUser(user.data)
      })
      .catch((err) => {
        console.error(err)
        setJwt(null)
        setUser(null)
        storeJWT(null)
      })
  }
  const logout = () => {
    setUser(null)
    setJwt(null)
    storeJWT(null)
  }
  const context = { jwt, user, mode, login, logout, createAcc, handleLightMode, handleDarkMode,fetchUser,popupHandler,showPopUp }
  useEffect(() => {
    let jwt = fetchJWT()
    if (jwt) {
      setJwt(jwt)
    }
  }, [])
  useEffect(() => {
    fetchUser()
  }, [jwt])

  return <UserAuth.Provider value={context}>{children}</UserAuth.Provider>
}
export default UserAuthProvider
