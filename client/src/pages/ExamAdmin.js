import React from 'react'
import 'react-bootstrap'

import {useApi} from "../hooks/use-api";
import "../css/Patient.css";
import { Link, useParams } from "react-router-dom";
import "../css/ExamPage.css"

function ExamAdmin(){
    return(
        <>
        <h1>Hello From Exam Admin</h1>
        <div className='containerExams'>
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
                </tbody>
            </table>
        </div>
      </>
    )
}
export default ExamAdmin;