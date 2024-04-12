import "./css/login.css";
import logo from "./css/images/logo_light.png";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login-div">
      <div className="login-left-div"></div>
      <div className="login-right-div">
        <header className="login-header">
          <img src={logo} alt="company-logo" />
        </header>
        <div className="login-Dash">
          <h3>Login</h3>
          <div className="random">
            <input
              className="login-input"
              type="email"
              placeholder="Enter Email"
            />
            <input
              className="login-input"
              type="password"
              placeholder="Enter password"
            />
            <div>
              <button className="login-button">Login</button>
            </div>
            <Link className="login-link" to="/ChangePassword">
              Forgot Password?
            </Link>
            <Link className="login-link" to="/SignUp">
              New User? Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
