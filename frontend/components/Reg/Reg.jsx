import React from 'react'
import RegStyle from './Reg.style'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { Link } from '@mui/material'
import UserAuth from 'helpers/user/usercontext'
import CloseIcon from '@mui/icons-material/Close'
import axios from 'helpers/Axios'
import { userAuth } from 'helpers/user/usercontext'

function Reg() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repassword, setRepassword] = useState('')
  const [message, setMessage] = useState('')
  const [isLoading, setisLoading] = useState(false)
  const { login } = userAuth()


  async function handleSubmit(e){
    e.preventDefault()
    
    if(!name || !email || !password || !repassword){
      setMessage("Please fill all fields")
      return
    }
    
    if(repassword !== password){
      setMessage("Password doesn't match")
      return
    }
    
    setisLoading(true)

    try {
      const { data } = await axios.post(`/user/register`, { name, email, password })
      const { user } = data

      // login user after registering
      login({ name: user.name, email: user.email })

      // store the token in localStorage after loggin in
      localStorage.setItem('token', data.access_token);
      setMessage(data.message)
    } 
    catch (error) {
      setMessage(error.response.data)
    }

    setisLoading(false)
  }

  return (
    <RegStyle>
      <form onSubmit={handleSubmit} className="form-wrapper">
        <p className="reg-title">Sign Up</p>

        <div className="reg-field">
          <div className="reg-label">
            <FontAwesomeIcon icon={faUser} />
          </div>
          <input
            className="reg-input"
            name="username"
            autoComplete="off"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
          />
        </div>

        <div className="reg-field">
          <div className="reg-label">
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <input
            className="reg-input"
            name="email"
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            value={email}
            placeholder="Email Address"
          />
        </div>

        <div className="reg-field">
          <div className="reg-label">
            <FontAwesomeIcon icon={faLock} />
          </div>
          <input
            className="reg-input"
            name="password"
            autoComplete="off"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            value={password}
            placeholder="Password"
          />
        </div>

        <div className="reg-field">
          <div className="reg-label">
            <FontAwesomeIcon icon={faLock} />
          </div>
          <input
            className="reg-input"
            name="repassword"
            autoComplete="off"
            onChange={(e) => setRepassword(e.target.value)}
            type="password"
            value={repassword}
            placeholder="Confirm Password"
          />
        </div>

        <div className="message_container">
        {isLoading && <div className="loader"></div>}

          {message && (
            <div className="message">
              {message}
              <CloseIcon className="close" onClick={() => setMessage('')} />
            </div>
          )}
        </div>

        <button type="submit" className="submit-button">
          Submit
        </button>

        <p className="foot-text">
          Already registered? Login&nbsp;
          <Link href="/login" className="foot-text underline">
            here
          </Link>
        </p>
      </form>
    </RegStyle>
  )
}
export default Reg
