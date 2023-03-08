import 'react-bootstrap'
import {useState} from 'react'
import {useApi} from "../hooks/use-api";
import "../css/Patient.css";
import {Link} from "react-router-dom";
import "../css/ExamAdmin.css"
import axios from 'axios';
import Footer from '../components/Footer'
import tableSort from '../components/SortedTable';
const  API_URL = "https://coderyders-api.onrender.com"
const AdminDisplay = (props) => {
    const handleClick = (e) => {
        switch(e.target.id)
        {
            case 'remove':
                axios.post(`${API_URL}/exams/delete`, {exam_id: props.patient._id})
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
            <td><img src={props.patient.imageURL} alt=""/></td>
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
    };
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
    
    const handleSort = (props) => {
        let sort = tableSort(props, messages, up_down);
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
    display = (list.length < 2) ? [...messages] : [...list];
    return(
        <>
        
        <div id="createFormBtn">
        <Link to = "/create">Create New Exam</Link></div>
        <div className='container'>
        <h1>Admin</h1>
            <table className='container'> 
                <thead className="tableHead">
                    <tr id="headButt">
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
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className="tableBody">
                    {display.map((patient) => (<AdminDisplay key={patient.patientId} patient={patient}/>))}
                </tbody>
            </table>
        </div>
        <Footer />
      </>
    )
}

export default ExamAdmin;
