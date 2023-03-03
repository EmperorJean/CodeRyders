import React from 'react'
import 'react-bootstrap'
import {useApi} from "../hooks/use-api";
import "../css/Patient.css";
import {Link} from "react-router-dom";
import "../css/ExamAdmin.css"
import axios from 'axios';
import Footer from '../components/Footer'
const AdminDisplay = (props) => {
    const handleClick = (e) => {
        switch(e.target.id)
        {
            case 'remove':
                axios.post("http://localhost:9000/exams/delete", {exam_id: props.patient._id})
                 .then((response) => {
                 window.location = "/admin"
                 });
          break;

          case 'update':
            window.location = `exams/${props.patient._id}/update`
            break;
        }
    };
    return (
        <>
        <tr>
            <td className = "examPageLink"><Link to ={`/patient/${props.patient.patientId}`}>{props.patient.patientId}</Link></td> 
            <td className = "examPageLink"><Link to = {`/exams/${props.patient._id}`}>{props.patient.examId}</Link></td>
            <td><img src={props.patient.imageURL}/></td>
            <td>{props.patient.keyFindings}</td>
            <td>{props.patient.brixiaScores}</td>
            <td>{props.patient.age}</td>
            <td>{props.patient.sex}</td>
            <td>{props.patient.bmi}</td>
            <td>{props.patient.zipCode}</td>
            <td className="adminButtons">
                <button id="update" className="editButton" onClick={handleClick}>Update</button>
                <button id="remove" className="removeButton" onClick={handleClick}>Remove</button>
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
        <div id="createFormBtn">
        <Link to = "/create">Create New Exam</Link></div>
        <div className='container'>
            <table className='container'> 
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
        <Footer />
      </>
    )
}

export default ExamAdmin;