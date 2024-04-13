import "./css/projectSelection.css";
import logo from "./css/images/logo_light.png";
import { useState } from "react";

function ProjectSelection() {
  const [displayactivity, setdisplayactivity] = useState(
    "display-activity-hide"
  );
  const [displayprofile, setdisplayprofile] = useState("display-profile-hide");
  const [dropdownvalues, setdropdownvalues] = useState({
    project: "",
    operator: "",
    activity: "",
  });
  const [displayvalue, setdisplayvalue] = useState("hidevalue");
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
  function handleprojectchange(e) {
    setdropdownvalues({
      project: e.target.value,
      operator: dropdownvalues.operator,
      activity: dropdownvalues.activity,
    });
  }
  function handleoperatorchange(e) {
    setdropdownvalues({
      project: dropdownvalues.project,
      operator: e.target.value,
      activity: dropdownvalues.activity,
    });
  }
  function handleactivitychange(e) {
    setdropdownvalues({
      project: dropdownvalues.project,
      operator: dropdownvalues.operator,
      activity: e.target.value,
    });
  }

  return (
    <div className="projectsel-Main-div">
      <header className="projectsel-header">
        <div className="projectsel-header-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="projectsel-header-title">
          <h1 className="h1-projectSelection">Project Selection</h1>
        </div>
        <div className="projectsel-header-right-div">
          <div className="projectsel-dropdown">
            <button
              className="projectsel-header-btn"
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
          <div className="projectsel-dropdown">
            <button
              className="projectsel-header-btn"
              onClick={handleprofiledropdown}
              onBlur={handledropdown}
            >
              Profile
            </button>
            <div className={displayprofile}>
              <a>My details</a>
              <a>Change Password</a>
              <a>Logout</a>
            </div>
          </div>
        </div>
      </header>
      <div className="projectsel-body-div">
        <div className="box">
          <dl>
            <dt className="dt-projectSelection">
              <h3>Select Project</h3>
            </dt>
            <dd>
              <select name="project" onChange={handleprojectchange}>
                <option value="ericssion">Ericssion</option>
                <option value="nokia">Nokia</option>
                <option value="vil">VIL</option>
              </select>
            </dd>
            <dt className="dt-projectSelection">
              <h3>Select Operator</h3>
            </dt>
            <dd>
              <select name="operator" onChange={handleoperatorchange}>
                <option value="bharti">Bharti</option>
                <option value="airtel">Airtel</option>
                <option value="jio">JIO</option>
                <option value="vil">VIL</option>
              </select>
            </dd>
            <dt className="dt-projectSelection">
              <h3>Select Circle</h3>
            </dt>
            <dd>
              <select id="project" name="circle">
                <option value="MP" id="MP">
                  MP (Madhya Pradesh)
                </option>
                <option value="UPW">UPW (UP West)</option>
                <option value="UPE">UPE (UP East)</option>
                <option value="RJ">RJ (Rajasthan)</option>
                <option value="GUJ">GUJ (Gujarat)</option>
                <option value="MH">MH (Maharashtra)</option>
                <option value="Bihar">Bihar</option>
                <option value="ROB">ROB (Rest of Bengal)</option>
                <option value="PNB">PNB (Punjab)</option>
                <option value="KTK">KTK (Karnataka)</option>
                <option value="MUM">MUM (Mumbai)</option>
                <option value="Chennai">Chennai</option>
                <option value="JH">JH (Jharkhand)</option>
                <option value="KOC">Kolkata(KOC)</option>
                <option value="HP">Himachal Pradesh (HP)</option>
                <option value="HR">HR (Haryana)</option>
                <option value="AP">AP (Andhra Pradesh)</option>
                <option value="ROTN">ROTN (Rest of Tamil Nadu)</option>
                <option value="KE">KE (Kerala)</option>
              </select>
            </dd>
            <dt className="dt-projectSelection">
              <h3>Activity</h3>
            </dt>
            <dd>
              <select name="Activity" onChange={handleactivitychange}>
                <option value="4G Cluster">4G Cluster</option>
                <option value="4G SCFT">4G SCFT</option>
                <option value="5G Cluster">5G Cluster</option>
                <option value="5G SCFT/SSV">5G SCFT/SSV</option>
              </select>
            </dd>
            <dd>
              <select
                className="projectsel-number-option"
                id={displayvalue}
                name="valuedropdown"
              >
                <option value="700">700</option>
                <option value="3500">3500</option>
              </select>
            </dd>
            <dd>
              <button type="button" className="projectsel-button">
                Submit
              </button>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  );
}

export default ProjectSelection;
