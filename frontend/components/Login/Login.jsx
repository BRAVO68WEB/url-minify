import React from 'react'
import LoginStyle from './Login.style'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import { UserContext } from '../../helpers/user/usercontext'
import { useState } from 'react'
import Link from 'next/link'
import { useContext } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import axios from 'helpers/Axios'

function Login() {
  const [email, setEmail] = useState('tejascs84@gmail.com')
  const [password, setPassword] = useState('123')
  const [message, setMessage] = useState('')
  const [isLoading, setisLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    

    if (!email) {
      setMessage('Email should not be blank')
      return
    }

    if (!password) {
      setMessage('Password should not be blank')
      return
    }

    setisLoading(true)

    try {
      const res = await axios.post(`/user/login`, { email, password })
      console.log(res);
      setMessage(res.data.message)
    } 
    catch (error) {
      console.log(error);
      setMessage('Error occured while Loggin in, please try again!!')
    }
    
    setisLoading(false)
  }

  return (
    <LoginStyle>
      <form className="form-wrapper" onSubmit={handleSubmit}>
        <p className="reg-title">Sign in</p>

        <img src="/images/user.png"></img>

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
          New here?&nbsp;
          <Link href="/signup" exact className="foot-text underline">
            Create an account
          </Link>
        </p>
      </form>
    </LoginStyle>
  )
}
export default Login
