import React from 'react'
import 'react-bootstrap'

function CreateForm(){
    return(
<>
<div className="row">
    <div className="col-md-6 offset-md-3">
        <br /><br />
        <h3>Create Exam</h3><br />
        <form>

            <button type="button" className="btn btn-primary">Add Exam</button> 
            <button type="button" className="btn btn-primary">Random Exam</button> 
            <button type="button" className="btn btn-primary">Cancel</button> 

            <div class="form-row">
                <div className="form-group col-md-6">
                    <label> Patient ID:</label>
                    <input type="text" className="form-control" name="PatientID:" placeholder="Enter your Patient ID..."/>
                </div>

                <div className="form-group col-md-6">
                    <label> Exam ID: </label>
                    <input type="text" className="form-control" name="ExamID" placeholder="Enter your ExamID..."/>
                </div>

                <div className="form-group col-md-6">
                    <label> Age: </label>
                    <input type="number" className="form-control" name="Age:" placeholder="Enter your Age..."/>
                </div>

                <div className="form-group col-md-6">
                    <label> Image URL: </label>
                    <input type="text" class="form-control" name="ImageURL" placeholder="Enter your Image URL..."/>
                </div>

                <div className="form-group col-md-6">
                    <label> Sex: </label>
                    <input type="text" className="form-control" name="Sex" placeholder="Enter your Sex..."/>
                </div>

                <div className="form-group col-md-6">
                    <label> Date: </label>
                    <input type="date" className="form-control" name="Date" placeholder="Enter the Exam Date..."/>
                </div>
                
                <div className="form-group col-md-6">
                    <label> BMI: </label>
                    <input type="number" className="form-control" name="BMI" placeholder="Enter your BMI..."/>
                </div>

                <div className="form-group col-md-6">
                    <label> Key Findings: </label>
                    <textarea type="text" className="form-control" name="KeyFindings" placeholder="Enter the Key Findings..."></textarea>
                </div>

                <div className="form-group col-md-6">
                    <label> Zip Code: </label>
                    <input type="number" className="form-control" name="ZipCode" placeholder="Enter your Zip Code..."/>
                </div>

                <div className="form-group col-md-6">
                    <label> Brixia Score: (separated by comma) </label>
                    <input type="number" className="form-control" name="BrixiaScore" placeholder="Enter Brixia Score..."/>
                </div>

            </div>
        </form>
    </div>
</div>
</>
    )
}
export default CreateForm;