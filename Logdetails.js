import "./Logdetails.css"
import logo from "../../images/logo_light.png";
import { useState } from "react";

function Logdetails()
{
    const[logdetailsdata]=useState([{
        technology:"5G",
        sector:"sector1",
        images:"Azimuth Cell",
        fieldstatus:"Done",
        uploaded:"Done",
        progress:"Done"
    },
    {
        technology:"5G",
        sector:"sector1",
        images:"Mechanical Cell",
        fieldstatus:"Not Done",
        uploaded:"Not Done",
        progress:"Done"
    },
    {
        technology:"4G",
        sector:"sector2",
        images:"Electrical Cell",
        fieldstatus:"Done",
        uploaded:"Not Done",
        progress:"Done"
    }])
    return (
        <div className="logdetails-main-div">
            <header className="logdetails-header">
                <div className="logdetails-header-logo">
                    <img src={logo} alt="insta-ict-logo" id="logdetails-logo"/>
                </div>
                <div className="logdetails-header-heading">
                    <h1>Log details</h1>
                </div>
                <div className="logdetails-header-rightdiv">
                    <button id="logdetails-header-button">X</button>
                </div>
            </header>
            <section className="logdetails-section">
                <div className="logdetails-subsection">
                    <table>
                        <thead>
                            <tr>
                                <th>Sr.No</th>
                                <th>Technology</th>
                                <th>Sector</th>
                                <th>Images</th>
                                <th>From field</th>
                                <th>Uploaded</th>
                                <th>Progress</th>
                            </tr>
                        </thead>
                        <tbody>
                            {logdetailsdata.map((logdata,index)=>(
                                <tr key={index+1}>
                                    <td>{index+1}</td>
                                    <td>{logdata.technology}</td>
                                    <td>{logdata.sector}</td>
                                    <td>{logdata.images}</td>
                                    <td>{logdata.fieldstatus}</td>
                                    <td>{logdata.uploaded}</td>
                                    <td>{logdata.progress}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    )
}

export default Logdetails;