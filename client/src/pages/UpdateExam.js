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
      axios.get(`http://localhost:9000/exams/${id}`)
           .then((res) => {
              setSingleExam(res.data)
           })
           .catch((err) =>{
                console.log(err)
           })
      }
  
      const handleClick = (e) => {
        switch(e.target.id)
        {
            case 'update':
                axios.post("http://localhost:9000/exams/update", SingleExam)
                .then((response) => {
                window.location = "/admin"
                });

                break;
            case 'cancel':
                window.location = "/exams"
                break;
        }
      }
    
    return(

        <>
<div className="container py-4"> 

<div className="text-bg-dark  rounded-3" >
    
<button id="update" className="editButton" onClick={handleClick}>Update</button>
<button id="cancel" className="removeButton" onClick={handleClick}>cancel</button>

      <div className="container-fluid py-5" id='itemLeft'>
        <h1 className="display-5">Exam Information</h1>
        <div><input type="text" value={SingleExam.imageURL} onChange={(e) => setSingleExam({...SingleExam, imageURL: e.target.value})}/></div>
        <img src={SingleExam.imageURL} alt="" /> 
        <h4 className="center" id="date"> <b> Date: </b> {SingleExam.created}  </h4>
      </div>
    </div>

    <div className="row align-items-md-stretch center">
      <div className=" "  id='ExamLeft'>
        <div className='heading'  > 
          <h1 className='h1' >Patient Information</h1>
          <h5 id="PatientId"> <b> PatientID: </b> <input type="text" value={SingleExam.patientId} onChange={(e) => setSingleExam({...SingleExam, patientId: e.target.value})} /> </h5>
          <h5 id="age"> <b>Age:  </b> <input type="text" value={SingleExam.age} onChange={(e) => setSingleExam({...SingleExam, age: e.target.value})}/> </h5>
          <h5 id="sex"> <b>Sex:  <input type="text" value={SingleExam.sex} onChange={(e) => setSingleExam({...SingleExam, sex: e.target.value})} /></b> </h5>
          <h5 id="bmi"> <b> BMI:</b> <input type="text" value={SingleExam.bmi} onChange={(e) => setSingleExam({...SingleExam, bmi: e.target.value})}/> </h5>
          <h5 id="zipCode"> <b>Zip Code: </b> <input type="text" value={SingleExam.zipCode} onChange={(e) => setSingleExam({...SingleExam, zipCode: e.target.value})}/> </h5>
        </div>
      </div>
      <div className='main'>
        <div className="h-100 p-5 heading" id='ExamLeft'>
            
          <h1 className='h1'>Key Findings</h1>
          <h5 id="examId"> <b> Exam ID:</b> <input type="text" value={SingleExam.examId} onChange={(e) => setSingleExam({...SingleExam, examId: e.target.value})}/>  </h5>
          <h5 id="keyFindings"> <b>Key Findings: </b> <input type="text" value={SingleExam.keyFindings} onChange={(e) => setSingleExam({...SingleExam, keyFindings: e.target.value})}/>  </h5>
          <h5 id="brixiaScore"> <b> Brixia Score:</b> <input type="text" value={SingleExam.brixiaScores} onChange={(e) => setSingleExam({...SingleExam, brixiaScores: e.target.value})}/>  </h5>
     
   
        </div>
      </div>
 
    </div>
    </div>

       

    <Footer />
        </>
    
    
    )
}
export default ExamSingle