import React from "react";
import LoginStyle from "./Login.style";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faLock,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../../pages/user/usercontext";
import { useState } from "react";
import Link from "next/link";
import { useContext } from "react";

function Login() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <LoginStyle>
      <form className="form-wrapper">
        <div className="reg-wide-container">
          <FontAwesomeIcon icon={faClose} />
        </div>

        <p className="reg-title">Sign in</p>

        <img
          src="/images/user.png"
          width={100}
          height={100}
          style={{ "margin-bottom": 20 }}
        ></img>

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
        <Link href="/">
          <button type="submit" className="submit-button">
            Submit
          </button>
        </Link>
        <p className="foot-text">
          New here?&nbsp;
          <Link href="/signup" exact className="foot-text underline">
            Create an account
          </Link>
        </p>
      </form>
    </LoginStyle>
  );
}
export default Login;
