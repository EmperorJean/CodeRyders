import { useApi } from "../hooks/use-api";
import { PatientExamItem as Item} from "../components/PatientExamItem";
import "../css/Patient.css"
export const Patient = (props) => {
  const { response } = useApi({ path: "patient/COVID-19-AR-16406502" });

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
