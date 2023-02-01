import "../css/Patient.css"

export const Patient = (props) => {

  // Can be any format (tables, divs, etc), all that matters is you include 'props.parameterName'

  return (
    <div id = "patientCard">
        <div id="container">
          <div id="containerLeft">
            <img id = "image" src={props.imageUrl} alt="" />
          </div>
          <div id="containerRight">
            <p><b>Id:</b> {props.id}</p>
            <p><b>Patient Id:</b> {props.patientId}</p>
            <p><b>Patient Age:</b> {props.age}</p>
            <p><b>Patient Sex:</b> {props.sex}</p>
            <p><b>Zip Code:</b> {props.zipCode}</p>
            <p><b>Patient BMI:</b> {props.bmi}</p>
            <p><b>Version:</b> {props.v}</p>
            <p><b>Exam Id:</b> {props.examId}</p>
            <p><b>Key Findings:</b> {props.keyFindings}</p>
            <p><b>Brixia Scores:</b> {props.brixiaScores}</p>
          </div>
        </div>
    </div>
  )

}
  