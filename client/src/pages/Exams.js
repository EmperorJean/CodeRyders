import React from 'react';
import 'react-bootstrap';
import {useApi} from "../hooks/use-api";
import { PatientItem as PATIENT} from "../components/PatientItem";
import "../css/Patient.css";
import { Link, useParams } from "react-router-dom";

const ExamDisplay = (props) => {
    return (
    <tr>
        <td>{props.patient.patientId}</td> 
        <td>{props.patient.examId}</td>
        {/* <td img = {messages[0].imageURL}></td> */}
        <td><img src={props.patient.imageURL}/></td>
        <td>{props.patient.keyFindings}</td>
        <td>{props.patient.brixiaScores}</td>
        <td>{props.patient.age}</td>
        <td>{props.patient.sex}</td>
        <td>{props.patient.bmi}</td>
        <td>{props.patient.zipCode}</td>
    </tr>
    );
};

export const Exams = (props) => {
    const { response } = useApi({path : `patient` });
    let messages = [];
    let ids = [];
    console.log("__________________________");
    if (response) {
        messages = JSON.parse(response).message;
        console.log(messages);
        console.log("Test in If");
    }
    // for (let i = 0; i < messages.length; i++) {
    //     ids.push(messages[i].patientId);
    // }
    // console.log(ids);
    console.log(messages.length);
    return(
        <>
        <h1>Hello From Exams</h1>

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