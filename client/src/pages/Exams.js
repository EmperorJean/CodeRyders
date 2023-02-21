import React from 'react';
import 'react-bootstrap';
import {useApi} from "../hooks/use-api";
import "../css/Patient.css";
import { Link, useParams } from "react-router-dom";
import "../css/ExamPage.css"

const ExamDisplay = (props) => {
    return (
    <>
    <tr>
        <td className = "examPageLink">
            <Link to ={`/patient/${props.patient.patientId}`}>{props.patient.patientId}</Link>
        </td> 
        <td className = "examPageLink">
            <Link to = {`/exam/${props.patient.examId}`}>{props.patient.examId}</Link>
        </td>
        <td><img src={props.patient.imageURL}/></td>
        <td>{props.patient.keyFindings}</td>
        <td>{props.patient.brixiaScores}</td>
        <td>{props.patient.age}</td>
        <td>{props.patient.sex}</td>
        <td>{props.patient.bmi}</td>
        <td>{props.patient.zipCode}</td>
    </tr>
    </>
    );
};

export const Exams = (props) => {
    const { response } = useApi({path : `patient` });
    let messages = [];
    let ids = [];
  
    if (response) {
        messages = JSON.parse(response).message;
        console.log("Test in If");
    }
    console.log(messages.length);
    return(
        <>
        <div className="header">
            <h1 className='examHeader'>Exams</h1>
        <p className='examSubheader'>Total Exams: {messages.length}</p>
        </div>

        <div className='containerExams'>
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
                    </tr>
                </thead>
                <tbody>
                    {messages.map((patient) => (<ExamDisplay patient = {patient}/>))}
                </tbody>
            </table>
        </div>
        </>
    )
}

export default Exams;