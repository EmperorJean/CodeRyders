import React from 'react';
import 'react-bootstrap';
// import {useApi} from "../hooks/use-api";
import axios from 'axios'
import { Link } from "react-router-dom";
import { useState, useEffect,  } from 'react';
import "../css/Patient.css";
import "../css/ExamPage.css"
import Footer from '../components/Footer'
import tableSort from '../components/SortedTable';
const  API_URL = "https://coderyders-api.onrender.com"



function AllExams(){
    const [exam, setExam] = useState([])
    const [up_down, setUp_Down] = useState({
      byPatientId: false, 
      byExamId: false, 
      byBrixia: false, 
      byAge: false, 
      byBMI: false, 
      byZip: false});
  const [list, setList] = useState([[{
      patientId: "",
      _id: "",
      imageURL: "",
      keyFindings: "",
      brixiaScores: "",
      age: "",
      sex: "",
      bmi: "",
      zipCode: "",
  }]]);
 
    
    useEffect(()=> {
      fetchExam()
    }, [])

    const fetchExam = () => {

      axios.get(`${API_URL}/exams/`)
           .then((res) => {
              setExam(res.data)
           })
           .catch((err) =>{
                console.log(err)
           })
      }
    
    const handleSort = (props) => {
        let sort = tableSort(props, exam, up_down);
        setList(sort);
        switch(props) {
            case "byPatientId":
                setUp_Down({byPatientId: !up_down.byPatientId});
                break;
            case "byExamId":
                setUp_Down({byExamId: !up_down.byExamId});
                break;
            case "byBrixia":
                setUp_Down({byBrixia: !up_down.byBrixia});
                break;
            case "byAge":
                setUp_Down({byAge: !up_down.byAge});
                break;
            case "byBMI":
                setUp_Down({byBMI: !up_down.byBMI});
                break;
            case "byZip":
                setUp_Down({byZip: !up_down.byZip});
                break;
           default:
            return; 
        }
        console.log("After sort");
        console.log(up_down);
    };
    let display = [];
    display = (list.length < 2) ? [...exam] : [...list];


    return(

        <>
  

<div className='container '>
  
<h1>Exams</h1>
    <table  className='container '>
        <thead>
            <tr className='headButt'>
            <th>
              <button className ="headButton" onClick={() => {handleSort("byPatientId")}}>
                Patient ID
              </button>
            </th>
            <th>
              <button className="headButton" onClick={() => {handleSort("byExamId")}}>
                Exam ID
              </button>
            </th>
            <th>Image</th>
            <th>Key Findings</th>
            <th>
              <button className="headButton" onClick={() => {handleSort("byBrixia")}}>
                Brixia Scores
              </button> 
            </th>
            <th>
              <button className="headButton" onClick={() => {handleSort("byAge")}}>
                Age
              </button>
            </th>
            <th>Sex</th>
            <th>
              <button className="headButton" onClick={() => {handleSort("byBMI")}}>
                BMI
              </button>
            </th>
            <th>
              <button className="headButton" onClick={() => {handleSort("byZip")}}>
                Zip Code
              </button>
            </th>
            </tr>
        </thead>
        {display.map((exams) => (
       
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