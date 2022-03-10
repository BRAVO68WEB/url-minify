import React from 'react'
import RegStyle from './Reg.style'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import { useState, useContext } from 'react'
import { Link } from '@mui/material'
import UserAuth from 'helpers/user/usercontext'

function Reg() {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
    repassword: '',
  })

  const handleInput = (event) => {
    const name = event.target.name
    const value = event.target.value
    setUserData({ ...userData, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setUserData(userData)
    context.createAcc(userData)
  }
  const context = useContext(UserAuth);
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
            value={userData.username}
            onChange={handleInput}
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

        <div className="reg-field">
          <div className="reg-label">
            <FontAwesomeIcon icon={faLock} />
          </div>
          <input
            className="reg-input"
            name="repassword"
            autoComplete="off"
            onChange={handleInput}
            type="password"
            value={userData.repassword}
            placeholder="Confirm Password"
          />
        </div>

        <button type="submit" className="submit-button">
          Submit
        </button>

        <p className="foot-text">
          Already registered? Login&nbsp;
          <Link href="/login" exact className="foot-text underline">
            here
          </Link>
        </p>
      </form>
    </RegStyle>
  )
}
export default Reg
