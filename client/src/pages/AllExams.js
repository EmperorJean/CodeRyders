import React from 'react';
import 'react-bootstrap';
// import {useApi} from "../hooks/use-api";
import axios from 'axios'
import { Link } from "react-router-dom";
import { useState, useEffect,  } from 'react';
import "../css/Patient.css";
import "../css/ExamPage.css"
import Footer from '../components/Footer'


function AllExams(){
    const [exam, setExam] = useState([])

 
    
    useEffect(()=> {
      fetchExam()
    }, [])

    const fetchExam = () => {
  


      axios.get(`http://localhost:9000/exams/`)
           .then((res) => {
              setExam(res.data)
           })
           .catch((err) =>{
                console.log(err)
           })
      }


    return(

        <>
  

<div className='container '>
  
<h1>Exams</h1>
    <table  className='container '>
        <thead>
            <tr>
                <th >Patient ID</th>
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
        {exam.map((exams) => (
       
        <tbody>
          <tr>
            <th scope="row"> <Link to={`/patient/${exams.patientId}`}>  { exams.patientId} </Link> </th>
            <td> <Link to={`/exams/${exams._id}`}>  { exams.examId }</Link>  </td>
            <td> <img src={ exams.imageURL }  alt="" /></td>
            <td> { exams.keyFindings } </td>
            <td> { exams.brixiaScores } </td>
            <td> { exams.age } </td>
            <td> { exams.sex } </td>
            <td> { exams.bmi } </td>
            <td> { exams.zipCode } </td>
          </tr>
    

        </tbody>
        ))}
      </table>
    
        </div>
        <Footer />
        </>
   
    
    )
}
 export default AllExams;