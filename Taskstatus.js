import { HeaderComponent } from "../HeaderComponent/HeaderComponent";
import "./Taskstatus.css"

function Taskstatus() {
    return (
        <div className="taskstatus-main-div">
            <HeaderComponent />
            <section className="taskstatus-section">
                <div className="taskstatus-subsection">
                    <h3 className="taskstatus-text">Task Status</h3>
                    <dl className="taskstatus-dl">
                        <dt >Select Task Status</dt>
                        <dd>
                            <select id="circle1" class="dropdown">
                                <option value="Select Circle" disabled selected>-- Select Status --</option>
                                <option value="completed">Completed task</option>
                                <option value="pending">Pending task</option>
                            </select>
                        </dd>
                        <dt>Select Circle</dt>
                        <dd>
                            <select id="circle" class="dropdown">
                                <option value="Select Circle1" disabled selected>-- Select Circle --</option>
                                <option value="MP">MP (Madhya Pradesh)</option>
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
                        <dt>From</dt>
                        <dd>
                            <input type="date" class="date-input" id="fromDate" name="fromDate"  />
                        </dd>
                        <dt>To</dt>
                        <dd>
                            <input type="date" class="date-input" id="toDate" name="toDate"  />
                        </dd>
                        <dd><button className="taskstatus-button">Submit</button></dd>
                    </dl>
                </div>
            </section>
        </div>
    );
}

export default Taskstatus;