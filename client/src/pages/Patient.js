import { useApi } from "../hooks/use-api";
import { PatientExamItem as Item} from "../components/PatientExamItem";
import { PatientItem as PATIENT} from "../components/PatientItem";
import "../css/Patient.css"
import { useParams } from "react-router-dom";


export const Patient = (props) => {
let {id} = useParams();
console.log(id)
const { response } = useApi({ path: `patients/${id}` });

console.log(response)
  let messages = [];
  let patientId, numExams

  if (response) {
    messages = JSON.parse(response).message;
    console.log(messages);

    for (let i = 0; i < messages.length; i++) {
      console.log(messages[i]);
    }
    patientId = messages[0].patientId;
    
  }

 
  numExams = messages.length;

  return (
    <>
    <div id="heading">
      <h1>Patient Details</h1>
      <h4>Patient ID: {patientId}</h4>
      <h4>Number of Exams: {numExams}</h4>
    </div>
    <div id = "ExamItem">
      {messages.map((patient) => (
              <Item image = {patient.imageURL}  desc = {patient.keyFindings} version = {patient.__v} brixia = {patient.brixiaScores} exam = {patient.examId}/>
      ))}
    </div>
    </>
  );
};

export const Patients = (props) => {

    const { response } = useApi({ path: `patient` });
      let messages = [];
      let ids = [];
    
      if (response) {
        messages = JSON.parse(response).message;
    
        for (let i = 0; i < messages.length; i++) {
          ids.push(messages[i].patientId)
        }
        
      }

      return (
        <>
         {ids.map((id) => (
              <PATIENT id = {id}/>
      ))}
          
        </>
      );
    };