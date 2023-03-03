import React from 'react';
import 'react-bootstrap';
// import {useApi} from "../hooks/use-api";
import axios from 'axios'
import { useParams } from "react-router-dom";
import { useState, useEffect,  } from 'react';
import "../css/PatientItem.css"
import "../css/Exam.css"
import Footer from '../components/Footer'


function ExamSingle(){
    const [SingleExam, setSingleExam] = useState([])
    let { id } = useParams();
    
    useEffect(()=> {
      fetchSingleExam()
    }, [])

    const fetchSingleExam = () => {

      axios.get(`/exams/${id}`)
           .then((res) => {
              setSingleExam(res.data)
           })
           .catch((err) =>{
                console.log(err)
           })
      }
  

    
    return(

        <>
        
<div class="container py-4"> 
<div class="text-bg-dark  rounded-3" >
      <div class="container-fluid py-5" id='itemLeft'>
        <h1 class="display-5">Exam Information</h1>
        <img src={SingleExam.imageURL} alt="" /> 
        <h4 class="center" id="date"> <b> Date: </b> {SingleExam.created}  </h4>
      </div>
    </div>

    <div class="row align-items-md-stretch center">
      <div className=" "  id='ExamLeft'>
        <div className='heading'  > 
          <h1 className='h1' >Patient Information</h1>
          <h5 id="PatientId"> <b> PatientID: </b> {SingleExam.patientId} </h5>
          <h5 id="age"> <b>Age:  </b> {SingleExam.age} </h5>
          <h5 id="sex"> <b>Sex:  </b> {SingleExam.sex}</h5>
          <h5 id="bmi"> <b> BMI:</b> {SingleExam.bmi} </h5>
          <h5 id="zipCode"> <b>Zip Code: </b> {SingleExam.zipCode} </h5>
        </div>
      </div>
      <div className='main'>
        <div class="h-100 p-5 heading" id='ExamLeft'>
            
          <h1 className='h1'>Key Findings</h1>
          <h5 id="examId"> <b> Exam ID:</b>{SingleExam.examId} </h5>
          <h5 id="keyFindings"> <b>Key Findings: </b> {SingleExam.keyFindings} </h5>
          <h5 id="brixiaScore"> <b> Brixia Score:</b> {SingleExam.brixiaScores} </h5>
     
   
        </div>
      </div>
 
    </div>
    </div>

    <Footer />

       
        </>
    
    
    )
}
export default ExamSingle