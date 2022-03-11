import React from 'react'
import LoginStyle from './Login.style'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import UserAuth, { UserContext } from '../../helpers/user/usercontext'
import { useState } from 'react'
import Link from 'next/link'
import { useContext } from 'react'

function Login() {
  const context = useContext(UserAuth)
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  })
  const handleSubmit = (e) => {
    e.preventDefault()
    setUserData(userData)
    context.login(userData)
  }

  const handleInput = (event) => {
    const name = event.target.name
    const value = event.target.value
    setUserData({ ...userData, [name]: value })
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
            onChange={handleInput}
            type="text"
            value={userData.email}
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
            onChange={handleInput}
            type="password"
            value={userData.password}
            placeholder="Password"
          />
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
