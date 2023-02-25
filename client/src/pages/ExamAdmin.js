import React from 'react'
import 'react-bootstrap'
import {useApi} from "../hooks/use-api";
import "../css/Patient.css";
import {Link} from "react-router-dom";
import "../css/ExamAdmin.css"
import { Button } from 'react-bootstrap';

const AdminDisplay = (props) => {
    const handleClick = () => {
        console.log("Test Click");
    };
    return (
        <>
        <tr>
            <td className = "examPageLink"><Link to ={`/patient/${props.patient.patientId}`}>{props.patient.patientId}</Link></td> 
            <td className = "examPageLink"><Link to = {`/exam/${props.patient.examId}`}>{props.patient.examId}</Link></td>
            <td>{props.patient.keyFindings}</td>
            <td>{props.patient.brixiaScores}</td>
            <td>{props.patient.age}</td>
            <td>{props.patient.sex}</td>
            <td>{props.patient.bmi}</td>
            <td>{props.patient.zipCode}</td>
            <td className="adminButtons">
                <button className="editButton" onClick={handleClick}>Edit</button>
                <button className="removeButton" onClick={handleClick}>Remove</button>
            </td>
        </tr>
        </>
    );
};

export const ExamAdmin = (props) => {
    const { response } = useApi({path : `patient` });
    let messages = [];
  
    if (response) {
        messages = JSON.parse(response).message;
    }

    return(
        <>
        <h1>Admin</h1>

        <div className='containerAdmin'>
            <table>
                <thead>
                    <tr>
                        <th>Patient ID</th>
                        <th>Exam ID</th>
                        <th>Image</th>
                        <th>Key Findings</th>
                        <th>Brixia Score</th>
                        <th>Age</th>
                        <th>Sex</th>
                        <th>BMI</th>
                        <th>Zip Code</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {messages.map((patient) => (<AdminDisplay patient={patient}/>))}
                </tbody>
            </table>
        </div>
      </>
    )
}
export default ExamAdmin;