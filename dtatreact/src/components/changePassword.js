import "./css/changePassword.css";
import logo from "./css/images/logo_light.png";

function ChangePassword() {
  function generateCaptcha() {
    var captcha = Math.random().toString(36).substring(7);
    document.getElementById("captchaImage").src =
      "https://via.placeholder.com/120x40?text=" + captcha;
  }
  function validateForm() {
    var userEmail = document.getElementById("email").value;
    var userCaptcha = document.getElementById("captcha").value;
    var captchaImage = document
      .getElementById("captchaImage")
      .src.split("=")[1];

    if (userEmail.trim() === "" || userCaptcha.trim() === "") {
      alert("Please fill in all fields.");
    } else if (userCaptcha !== captchaImage) {
      alert("Captcha is incorrect. Please try again.");
      generateCaptcha(); // Refresh captcha on incorrect input
    } else {
      // Redirect to welcome.html upon successful form submission

      document.getElementById("resetPasswordForm").submit();
      alert("password reset successfully");
    }
  }

  window.onload = generateCaptcha;

  return (
    <div className="main-div-changepass">
      <div className="changepass-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="forgotpass">
        <div className="title-text">
          <p>Reset Password</p>
        </div>
        <form onSubmit={validateForm}>
          <dl>
            <dt>Email</dt>
            <dd>
              <input
                className="changepass-input"
                type="text"
                name="Email"
                id="email"
                placeholder="Enter your Email"
                required
              />
            </dd>
            <dd id="captchacontainer">
              <img
                id="captchaImage"
                src="https://via.placeholder.com/120x40"
                alt="Captcha"
              />
              <button onClick={generateCaptcha} type="button">
                Refresh
              </button>
            </dd>
            <dt>Captcha</dt>
            <dd>
              <input
                type="text"
                className="changepass-input"
                id="captcha"
                name="Captcha"
                placeholder="Enter the Captcha"
                required
              />
            </dd>
          </dl>
          <div className="buttonsdiv">
            <button className="changepass-btn" type="submit">
              submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ChangePassword;
