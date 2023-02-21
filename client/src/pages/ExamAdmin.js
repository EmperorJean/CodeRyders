import React from 'react'
import 'react-bootstrap'

import {useApi} from "../hooks/use-api";
import "../css/Patient.css";
import { Link, useParams } from "react-router-dom";
import "../css/ExamAdmin.css"

const AdminDisplay = (props) => {
    return (
        <>
            <tr>
                <td></td> 
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </>
    );
};

export const ExamAdmin = (props) => {
    const { response } = useApi({path : `patient` });
    let messages = [];
    let ids = [];
  
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
                    {/* messages.map function here */}
                </tbody>
            </table>
        </div>
      </>
    )
}
export default ExamAdmin;