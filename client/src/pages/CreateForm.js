import React from 'react'
import 'react-bootstrap'
import "../css/CreateForm.css"
import { useState, } from 'react';
import axios from 'axios'

function CreateForm(){
    const [form, setForm] = useState({
        patientId: '',
        examId: '',
        age: '',
        sex: '',
        bmi: '',
        date: '',
        zipCode: '',
        keyFindings: '',
        imageURL: '',
        brixiaScores: '',
        
    })
  
    const handleChange = (e) => {
        const value = e.target.value;
        setForm({
          ...form,
          [e.target.name]: value
        });
      };
//       //autopopulate
//       const handleClick = () =>{
//         fetch('https://czi-covid-1-hjgxknco3a-uc.a.run.app/api/exams')
//         .then(res => res.json())
//         .then(data =>{
//             console.log(data)
    
    
          
//         })  
  
// }
      
const handleSubmit = (e) =>{
    e.preventDefault()

    const formData = {
        patientId: form.patientId,
        examId: form.examId,
        age: form.age,
        sex: form.sex,
        bmi: form.bmi,
        date: form.date,
        zipCode: form.zipCode,
        keyFindings: form.keyFindings,
        imageURL: form.imageURL,
        brixiaScores: form.brixiaScores,
    }

    axios.post("http://localhost:9000/exams/add", formData)
    .then(response => {
      console.log(response)
      window.location = "/exams"
      
    })

}
    return(
<>
<div className=" create">
    <div className=" ">
        <br /><br />
        <h3>Create Exam</h3><br />
        <form action='' id='dataForm' onSubmit={handleSubmit} >
            <div className="formBtns">
                <button type="submit"  className="btn btn-primary" id="addBtn" >Add Exam</button>
                <button type="button" className="btn btn-primary" id="randomBtn">Random Exam</button> 
                <button type='reset' value='Reset' className="btn btn-primary" id="cancelBtn">Cancel</button> 
            </div>

            <div className="form-row">
                
                <div className="form-group col-md-6">
                    <label id="patientId"> Patient ID: </label>
                    <input 
                    type="text" 
                    className="form-control" 
                    name="patientId" 
                    value={form.patientId}
                    // onChange={(e)=> setForm(e.target.value)}
                    onChange={handleChange}
                    placeholder="Enter your Patient ID..."
                    required/>
                </div>

                <div className="form-group col-md-6">
                    <label id="examId"> Exam ID: </label>
                    <input 
                    type="text" 
                    className="form-control" 
                    name="examId" 
                    value={form.examId}
                    // onChange={(e)=> setForm(e.target.value)}
                    onChange={handleChange}
                    placeholder="Enter your ExamID..."
                    required/>
                </div>

                <div className="form-group col-md-6">
                    <label> Age: </label>
                    <input 
                    type="number" 
                    className="form-control" 
                    name="age" 
                    value={form.age}
                    onChange={handleChange}
                    // onChange={(e)=> setForm(e.target.value)}
                    placeholder="Enter your Age..."
                    required/>
                </div>

                <div className="form-group col-md-6">
                    <label> Image URL: </label>
                    <input 
                    type="text" 
                    className="form-control" 
                    name="imageURL" 
                    value={form.imageURL}
                    onChange={handleChange}
                    // onChange={(e)=> setForm(e.target.value)}
                    placeholder="Enter your Image URL..."
                    required/>
                </div>

                <div className="form-group col-md-6">
                    <label> Sex: </label>
                    <input 
                    type="text" 
                    className="form-control" 
                    name="sex" 
                    value={form.sex}
                    onChange={handleChange}
                    // onChange={(e)=> setForm(e.target.value)}
                    placeholder="Enter your Sex..."
                    required/>
                </div>

                <div className="form-group col-md-6">
                    <label> Date: </label>
                    <input 
                    type="date" 
                    className="form-control" 
                    name="date" 
                    value={form.date}
                    onChange={handleChange}
                    // onChange={(e)=> setForm(e.target.value)}
                    placeholder="Enter the Exam Date..."
                    required/>
                </div>
                
                <div className="form-group col-md-6">
                    <label> BMI: </label>
                    <input 
                    type="text" 
                    className="form-control" 
                    name="bmi" 
                    value={form.bmi}
                    onChange={handleChange}
                    // onChange={(e)=> setForm(e.target.value)}
                    placeholder="Enter your BMI..."
                    required/>
                </div>

            
                <div className="form-group col-md-6">
                    <label> Brixia Score: (Separated by Comma) </label>
                    <input 
                    type="text" 
                    className="form-control" 
                    name="brixiaScores" 
                    value={form.brixiaScores}
                    onChange={handleChange}
                    // onChange={(e)=> setForm(e.target.value)}
                    placeholder="Enter Brixia Score..."
                    required/>
                </div>

                <div className="form-group col-md-6">
                    <label> Zip Code: </label>
                    <input 
                    type="text" 
                    className="form-control" 
                    name="zipCode" 
                    value={form.zipCode}
                    onChange={handleChange}
                    // onChange={(e)=> setForm(e.target.value)}
                    placeholder="Enter your Zip Code..."
                    required/>
                </div>

                <div className="form-group col-md-6">
                    <label> Key Findings: </label>
                    <textarea 
                    type="text" 
                    className="form-control" 
                    name="keyFindings" 
                    value={form.keyFindings}
                    onChange={handleChange}
                    // onChange={(e)=> setForm(e.target.value)}
                    placeholder="Enter the Key Findings..."
                    required></textarea>
                </div>
           

            </div>
        </form>
    </div>
</div>
</>
    )
}
export default CreateForm;