import React from 'react'
import RegStyle from './Reg.style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import { useState, useContext } from 'react'
import { Link } from '@mui/material'
import UserAuth from 'helpers/user/usercontext'
import { useRouter } from 'next/router'

function Reg() {
  const router = useRouter()
  const context = useContext(UserAuth)
  const [userData, setUserData] = useState({
    name: '',
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

  // disable submit button is any input has not been filled
  const disabledSubmitBtn = Object.values(userData).some((val) => val === '')

  if (context.user) {
    router.push('/dashboard')
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
            name="name"
            autoComplete="off"
            type="text"
            value={userData.name}
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

        <button
          type="submit"
          className="submit-button"
          disabled={disabledSubmitBtn}
        >
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
