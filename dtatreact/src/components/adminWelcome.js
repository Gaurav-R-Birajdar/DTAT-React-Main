import "./css/adminWelcome.css";
import logo from "./css/images/logo_light.png";
import { useState } from "react";
// import { Link } from "react-router-dom";

function AdminWelcome() {
  const [displayactivity, setdisplayactivity] = useState(
    "display-activity-hide"
  );
  const [displayprofile, setdisplayprofile] = useState("display-profile-hide");

  function handleprofiledropdown() {
    if (displayprofile === "display-profile-show") {
      setdisplayprofile("display-profile-hide");
      setdisplayactivity("display-activity-hide");
    } else {
      setdisplayprofile("display-profile-show");
      setdisplayactivity("display-activity-hide");
    }
  }
  function handleallocationdropdown() {
    if (displayactivity === "display-activity-show") {
      setdisplayprofile("display-profile-hide");
      setdisplayactivity("display-activity-hide");
    } else {
      setdisplayprofile("display-profile-hide");
      setdisplayactivity("display-activity-show");
    }
  }
  function handledropdown() {
    setdisplayprofile("display-profile-hide");
    setdisplayactivity("display-activity-hide");
  }
  return (
    <div className="adminwelcome-main-div">
      <header className="adminwelcome-header">
        <div className="adminwelcome-header-logo">
          <img src={logo} className="adminwelcome-img" alt="insta ict logo" />
        </div>
        <div className="adminwelcome-header-right-div">
          <div className="adminwelcome-dropdown">
            <button
              className="adminwelcome-header-btn"
              onClick={handleallocationdropdown}
              onBlur={handledropdown}
            >
              Activity
            </button>
            <div className={displayactivity}>
              <a>Task Allocation</a>
              <a>Task Status</a>
            </div>
          </div>
          <div className="adminwelcome-dropdown">
            <button
              className="adminwelcome-header-btn"
              onClick={handleprofiledropdown}
              onBlur={handledropdown}
            >
              Profile
            </button>
            <div className={displayprofile}>
              <a to="/">My details</a>
              <a>Change Password</a>
              <a>Logout</a>
            </div>
          </div>
        </div>
      </header>
      <section className="adminwelcome-section">
        <div className="adminwelcome-subsection">
          <div>
            <h1>WELCOME TO INSTA-ICT</h1>
          </div>
          <div className="adminwelcome-section-buttonsdiv">
            <button id="task-allocation-btn">Task Allocation</button>
            <button id="dwnld-report-btn">Download Report</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AdminWelcome;
