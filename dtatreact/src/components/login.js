import "./css/login.css";
import logo from "./css/images/logo_light.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { auth } from "./firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const navigate = useNavigate();
  function HandleAdminWelcome() {
    navigate("/AdminWelcome");
  }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        HandleAdminWelcome();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="login-div">
      <div className="login-left-div"></div>
      <div className="login-right-div">
        <form onSubmit={signIn}>
          <header className="login-header">
            <img src={logo} alt="company-logo" />
          </header>
          <div className="login-Dash">
            <h3>Login</h3>
            <div className="login.panel">
              <input
                className="login-input"
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="login-input"
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div>
                <button className="login-button" type="submit">
                  Login
                </button>
              </div>
              <div className="login-forgot-password">
                <Link className="login-link" to="/ChangePassword">
                  Forgot Password?
                </Link>
              </div>
              <div className="login-new-user">
                <Link className="login-link" to="/SignUp">
                  New User? Sign Up
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
