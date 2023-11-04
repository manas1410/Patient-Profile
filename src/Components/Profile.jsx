import React from "react";
import './Profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft,faUser } from '@fortawesome/free-solid-svg-icons';
import { LiaFileMedicalAltSolid } from 'react-icons/lia';
import { MdShowChart } from 'react-icons/md';


function Profile(){
    return(
        <div>
            <div className="rectangle1"></div>
            <table className="top-bar">
                <tr>
                    <td><FontAwesomeIcon icon={faArrowLeft} /></td>
                    <td className="top-bar-details">View Patient</td>
                </tr>
            </table>
            <hr className="line"/>
            <table className="details">
                <tr>
                
                    <td className="name">S.Meena, F/23</td>
                    <td className="user-logo" rowspan="2"><FontAwesomeIcon icon={faUser} size = '3x'/></td>
                </tr>
                <tr>
                    <td className="patient-id">Patient ID: 87 20200727153457</td>
                </tr>
            </table>
            <br/>
            <div className="body">
                <div className="container">
                    <div className="rectangle">
                        <div className="goal">
                            Goal reached
                        </div>
                        
                        <table className="container-2">
                            <tr>
                                <td rowSpan="2">
                                    <div className="semi-1">
                                        <div className="semi-2">
                                            <div className="per">40%</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="rectangle-2">
                                        <div>
                                            Emg
                                        </div>
                                        <div className="chart-1">
                                            <MdShowChart size='3x'/>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                            <td>
                                    <div className="rectangle-2">
                                        <div>
                                            ROM
                                        </div>
                                        <div className="chart-1">
                                            <MdShowChart size='3x'/>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
                <br/>
                <table className="details">
                    <tr>
                        <td className="key">Phone no.</td>
                        <td className="value">📞 8022334455</td>
                    </tr>
                    <tr>
                        <td className="key">Mail ID</td>
                        <td className="value">✉️ meenarabinsachin2@gmail.com</td>
                    </tr>
                    <tr>
                    <td className="key">Affected side</td>
                        <td className="value">🫁 Billateral</td>
                    </tr>
                    <tr>
                    <td className="key">Condition</td>
                        <td className="value">⫘ Ortho</td>
                    </tr>
                    <tr>
                    <td className="key">Speciality</td>
                        <td className="value">🩺 Osteoarthritis</td>
                    </tr>
                </table>
            </div>
            <hr className="line"/>
            <table  className="details">
                <tr>
                    <td><LiaFileMedicalAltSolid /></td>
                    <td className="key-1">
                        Medical History
                    </td>
                    <td className="value">Hypertension,DM, Hypothyrodism</td>
                </tr>
            </table>
        </div>
        
    );
}

export default Profile;